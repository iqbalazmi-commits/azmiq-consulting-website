"use client";

import CountUp from "./ui/CountUp";
import RingStat from "./ui/RingStat";
import FadeUp from "./ui/FadeUp";
import RevealText from "./ui/RevealText";

const STATS = [
  { to: 20, suffix: "+", label: "Projects Delivered" },
  { to: 2015, suffix: "", label: "Founded" },
  { to: 40, suffix: "+", label: "Certified Consultants" },
  { to: 98, suffix: "%", label: "Client Retention" },
];

const RINGS = [
  { percent: 96, label: "On-Time Delivery", color: "#c08a4a" },
  { percent: 92, label: "Client Satisfaction", color: "#4a9d92" },
  { percent: 88, label: "Cost Efficiency", color: "#dcbf92" },
];

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-28">
      <div className="absolute inset-0 bg-aurora-gradient opacity-60" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bronze-400">
              Results Driven
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="Measurable impact, delivered consistently"
            className="mt-4 block font-serif text-4xl leading-tight text-bronze-100 sm:text-5xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-10 border-b border-bronze-300/10 pb-16 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08}>
              <CountUp
                to={s.to}
                suffix={s.suffix}
                className="text-gradient-bronze font-serif text-5xl font-medium sm:text-6xl"
              />
              <div className="mt-2 text-[13px] uppercase tracking-[0.1em] text-bronze-100/50">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {RINGS.map((r, i) => (
            <FadeUp key={r.label} delay={i * 0.1} className="flex justify-center">
              <RingStat {...r} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
