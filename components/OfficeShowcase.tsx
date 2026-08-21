"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, MapPin, Sparkles } from "lucide-react";
import RevealText from "./ui/RevealText";
import FadeUp from "./ui/FadeUp";
import TiltCard from "./ui/TiltCard";

export default function OfficeShowcase() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-28">
      <div className="absolute inset-0 bg-aurora-gradient opacity-40" />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-12">
        <FadeUp>
          <TiltCard className="!p-3">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
              <Image
                src="/lobby.jpg"
                alt="Azmiq Consulting reception and lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2"
              >
                <Sparkles size={14} className="text-bronze-300" />
                <span className="text-[11px] uppercase tracking-[0.1em] text-bronze-100/90">
                  Global HQ &mdash; London
                </span>
              </motion.div>
            </div>
          </TiltCard>
        </FadeUp>

        <div>
          <FadeUp>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bronze-400">
              Step Inside Azmiq
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="Built for the way modern enterprises work"
            className="mt-4 block font-serif text-4xl leading-tight text-bronze-100 sm:text-5xl"
          />
          <FadeUp delay={0.15}>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-bronze-100/55">
              Behind every engagement is a team of certified consultants
              working from strategically placed offices across three
              continents &mdash; giving our clients round-the-clock access to
              SAP expertise, wherever their business operates.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-bronze-300/12 bg-charcoal-800/60 p-4">
              <Building2 size={18} strokeWidth={1.5} className="mt-0.5 text-bronze-300" />
              <div>
                <div className="text-[13px] font-semibold text-bronze-100">
                  Modern Workspaces
                </div>
                <div className="mt-1 text-[12px] leading-relaxed text-bronze-100/50">
                  Collaborative offices built for focused, high-impact delivery.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-bronze-300/12 bg-charcoal-800/60 p-4">
              <MapPin size={18} strokeWidth={1.5} className="mt-0.5 text-bronze-300" />
              <div>
                <div className="text-[13px] font-semibold text-bronze-100">
                  3 Global Locations
                </div>
                <div className="mt-1 text-[12px] leading-relaxed text-bronze-100/50">
                  London, Mumbai, and Riyadh &mdash; local presence, global reach.
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
