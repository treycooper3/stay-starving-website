"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="absolute inset-0 hero-grid"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_70%)]" />
    </motion.div>
  );
}
