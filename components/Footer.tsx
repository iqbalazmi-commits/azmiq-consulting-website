import Image from "next/image";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/contact";

export default function Footer() {
  const cols = [
    {
      title: "Services",
      links: ["SAP Implementation", "SAP Migration", "Managed Services", "Staff Augmentation"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Insights", "Contact"],
    },
    {
      title: "Industries",
      links: ["Manufacturing", "Retail", "Healthcare", "Financial Services"],
    },
  ];

  return (
    <footer className="border-t border-bronze-300/10 bg-charcoal-950 pb-10 pt-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-icon.png"
                alt="Azmiq Consulting"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-serif text-2xl font-semibold text-bronze-200">
                AZMIQ
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-bronze-100/45">
              Enterprise SAP consulting that delivers business results —
              across London, Mumbai, and Riyadh.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email Azmiq Consulting"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze-300/20 text-bronze-200/80 transition-all duration-300 hover:border-bronze-300/60 hover:text-bronze-200"
              >
                <Mail size={15} strokeWidth={1.5} />
              </a>
              <a
                href={CONTACT.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Azmiq Consulting on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze-300/20 text-bronze-200/80 transition-all duration-300 hover:border-bronze-300/60 hover:text-bronze-200"
              >
                <Linkedin size={15} strokeWidth={1.5} />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Azmiq Consulting on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze-300/20 text-bronze-200/80 transition-all duration-300 hover:border-teal-400/60 hover:text-teal-400"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.15em] text-bronze-300">
                {col.title}
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href={l === "Contact" ? `mailto:${CONTACT.email}` : "#"}
                      className="text-[13px] text-bronze-100/50 transition-colors hover:text-bronze-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bronze-300/10 pt-8 text-[12px] text-bronze-100/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Azmiq Consulting. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bronze-200">Privacy Policy</a>
            <a href="#" className="hover:text-bronze-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
