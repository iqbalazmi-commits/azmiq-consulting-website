"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RingStat({
  percent,
  label,
  color = "#c08a4a",
}: {
  percent: number;
  label: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const r = 42;
  const c = 2 * Math.PI * r;

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <svg width="110" height="110" viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e8d5b5" strokeOpacity="0.08" strokeWidth="6" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: inView ? c - (percent / 100) * c : c }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="text-center">
        <div className="font-serif text-2xl text-bronze-100">{percent}%</div>
        <div className="mt-1 text-[12px] uppercase tracking-[0.1em] text-bronze-100/50">
          {label}
        </div>
      </div>
    </div>
  );
}
