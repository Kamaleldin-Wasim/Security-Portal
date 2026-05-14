"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export function LoadingOverlay({ isLoading, message }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy/50 backdrop-blur-md"
        >
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
              className="absolute h-10 w-10 rounded-full border-4 border-white/10 border-t-white/30"
            />

            {/* Pulsing Core */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute h-4 w-4 rounded-full bg-gold shadow-[0_0_15px_rgba(200,164,93,0.5)]"
            />
          </div>

          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-sm font-medium tracking-widest text-white/90 uppercase"
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
