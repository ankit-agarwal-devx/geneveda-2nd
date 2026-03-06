"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2b2b2b] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="text-center relative z-10">
        {/* Animated Error Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[12rem] md:text-[15rem] font-bold leading-none text-tertiary bg-clip-text bg-gradient-to-b from-secondary to-transparent opacity-20 select-none">
            404
          </h1>
        </motion.div>

        {/* Message Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="-mt-16 md:-mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-widest">
            Sequence <span className="text-secondary">Not Found</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
            The data string you are looking for has been moved, deleted, or never existed in the GeneVeda Biosciences database.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 bg-secondary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,150,0.3)] transition-all duration-300 w-full sm:w-auto"
            >
              Return Home
            </Link>
            <Link
              href="/trainings/short-modules"
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              View Trainings
            </Link>
          </div>
        </motion.div>

        {/* Technical Footer Decoration */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-20 font-mono text-[10px] text-gray-100 tracking-[0.5em] uppercase"
        >
          Error Code: ERR_BIO_SEQ_NULL
        </motion.div>
      </div>
    </div>
  );
}