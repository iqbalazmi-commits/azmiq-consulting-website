"use client";

import { ArrowRight } from "lucide-react";
import RevealText from "./ui/RevealText";
import MagneticButton from "./ui/MagneticButton";
import FadeUp from "./ui/FadeUp";
import { bookingMailto } from "@/lib/contact";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-28">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <RevealText
          as="h2"
          text="Ready to transform your enterprise?"
          className="block font-serif text-4xl leading-tight text-bronze-100 sm:text-5xl"
        />
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-bronze-100/55">
            Partner with Azmiq Consulting for SAP solutions engineered around
            your business — from London, Mumbai, and Riyadh to wherever you
            operate.
          </p>
        </FadeUp>
        <FadeUp delay={0.35} className="mt-9 flex justify-center">
          <MagneticButton href={bookingMailto}>
            Book Free Consultation <ArrowRight size={16} />
          </MagneticButton>
        </FadeUp>
      </div>
    </section>
  );
}
