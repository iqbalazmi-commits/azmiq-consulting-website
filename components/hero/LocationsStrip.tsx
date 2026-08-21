"use client";

import { Landmark, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const LOCATIONS = [
  {
    city: "London",
    icon: Landmark,
    lines: ["Unit 19, 1–13 Adler Street", "London E1 1EG, United Kingdom"],
    phone: "+44 7741 856782",
    bg: "bg-bronze-600",
  },
  {
    city: "Mumbai",
    icon: Building2,
    lines: ["World Trade Centre, Tower 1, Arcade", "Cuffe Parade, Colaba, Mumbai 400005, India"],
    phone: "+91 9987567602",
    bg: "bg-teal-600",
  },
  {
    city: "Riyadh",
    icon: MapPin,
    lines: ["Riyadh, Saudi Arabia"],
    phone: "+966 54 249 6135",
    bg: "bg-forest-700",
  },
];

export default function LocationsStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {LOCATIONS.map((loc, i) => (
        <motion.div
          key={loc.city}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`${loc.bg} group relative overflow-hidden px-6 py-6 lg:px-10`}
        >
          <div className="relative z-10 flex items-start gap-4">
            <loc.icon
              size={30}
              strokeWidth={1.2}
              className="mt-1 shrink-0 text-white/85 transition-transform duration-500 group-hover:scale-110"
            />
            <div>
              <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                {loc.city}
              </div>
              {loc.lines.map((l) => (
                <div key={l} className="text-[12px] leading-relaxed text-white/75">
                  {l}
                </div>
              ))}
              <div className="mt-1 text-[12px] font-medium text-white/90">
                {loc.phone}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}
