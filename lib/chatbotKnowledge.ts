export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
};

export const KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon"],
    question: "Hi there",
    answer:
      "Hi there! 👋 I'm the Azmiq Assistant. Ask me about our services, pricing, locations, or how to get in touch — I'm happy to help.",
  },
  {
    id: "services",
    keywords: [
      "service",
      "services",
      "offer",
      "what do you do",
      "help with",
      "provide",
      "do you do",
      "specialize",
    ],
    question: "What services do you offer?",
    answer:
      "We provide end-to-end SAP consulting across six core areas:\n\n• SAP S/4HANA implementation\n• SAP FICO (financial accounting & controlling)\n• SAP MM/SD (procurement, sales & distribution)\n• SAP SuccessFactors (HR & workforce management)\n• SAP EWM (warehouse management)\n• SAP BTP (integration, automation & AI)\n\nWe also offer managed services and staff augmentation for ongoing support.",
  },
  {
    id: "pricing",
    keywords: [
      "price",
      "pricing",
      "cost",
      "costs",
      "rate",
      "rates",
      "fee",
      "fees",
      "budget",
      "how much",
      "expensive",
      "cheap",
      "afford",
    ],
    question: "How much do you charge?",
    answer:
      "Pricing depends on project scope, but as a general guide:\n\n• SAP Consultants: roughly $750–$1,400/day depending on seniority and module — typically about 5% below standard market rates\n• Full implementations (e.g. S/4HANA): custom-quoted, mid-size projects often start around $50,000+\n• Managed services: monthly retainer packages available\n\nThese are indicative ranges, not fixed quotes — every project gets a free consultation and a tailored proposal. Want to book one?",
  },
  {
    id: "locations",
    keywords: [
      "location",
      "locations",
      "office",
      "offices",
      "where",
      "based",
      "address",
      "headquarters",
      "hq",
      "riyadh",
      "london",
      "mumbai",
    ],
    question: "Where are you located?",
    answer:
      "We have three offices:\n\n• Mumbai, India — our original HQ, since 2015\n• London, UK — Global HQ, since 2024\n• Riyadh, Saudi Arabia — Middle East HQ, since 2024\n\nExact addresses and phone numbers are in the footer and hero section of this page.",
  },
  {
    id: "about",
    keywords: [
      "about",
      "history",
      "founded",
      "started",
      "when",
      "company",
      "who are you",
      "story",
      "background",
    ],
    question: "Tell me about your company",
    answer:
      "Azmiq Consulting started in Mumbai, India in 2015, delivering hands-on SAP expertise to growing enterprises. In 2024 we opened our Global HQ in London and established a Middle East presence in Riyadh — bringing that same depth of expertise to clients across three continents.",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "whatsapp",
      "reach",
      "talk",
      "call",
      "get in touch",
      "speak",
    ],
    question: "How can I contact you?",
    answer:
      "You can reach us anytime:\n\n• Email: support@azmiqconsulting.com\n• WhatsApp: use the chat button in the corner of this page\n• Book a free consultation directly from the menu\n\nWe typically respond within one business day.",
  },
  {
    id: "process",
    keywords: [
      "process",
      "how do you work",
      "methodology",
      "approach",
      "steps",
      "how does it work",
    ],
    question: "What's your process?",
    answer:
      "Our process has four steps:\n\n1. Discover — we assess your current landscape, goals, and constraints\n2. Design — our architects craft a tailored SAP roadmap\n3. Deploy — certified consultants implement, integrate, and test\n4. Sustain — ongoing support, optimization, and managed services",
  },
  {
    id: "industries",
    keywords: [
      "industry",
      "industries",
      "sector",
      "sectors",
      "clients",
      "who do you work with",
      "customers",
    ],
    question: "What industries do you serve?",
    answer:
      "We work across Manufacturing, Retail, Healthcare, and Financial Services, among other enterprise sectors — with SAP solutions tailored to each industry's specific operating model.",
  },
  {
    id: "consultation",
    keywords: [
      "consultation",
      "book",
      "meeting",
      "demo",
      "schedule",
      "appointment",
      "quote",
      "get started",
    ],
    question: "How do I book a consultation?",
    answer:
      "Easy — click \"Book Consultation\" in the navigation bar or hero section, which opens a pre-filled email to support@azmiqconsulting.com. Or just WhatsApp us using the chat button in the corner. We'll set up a time and give you a tailored quote.",
  },
  {
    id: "careers",
    keywords: [
      "career",
      "careers",
      "job",
      "jobs",
      "hiring",
      "work with you",
      "join",
      "vacancy",
      "employment",
    ],
    question: "Are you hiring?",
    answer:
      "We're always interested in connecting with SAP talent. Email your CV and area of expertise to support@azmiqconsulting.com and our team will be in touch.",
  },
  {
    id: "results",
    keywords: [
      "experience",
      "projects",
      "results",
      "track record",
      "delivered",
      "how many",
      "proven",
    ],
    question: "What's your track record?",
    answer:
      "We've delivered 20+ SAP projects since 2015, with a 98% client retention rate, 96% on-time delivery, and consultants working across three continents.",
  },
];

export const QUICK_REPLIES: { label: string; id: string }[] = [
  { label: "Our Services", id: "services" },
  { label: "Pricing", id: "pricing" },
  { label: "Locations", id: "locations" },
  { label: "Book a Consultation", id: "consultation" },
];

export const FALLBACK_ANSWER =
  "I don't have a specific answer for that, but our team would love to help directly — email support@azmiqconsulting.com or WhatsApp us using the button in the corner, and we'll get back to you quickly.";

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function findBestMatch(query: string): KnowledgeEntry | null {
  const q = query.toLowerCase().trim();
  let best: { entry: KnowledgeEntry; score: number } | null = null;

  for (const entry of KNOWLEDGE) {
    let score = 0;
    for (const kw of entry.keywords) {
      const pattern = new RegExp(`\\b${escapeRegex(kw.toLowerCase())}\\b`);
      if (pattern.test(q)) {
        score += kw.split(" ").length;
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  return best?.entry ?? null;
}

export function findEntryById(id: string): KnowledgeEntry | undefined {
  return KNOWLEDGE.find((e) => e.id === id);
}
