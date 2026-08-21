"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  variant = "solid",
  className = "",
  onClick,
  href,
  target,
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const handleClick = (e: MouseEvent) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      setRipples((r) => [
        ...r,
        { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
      ]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    }
    onClick?.();
  };

  const base =
    "relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-bronze-500 to-bronze-600 text-charcoal-950 hover:from-bronze-400 hover:to-bronze-500"
      : "border border-bronze-300/40 text-bronze-200 hover:border-bronze-300 hover:bg-bronze-300/5";

  const Comp: any = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref as any}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles} glow-bronze ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{ left: r.x, top: r.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 260, height: 260, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
    </Comp>
  );
}
