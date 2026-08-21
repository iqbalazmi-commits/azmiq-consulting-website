"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1400;
    const raf = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(raf);
      else setTimeout(() => setVisible(false), 300);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-16 w-16 drop-shadow-[0_0_24px_rgba(192,138,74,0.35)]"
          >
            <Image
              src="/logo-icon.png"
              alt="Azmiq Consulting"
              width={128}
              height={128}
              priority
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 font-serif text-xl tracking-[0.3em] text-bronze-200"
          >
            AZMIQ
          </motion.div>
          <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-bronze-300/10">
            <motion.div
              className="h-full bg-gradient-to-r from-bronze-500 to-bronze-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
