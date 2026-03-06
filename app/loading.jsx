"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center">
      <div className="relative w-64 h-1 bg-white/5 overflow-hidden rounded-full">
        {/* The Animated Progress Bar */}
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent"
        />
      </div>

      {/* Lab Context Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <p className="text-secondary font-mono text-[10px] tracking-[0.3em] uppercase">
          Initializing Data Stream
        </p>
        <span className="text-gray-600 font-mono text-[8px] uppercase">
          Fetching GeneVeda Biosciences Protocols...
        </span>
      </motion.div>

      {/* Subtle background pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
    </div>
  );
}