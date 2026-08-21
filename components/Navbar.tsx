"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Linkedin, Menu, MessageCircle, X } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { CONTACT, bookingMailto, whatsappLink } from "@/lib/contact";

const NAV_ITEMS = [
  { label: "Services", dropdown: true },
  { label: "SAP Expertise", dropdown: true },
  { label: "Industries", dropdown: true },
  { label: "Insights", dropdown: false },
  { label: "About Us", dropdown: false, href: "#about" },
  { label: "Careers", dropdown: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
    >
      <nav
        className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-bronze-300/15 bg-charcoal-950/75 px-5 py-2.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            : "border-white/[0.06] bg-charcoal-950/30 px-5 py-3.5 backdrop-blur-xl sm:px-7"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt="Azmiq Consulting"
            width={40}
            height={40}
            priority
            className="h-8 w-8 object-contain transition-transform duration-500 group-hover:rotate-6 sm:h-9 sm:w-9"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-wide text-bronze-200 sm:text-[22px]">
              AZMIQ
            </span>
            <span className="hidden text-[9px] tracking-[0.35em] text-bronze-300/50 sm:block">
              CONSULTING
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setActive(item.label)}
              onMouseLeave={() => setActive(null)}
            >
              {(() => {
                const Tag = item.href ? "a" : "button";
                return (
                  <Tag
                    href={item.href}
                    className="relative flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.03em] text-bronze-100/75 transition-colors duration-300 hover:text-bronze-100"
                  >
                    {active === item.label && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full bg-bronze-300/[0.08]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        size={12}
                        className={`relative transition-transform duration-300 ${
                          active === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Tag>
                );
              })()}
              <AnimatePresence>
                {item.dropdown && active === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="glass absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-xl p-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
                  >
                    {["Overview", "Solutions", "Case Studies"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="block rounded-lg px-3 py-2 text-[13px] text-bronze-100/75 transition-colors hover:bg-bronze-300/10 hover:text-bronze-100"
                      >
                        {s}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1.5 border-r border-bronze-300/15 pr-3">
            <a
              href={CONTACT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Azmiq Consulting on LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full text-bronze-200/70 transition-all duration-300 hover:bg-bronze-300/10 hover:text-bronze-200"
            >
              <Linkedin size={15} strokeWidth={1.5} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Azmiq Consulting on WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full text-bronze-200/70 transition-all duration-300 hover:bg-teal-400/10 hover:text-teal-400"
            >
              <MessageCircle size={15} strokeWidth={1.5} />
            </a>
          </div>
          <MagneticButton href={bookingMailto} className="!px-5 !py-2.5 !text-xs">
            Book Consultation
          </MagneticButton>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center text-bronze-200 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {NAV_ITEMS.map((item) => {
                const Tag = item.href ? "a" : "button";
                return (
                  <li key={item.label}>
                    <Tag
                      href={item.href}
                      onClick={() => item.href && setMobileOpen(false)}
                      className="block w-full rounded-lg px-3 py-2.5 text-left text-sm text-bronze-100/85 transition-colors hover:bg-bronze-300/10"
                    >
                      {item.label}
                    </Tag>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-3 border-t border-bronze-300/10 p-4">
              <a
                href={CONTACT.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Azmiq Consulting on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze-300/20 text-bronze-200/80"
              >
                <Linkedin size={15} strokeWidth={1.5} />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Azmiq Consulting on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze-300/20 text-bronze-200/80"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
              </a>
              <MagneticButton href={bookingMailto} className="!flex-1 !justify-center !px-5 !py-2.5 !text-xs">
                Book Consultation
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
