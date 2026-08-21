"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RevealText from "./ui/RevealText";
import MagneticButton from "./ui/MagneticButton";
import Skyline from "./hero/Skyline";
import FeatureStrip from "./hero/FeatureStrip";
import LocationsStrip from "./hero/LocationsStrip";
import OrbShowcase from "./hero/OrbShowcase";
import { bookingMailto } from "@/lib/contact";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const panelX = useSpring(useTransform(mx, [-1, 1], [-8, 8]), {
    stiffness: 60,
    damping: 20,
  });
  const panelY = useSpring(useTransform(my, [-1, 1], [-8, 8]), {
    stiffness: 60,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth) * 2 - 1);
    my.set((e.clientY / innerHeight) * 2 - 1);
  };

  return (
    <section id="top" onMouseMove={handleMove} className="relative overflow-hidden bg-charcoal-950">
      {/* aurora ambient background */}
      <div className="absolute inset-0 bg-aurora-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-transparent to-charcoal-950" />

      <div className="relative min-h-[92vh] pt-28 lg:pt-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-4 px-6 lg:grid-cols-2 lg:px-12">
          <motion.div
            style={{ x: panelX, y: panelY }}
            className="glass relative z-10 rounded-2xl p-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-0 lg:border-0"
          >
            <RevealText
              as="h1"
              text="Transform."
              immediate
              className="block font-serif text-6xl font-medium leading-[1.05] text-bronze-100 sm:text-7xl lg:text-8xl"
            />
            <RevealText
              as="h1"
              text="Optimize."
              delay={0.15}
              immediate
              className="block font-serif text-6xl font-medium leading-[1.05] text-bronze-100 sm:text-7xl lg:text-8xl"
            />
            <RevealText
              as="h1"
              text="Grow."
              delay={0.3}
              immediate
              className="text-gradient-bronze block bg-gradient-to-r from-teal-400 via-teal-400 to-bronze-300 bg-clip-text font-serif text-6xl font-medium leading-[1.05] text-transparent sm:text-7xl lg:text-8xl"
            />

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="my-7 h-[2px] w-24 origin-left bg-gradient-to-r from-bronze-400 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-md text-[13px] font-semibold uppercase tracking-[0.14em] text-bronze-200/90"
            >
              Enterprise SAP Consulting That Delivers Business Results
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-bronze-100/55"
            >
              Azmiq Consulting empowers organizations worldwide with
              end-to-end SAP solutions, expert resources, and outsourcing
              excellence to drive digital transformation and sustainable
              growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <MagneticButton href={bookingMailto}>
                Book Free Consultation <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton variant="outline" href="#services">
                Explore Services
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <OrbShowcase />
          </div>
        </div>

        <Skyline />
      </div>

      <FeatureStrip />
      <LocationsStrip />
    </section>
  );
}
