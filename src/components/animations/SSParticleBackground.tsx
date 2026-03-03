"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

function gaussianRandom(): number {
  const u1 = Math.random();
  const u2 = Math.random();
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

export default function SSParticleBackground({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let animationFrameId: number;

    async function init() {
      const THREE = await import("three");
      const { EffectComposer } = await import(
        "three/examples/jsm/postprocessing/EffectComposer.js"
      );
      const { RenderPass } = await import(
        "three/examples/jsm/postprocessing/RenderPass.js"
      );
      const { UnrealBloomPass } = await import(
        "three/examples/jsm/postprocessing/UnrealBloomPass.js"
      );
      const { OutputPass } = await import(
        "three/examples/jsm/postprocessing/OutputPass.js"
      );

      if (disposed || !containerRef.current) return;

      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Scene — no background so canvas is transparent and blends with page
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050505, 0.008);

      // Camera — centered, framing the full SS formation
      const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 200);
      camera.position.set(0, 0, 22);

      // Renderer — alpha:true for transparent background
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);

      // Generate SS formation
      const positions = generateSSFormation(THREE);
      const particleCount = positions.length / 3;

      // Particle sizes — larger for more presence
      const sizes = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        sizes[i] = 0.8 + Math.random() * 2.0;
      }

      // Random speed/phase per particle for individual drift
      const speeds = new Float32Array(particleCount);
      const phases = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        speeds[i] = 0.5 + Math.random() * 1.5;
        phases[i] = Math.random() * Math.PI * 2;
      }

      // Particles
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particleGeometry.setAttribute(
        "aSize",
        new THREE.BufferAttribute(sizes, 1)
      );
      particleGeometry.setAttribute(
        "aSpeed",
        new THREE.BufferAttribute(speeds, 1)
      );
      particleGeometry.setAttribute(
        "aPhase",
        new THREE.BufferAttribute(phases, 1)
      );

      const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(0x3b82f6) },
          uColorAlt: { value: new THREE.Color(0x60a5fa) },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        },
        vertexShader: `
          uniform float uTime;
          uniform float uPixelRatio;
          attribute float aSize;
          attribute float aSpeed;
          attribute float aPhase;
          varying float vAlpha;
          varying float vColorMix;

          void main() {
            // Individual particle drift — each moves on its own orbit
            vec3 pos = position;
            float drift = uTime * aSpeed;
            pos.x += sin(drift * 0.6 + aPhase) * 0.8;
            pos.y += cos(drift * 0.4 + aPhase * 1.3) * 0.6;
            pos.z += sin(drift * 0.3 + aPhase * 0.7) * 1.2;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            float breathe = 0.7 + 0.3 * sin(uTime * 0.8 + position.x * 0.3 + position.y * 0.4);
            gl_PointSize = aSize * breathe * uPixelRatio * (10.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
            vAlpha = breathe;
            vColorMix = sin(uTime * 0.4 + position.x * 0.5 + aPhase) * 0.5 + 0.5;
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform vec3 uColorAlt;
          varying float vAlpha;
          varying float vColorMix;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float glow = 1.0 - smoothstep(0.0, 0.5, dist);
            glow = pow(glow, 1.5);
            vec3 color = mix(uColor, uColorAlt, vColorMix);
            gl_FragColor = vec4(color, glow * vAlpha * 0.95);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Connection lines
      const linePositions = generateConnections(positions, 3.5);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3)
      );

      const lineMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(0x1e3a5f) },
        },
        vertexShader: `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uTime;
          void main() {
            float pulse = 0.15 + 0.10 * sin(uTime * 1.2);
            gl_FragColor = vec4(uColor, pulse);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      // Post-processing
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        1.8,
        0.5,
        0.15
      );
      composer.addPass(bloomPass);
      composer.addPass(new OutputPass());

      // Animation
      const clock = new THREE.Clock();

      function animate() {
        if (disposed) return;
        animationFrameId = requestAnimationFrame(animate);

        const elapsed = clock.getElapsedTime();

        particleMaterial.uniforms.uTime.value = elapsed;
        lineMaterial.uniforms.uTime.value = elapsed;

        // Faster rotation and more pronounced oscillation
        particles.rotation.y = elapsed * 0.08;
        lines.rotation.y = elapsed * 0.08;
        particles.rotation.x = Math.sin(elapsed * 0.25) * 0.12;
        lines.rotation.x = Math.sin(elapsed * 0.25) * 0.12;
        particles.rotation.z = Math.cos(elapsed * 0.15) * 0.04;
        lines.rotation.z = Math.cos(elapsed * 0.15) * 0.04;

        composer.render();
      }

      animate();

      // Resize
      function handleResize() {
        if (!containerRef.current || disposed) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        composer.setSize(newWidth, newHeight);
        bloomPass.resolution.set(newWidth, newHeight);
      }

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        particleGeometry.dispose();
        particleMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        composer.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    let cleanup: (() => void) | undefined;
    init().then((fn) => {
      cleanup = fn;
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrameId);
      cleanup?.();
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={className ?? "absolute inset-0 z-0 pointer-events-none"}
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}

function generateSSFormation(
  THREE: typeof import("three")
): Float32Array {
  const allPositions: number[] = [];
  const scatterRadius = 1.0;
  const samplesPerCurve = 300;
  const particlesPerSample = 4;

  // First S — left side (scaled to fill viewport, centered at origin)
  const scale = 2.0;
  const xOffset = 3.25; // half the gap between the two S's, centers formation at x=0
  const rawFirstS = [
    [-1.0, 5.5],
    [-4.5, 5.5],
    [-5.5, 4.0],
    [-4.5, 2.5],
    [-2.0, 1.0],
    [-1.0, -0.5],
    [-1.5, -2.0],
    [-2.0, -3.5],
    [-4.5, -5.0],
    [-1.0, -5.0],
  ];

  const firstSPoints = rawFirstS.map(
    ([x, y]) => new THREE.Vector3((x + xOffset) * scale, y * scale, 0)
  );

  // Second S — right side, offset by 6.5 units (pre-scale)
  const secondSPoints = rawFirstS.map(
    ([x, y]) => new THREE.Vector3((x + xOffset + 6.5) * scale, y * scale, 0)
  );

  // Center the whole formation at x=0 by computing the midpoint
  const allXValues = [...firstSPoints, ...secondSPoints].map((p) => p.x);
  const centerX = (Math.min(...allXValues) + Math.max(...allXValues)) / 2;
  const allYValues = [...firstSPoints, ...secondSPoints].map((p) => p.y);
  const centerY = (Math.min(...allYValues) + Math.max(...allYValues)) / 2;
  for (const point of [...firstSPoints, ...secondSPoints]) {
    point.x -= centerX;
    point.y -= centerY;
  }

  // SS letter curves
  for (const curvePoints of [firstSPoints, secondSPoints]) {
    const curve = new THREE.CatmullRomCurve3(
      curvePoints,
      false,
      "catmullrom",
      0.5
    );

    for (let i = 0; i < samplesPerCurve; i++) {
      const t = i / (samplesPerCurve - 1);
      const point = curve.getPoint(t);

      for (let j = 0; j < particlesPerSample; j++) {
        allPositions.push(
          point.x + gaussianRandom() * scatterRadius,
          point.y + gaussianRandom() * scatterRadius,
          point.z + gaussianRandom() * (scatterRadius * 5)
        );
      }
    }
  }

  // Dense neural network cluster in the CENTER between the two S's
  const clusterCount = 400;
  const clusterSpreadX = 4.0;
  const clusterSpreadY = 6.0;
  const clusterSpreadZ = 3.0;
  for (let i = 0; i < clusterCount; i++) {
    allPositions.push(
      gaussianRandom() * clusterSpreadX,
      gaussianRandom() * clusterSpreadY,
      gaussianRandom() * clusterSpreadZ
    );
  }

  return new Float32Array(allPositions);
}

function generateConnections(
  positions: Float32Array,
  maxDistance: number
): Float32Array {
  const linePositions: number[] = [];
  const particleCount = positions.length / 3;
  const maxConnections = 3500;
  let connectionCount = 0;
  const maxDistSq = maxDistance * maxDistance;

  for (let i = 0; i < particleCount && connectionCount < maxConnections; i++) {
    const ix = positions[i * 3];
    const iy = positions[i * 3 + 1];
    const iz = positions[i * 3 + 2];

    for (
      let j = i + 1;
      j < particleCount && connectionCount < maxConnections;
      j++
    ) {
      const dx = ix - positions[j * 3];
      const dy = iy - positions[j * 3 + 1];
      const dz = iz - positions[j * 3 + 2];
      const distSq = dx * dx + dy * dy + dz * dz;

      if (distSq < maxDistSq) {
        linePositions.push(
          ix, iy, iz,
          positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
        );
        connectionCount++;
      }
    }
  }

  return new Float32Array(linePositions);
}
