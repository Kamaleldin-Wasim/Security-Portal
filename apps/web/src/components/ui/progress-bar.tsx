"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ProgressBar() {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Stop animation when pathname changes
    setIsAnimating(false);

    // Listen to all link clicks to start animation
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (
        anchor && 
        anchor.href && 
        anchor.href.startsWith(window.location.origin) &&
        !anchor.href.includes("#") &&
        anchor.target !== "_blank"
      ) {
        // Only start if the link is internal and not the current page
        const targetPath = new URL(anchor.href).pathname;
        if (targetPath !== window.location.pathname) {
          setIsAnimating(true);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: "90%", opacity: 1 }}
          exit={{ width: "100%", opacity: 0 }}
          transition={{ 
            width: { duration: 10, ease: "easeOut" },
            opacity: { duration: 0.3 }
          }}
          className="fixed top-0 left-0 z-[110] h-1 bg-gradient-to-r from-gold via-white to-gold shadow-[0_0_10px_rgba(200,164,93,0.8)]"
        />
      )}
    </AnimatePresence>
  );
}
