"use client";

import { Users, Box, ShieldCheck, BarChart3 } from "lucide-react";
import FadeUp from "../ui/FadeUp";

const FEATURES = [
  {
    icon: Users,
    title: "Global Presence",
    desc: "3 Strategic Headquarters Worldwide Delivery",
  },
  {
    icon: Box,
    title: "SAP Expertise",
    desc: "Comprehensive SAP Solutions Across All Modules",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Quality",
    desc: "Commitment to Excellence and Client Success",
  },
  {
    icon: BarChart3,
    title: "Results Driven",
    desc: "Solutions That Drive Measurable Impact",
  },
];

export default function FeatureStrip() {
  return (
    <div className="glass relative z-10 border-x-0 border-b-0">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {FEATURES.map((f, i) => (
          <FadeUp key={f.title} delay={i * 0.08} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-bronze-300/25 text-bronze-300 transition-all duration-300 hover:border-bronze-300/60 hover:shadow-[0_0_20px_rgba(192,138,74,0.3)]">
              <f.icon size={20} strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-bronze-100">
                {f.title}
              </div>
              <div className="mt-1 text-[13px] leading-snug text-bronze-100/50">
                {f.desc}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
