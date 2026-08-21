"use client";

import { MapPin } from "lucide-react";
import RevealText from "./ui/RevealText";
import FadeUp from "./ui/FadeUp";

const MILESTONES = [
  {
    year: "2015",
    country: "India",
    city: "Mumbai",
    desc: "Where Azmiq began — building deep SAP delivery expertise from our Mumbai team.",
  },
  {
    year: "2024",
    country: "United Kingdom",
    city: "London",
    desc: "Opened our Global HQ in London, bringing enterprise SAP consulting to clients worldwide.",
  },
  {
    year: "2024",
    country: "Saudi Arabia",
    city: "Riyadh",
    desc: "Established our Middle East presence in Riyadh, extending delivery across the region.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-charcoal-950 py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bronze-400">
              About Us
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="A decade of SAP expertise, expanding worldwide"
            className="mt-4 block font-serif text-4xl leading-tight text-bronze-100 sm:text-5xl"
          />
          <FadeUp delay={0.15}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-bronze-100/55">
              Azmiq Consulting started in Mumbai, India, in 2015, delivering
              hands-on SAP expertise to growing enterprises. Nearly a decade
              later, we opened our Global HQ in London and established a
              Middle East presence in Riyadh — both in 2024 — bringing that
              same depth of expertise to clients across three continents.
            </p>
          </FadeUp>
        </div>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="absolute left-6 top-0 hidden h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-bronze-300/30 via-teal-400/20 to-bronze-300/30 sm:hidden" />
          <div className="absolute left-0 right-0 top-6 hidden h-[2px] bg-gradient-to-r from-bronze-400/40 via-teal-400/30 to-bronze-400/40 sm:block" />

          {MILESTONES.map((m, i) => (
            <FadeUp key={`${m.country}-${m.year}`} delay={i * 0.12} className="relative pl-14 sm:pl-0">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-bronze-400 bg-charcoal-950 text-[10px] font-semibold text-bronze-200 sm:relative sm:mb-5">
                {m.year}
              </div>
              <div className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-bronze-300">
                <MapPin size={13} strokeWidth={1.5} />
                {m.city}, {m.country}
              </div>
              <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-bronze-100/55">
                {m.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
