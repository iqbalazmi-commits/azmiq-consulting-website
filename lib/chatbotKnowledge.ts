export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
};

export const KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
    question: "Hi there",
    answer:
      "Hi there! 👋 I'm the Azmiq Assistant. Ask me about our services, pricing, locations, or how to get in touch — or pick a topic below.",
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
      "solutions",
    ],
    question: "What services do you offer?",
    answer:
      "We offer four core service lines:\n\n• SAP Implementation — end-to-end rollout of new SAP systems\n• SAP Migration — moving legacy systems onto modern SAP platforms\n• Managed Services — ongoing support and optimization\n• Staff Augmentation — certified SAP consultants embedded in your team\n\nOn the technical side, we cover S/4HANA, FICO, MM/SD, SuccessFactors, EWM, and BTP. Ask me about any of these specifically for more detail.",
  },
  {
    id: "module_s4hana",
    keywords: ["s/4hana", "s4hana", "s/4 hana", "hana", "erp"],
    question: "What is SAP S/4HANA?",
    answer:
      "SAP S/4HANA is our next-generation ERP suite — it powers intelligent, real-time enterprise operations, replacing legacy ERP systems with a modern, in-memory platform. We handle full S/4HANA implementations and migrations from older SAP or non-SAP systems.",
  },
  {
    id: "module_fico",
    keywords: ["fico", "financial accounting", "controlling", "finance module"],
    question: "What is SAP FICO?",
    answer:
      "SAP FICO covers financial accounting and controlling — giving you real-time visibility into enterprise finances, from general ledger and accounts payable/receivable to cost center accounting and profitability analysis.",
  },
  {
    id: "module_mmsd",
    keywords: ["mm/sd", "mm sd", "procurement", "materials management", "sales and distribution", "sales & distribution"],
    question: "What is SAP MM/SD?",
    answer:
      "SAP MM/SD covers end-to-end procurement, materials management, and sales & distribution — managing everything from purchasing and inventory to order processing and delivery.",
  },
  {
    id: "module_successfactors",
    keywords: ["successfactors", "hcm", "hr module", "human resources", "payroll", "workforce"],
    question: "What is SAP SuccessFactors?",
    answer:
      "SAP SuccessFactors is our cloud HCM (Human Capital Management) suite — covering talent management, payroll, and workforce analytics for managing your people end-to-end.",
  },
  {
    id: "module_ewm",
    keywords: ["ewm", "warehouse management", "warehouse", "logistics"],
    question: "What is SAP EWM?",
    answer:
      "SAP EWM (Extended Warehouse Management) handles complex, high-volume logistics networks — optimizing warehouse operations, inventory tracking, and fulfillment.",
  },
  {
    id: "module_btp",
    keywords: ["btp", "business technology platform", "integration platform", "automation platform"],
    question: "What is SAP BTP?",
    answer:
      "SAP BTP (Business Technology Platform) is used for integration, automation, and AI-driven extensions — connecting your SAP landscape with other systems and building custom extensions on top of it.",
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
      "addresses",
      "headquarters",
      "hq",
    ],
    question: "Where are you located?",
    answer:
      "We have three offices:\n\n• London, UK — Unit 19, 1–13 Adler Street, London E1 1EG, United Kingdom — +44 7741 856782\n• Mumbai, India — World Trade Centre, Tower 1, Arcade, Cuffe Parade, Colaba, Mumbai 400005, India — +91 9987567602\n• Riyadh, Saudi Arabia — +966 54 249 6135\n\nLondon is our Global HQ, Mumbai our original HQ (since 2015), and Riyadh our Middle East HQ.",
  },
  {
    id: "location_london",
    keywords: ["london", "uk office", "united kingdom", "britain"],
    question: "Tell me about your London office",
    answer:
      "Our London office is our Global HQ, established in 2024, at Unit 19, 1–13 Adler Street, London E1 1EG, United Kingdom. Phone: +44 7741 856782.",
  },
  {
    id: "location_mumbai",
    keywords: ["mumbai", "india office", "bombay"],
    question: "Tell me about your Mumbai office",
    answer:
      "Mumbai is where Azmiq began, back in 2015. Our office is at World Trade Centre, Tower 1, Arcade, Cuffe Parade, Colaba, Mumbai 400005, India. Phone: +91 9987567602.",
  },
  {
    id: "location_riyadh",
    keywords: ["riyadh", "saudi", "saudi arabia", "middle east office"],
    question: "Tell me about your Riyadh office",
    answer:
      "Riyadh is our Middle East HQ, established in 2024, extending our SAP delivery capability across the region. Phone: +966 54 249 6135.",
  },
  {
    id: "about",
    keywords: [
      "history",
      "founded",
      "started",
      "when founded",
      "when was",
      "your company",
      "who are you",
      "story",
      "background",
    ],
    question: "Tell me about your company",
    answer:
      "Azmiq Consulting started in Mumbai, India in 2015, delivering hands-on SAP expertise to growing enterprises. Nearly a decade later, in 2024, we opened our Global HQ in London and established a Middle East presence in Riyadh — bringing that same depth of expertise to clients across three continents.",
  },
  {
    id: "office_culture",
    keywords: ["workspace", "workspaces", "culture", "team", "work environment", "what's it like"],
    question: "What are your offices like?",
    answer:
      "Our offices are modern, collaborative workspaces built for focused, high-impact delivery — with certified consultants working across three continents, giving clients round-the-clock access to SAP expertise wherever their business operates.",
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
      "You can reach us anytime:\n\n• Email: support@azmiqconsulting.com\n• WhatsApp: use the chat button in the corner of this page\n• LinkedIn: linkedin.com/company/azmiqconsulting\n• Book a free consultation directly from the menu\n\nWe typically respond within one business day.",
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
      "Our process has four steps:\n\n1. Discover — we assess your current landscape, business goals, and technical constraints\n2. Design — our architects craft a tailored SAP roadmap aligned to your operating model\n3. Deploy — certified consultants implement, integrate, and rigorously test each module\n4. Sustain — ongoing support, optimization, and managed services keep you ahead",
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
      "statistics",
      "numbers",
    ],
    question: "What's your track record?",
    answer:
      "Some numbers that tell our story:\n\n• 20+ projects delivered\n• Founded 2015\n• 40+ certified consultants\n• 98% client retention\n• 96% on-time delivery\n• 92% client satisfaction\n• 88% cost efficiency",
  },
  {
    id: "global_presence",
    keywords: ["global presence", "worldwide", "international", "continents", "global reach"],
    question: "What's your global presence?",
    answer:
      "We operate from 3 strategic headquarters — London (Global HQ), Mumbai (original HQ, since 2015), and Riyadh (Middle East HQ) — giving us worldwide delivery capability across three continents.",
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
    // On a tie, prefer the later entry — more specific topics (e.g. a single
    // SAP module or office) are deliberately listed after their general
    // counterpart (e.g. "services" or "locations") in KNOWLEDGE.
    if (score > 0 && (!best || score >= best.score)) {
      best = { entry, score };
    }
  }

  return best?.entry ?? null;
}

export function findEntryById(id: string): KnowledgeEntry | undefined {
  return KNOWLEDGE.find((e) => e.id === id);
}
