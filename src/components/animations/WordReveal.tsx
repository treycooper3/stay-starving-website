"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export default function WordReveal({
  text,
  className,
  staggerDelay = 0.06,
  initialDelay = 0,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-[0.15em]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.7,
              delay: initialDelay + index * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {index < words.length - 1 && (
            <span className="inline-block w-[0.3em]" />
          )}
        </span>
      ))}
    </span>
  );
}
