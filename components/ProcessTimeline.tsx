"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "./ui/RevealText";
import FadeUp from "./ui/FadeUp";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "We assess your current landscape, business goals, and technical constraints.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Our architects craft a tailored SAP roadmap aligned to your operating model.",
  },
  {
    n: "03",
    title: "Deploy",
    desc: "Certified consultants implement, integrate, and rigorously test each module.",
  },
  {
    n: "04",
    title: "Sustain",
    desc: "Ongoing support, optimization, and managed services keep you ahead.",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!lineRef.current || !containerRef.current) return;
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-charcoal-900 py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-teal-400">
              Our Process
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="A proven path from strategy to sustained value"
            className="mt-4 block font-serif text-4xl leading-tight text-bronze-100 sm:text-5xl"
          />
        </div>

        <div ref={containerRef} className="relative pl-10 sm:pl-16">
          <div className="absolute left-[3px] top-1 h-[calc(100%-8px)] w-[2px] bg-bronze-300/10 sm:left-[7px]" />
          <div
            ref={lineRef}
            className="absolute left-[3px] top-1 h-[calc(100%-8px)] w-[2px] bg-gradient-to-b from-bronze-300 via-teal-400 to-bronze-500 sm:left-[7px]"
          />

          <div className="flex flex-col gap-16">
            {STEPS.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.05} className="relative">
                <span className="absolute -left-10 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:-left-16">
                  <span className="absolute h-4 w-4 rounded-full border-2 border-bronze-400 bg-charcoal-900" />
                  <span className="absolute h-8 w-8 animate-pulse-ring rounded-full border border-bronze-400/60" />
                </span>
                <div className="text-[13px] font-semibold tracking-[0.15em] text-bronze-400">
                  STEP {s.n}
                </div>
                <h3 className="mt-2 font-serif text-3xl text-bronze-100">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-bronze-100/55">
                  {s.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
