"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Factory,
  Wallet,
  Users2,
  Truck,
  Cpu,
} from "lucide-react";
import RevealText from "./ui/RevealText";
import FadeUp from "./ui/FadeUp";
import TiltCard from "./ui/TiltCard";

const MODULES = [
  {
    icon: Wallet,
    title: "SAP FICO",
    desc: "Financial accounting and controlling for real-time visibility into enterprise finances.",
  },
  {
    icon: Factory,
    title: "SAP S/4HANA",
    desc: "Next-generation ERP suite powering intelligent, real-time enterprise operations.",
  },
  {
    icon: Truck,
    title: "SAP MM / SD",
    desc: "End-to-end procurement, materials management, and sales & distribution.",
  },
  {
    icon: Users2,
    title: "SAP SuccessFactors",
    desc: "Cloud HCM suite for talent management, payroll, and workforce analytics.",
  },
  {
    icon: Boxes,
    title: "SAP EWM",
    desc: "Extended warehouse management for complex, high-volume logistics networks.",
  },
  {
    icon: Cpu,
    title: "SAP BTP",
    desc: "Business Technology Platform for integration, automation, and AI-driven extensions.",
  },
];

export default function SapExpertise() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-charcoal-950 py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bronze-400">
              SAP Expertise
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="Comprehensive coverage across every SAP module"
            className="mt-4 block font-serif text-4xl leading-tight text-bronze-100 sm:text-5xl"
          />
          <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-bronze-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => (
            <FadeUp key={m.title} delay={i * 0.06}>
              <div onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <TiltCard>
                  <motion.div
                    animate={{
                      rotate: hovered === i ? 360 : 0,
                      scale: hovered === i ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-bronze-300/25 text-bronze-300"
                  >
                    <m.icon size={22} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="mt-5 font-serif text-2xl text-bronze-100">
                    {m.title}
                  </h3>
                  <motion.p
                    initial={false}
                    animate={{
                      height: hovered === i ? "auto" : 0,
                      opacity: hovered === i ? 1 : 0,
                      marginTop: hovered === i ? 10 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden text-[14px] leading-relaxed text-bronze-100/55"
                  >
                    {m.desc}
                  </motion.p>
                </TiltCard>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
