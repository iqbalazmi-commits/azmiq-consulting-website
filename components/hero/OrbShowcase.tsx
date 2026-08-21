"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Globe2, LucideIcon, ShieldCheck, TrendingUp, Users } from "lucide-react";

const CARDS = [
  {
    icon: Globe2,
    label: "Global Presence",
    value: "3 HQs",
    depth: 26,
    className: "left-[2%] top-[10%] sm:left-[6%]",
    delay: 0.9,
  },
  {
    icon: TrendingUp,
    label: "Projects Delivered",
    value: "20+",
    depth: 40,
    className: "right-[0%] top-[20%] sm:right-[2%]",
    delay: 1.05,
  },
  {
    icon: ShieldCheck,
    label: "Client Retention",
    value: "98%",
    depth: 18,
    className: "left-[4%] bottom-[14%] sm:left-[10%]",
    delay: 1.2,
  },
  {
    icon: Users,
    label: "Certified Consultants",
    value: "40+",
    depth: 32,
    className: "right-[2%] bottom-[6%] sm:right-[8%]",
    delay: 1.35,
  },
];

function KPICard({
  icon: Icon,
  label,
  value,
  depth,
  className,
  delay,
  mx,
  my,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  depth: number;
  className: string;
  delay: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const cx = useTransform(mx, [-0.5, 0.5], [-depth, depth]);
  const cy = useTransform(my, [-0.5, 0.5], [-depth, depth]);
  const sx = useSpring(cx, { stiffness: 60, damping: 18 });
  const sy = useSpring(cy, { stiffness: 60, damping: 18 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ x: sx, y: sy }}
      className={`glass absolute z-20 flex items-center gap-3 rounded-xl px-4 py-3 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3 + depth / 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-bronze-300/25 text-bronze-300"
      >
        <Icon size={16} strokeWidth={1.5} />
      </motion.div>
      <div>
        <div className="font-serif text-lg leading-none text-bronze-100">
          {value}
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.08em] text-bronze-100/50">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function OrbShowcase() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  const orbX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 50,
    damping: 20,
  });
  const orbY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      {/* ambient glow blobs */}
      <motion.div
        className="absolute h-[380px] w-[380px] rounded-full bg-bronze-500/25 blur-[100px] sm:h-[460px] sm:w-[460px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[280px] w-[280px] translate-x-24 translate-y-16 rounded-full bg-teal-500/15 blur-[90px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* orbit rings */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px]"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-bronze-300/20"
          style={{ borderStyle: "dashed" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-[5px] left-1/2 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-bronze-300 shadow-[0_0_12px_rgba(207,166,109,0.9)]" />
        </motion.div>

        <motion.div
          className="absolute inset-8 rounded-full border border-teal-400/20"
          style={{ borderStyle: "dashed" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -bottom-[5px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(74,157,146,0.9)]" />
        </motion.div>

        <div className="absolute inset-16 rounded-full border border-bronze-300/10" />

        {/* center emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative z-10 flex h-28 w-28 items-center justify-center rounded-full p-5 shadow-[0_0_50px_rgba(192,138,74,0.25)] sm:h-36 sm:w-36"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src="/logo-icon.png"
              alt="Azmiq Consulting"
              fill
              sizes="144px"
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* floating KPI cards */}
      {CARDS.map((c) => (
        <KPICard key={c.label} {...c} mx={mx} my={my} />
      ))}
    </div>
  );
}
