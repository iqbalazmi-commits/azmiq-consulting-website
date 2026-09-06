"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareText, Send, X } from "lucide-react";
import {
  QUICK_REPLIES,
  FALLBACK_ANSWER,
  findBestMatch,
  findEntryById,
} from "@/lib/chatbotKnowledge";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

let idCounter = 0;
const nextId = () => ++idCounter;

const WELCOME_TEXT =
  "Hi there! 👋 I'm the Azmiq Assistant. Ask me about our services, pricing, locations, or how to get in touch — or pick a topic below.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId(), from: "bot", text: WELCOME_TEXT },
  ]);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const respond = (userText: string) => {
    const match = findBestMatch(userText);
    const answer = match ? match.answer : FALLBACK_ANSWER;
    setMessages((m) => [
      ...m,
      { id: nextId(), from: "user", text: userText },
    ]);
    setShowQuickReplies(false);
    setTimeout(() => {
      setMessages((m) => [...m, { id: nextId(), from: "bot", text: answer }]);
    }, 450);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    respond(trimmed);
    setInput("");
  };

  const handleQuickReply = (id: string) => {
    const entry = findEntryById(id);
    if (!entry) return;
    setMessages((m) => [
      ...m,
      { id: nextId(), from: "user", text: entry.question },
    ]);
    setShowQuickReplies(false);
    setTimeout(() => {
      setMessages((m) => [...m, { id: nextId(), from: "bot", text: entry.answer }]);
    }, 400);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="fixed bottom-[92px] right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-bronze-500 to-bronze-600 text-charcoal-950 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      >
        {open ? <X size={22} /> : <MessageSquareText size={22} strokeWidth={1.75} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass fixed bottom-[160px] right-6 z-40 flex h-[480px] w-[92vw] max-w-[380px] flex-col overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center gap-3 border-b border-bronze-300/15 px-4 py-3">
              <Image
                src="/logo-icon.png"
                alt="Azmiq"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <div>
                <div className="text-[13px] font-semibold text-bronze-100">
                  Azmiq Assistant
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-bronze-100/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  Online
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-sm bg-gradient-to-br from-bronze-500 to-bronze-600 text-charcoal-950"
                        : "rounded-bl-sm border border-bronze-300/15 bg-charcoal-800/80 text-bronze-100/85"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {showQuickReplies && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuickReply(q.id)}
                      className="rounded-full border border-bronze-300/25 px-3 py-1.5 text-[12px] text-bronze-200 transition-colors hover:border-bronze-300/60 hover:bg-bronze-300/10"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-bronze-300/15 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 rounded-full border border-bronze-300/15 bg-charcoal-800/60 px-4 py-2 text-[13px] text-bronze-100 placeholder:text-bronze-100/35 focus:border-bronze-300/40 focus:outline-none"
              />
              <button
                onClick={handleSend}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-bronze-500 to-bronze-600 text-charcoal-950 transition-transform hover:scale-105"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
