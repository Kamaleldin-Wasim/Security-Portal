"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/50 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="h-16 w-16 rounded-full border-4 border-gold/20 border-t-gold"
        />
        
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute h-10 w-10 rounded-full border-4 border-navy/10 border-t-navy/30"
        />

        {/* Pulsing Core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute h-4 w-4 rounded-full bg-gold shadow-[0_0_15px_rgba(200,164,93,0.5)]"
        />
      </div>
      <p className="mt-6 text-sm font-bold tracking-[0.2em] text-navy/60 uppercase">
        Loading...
      </p>
    </div>
  );
}
