"use client";

import { motion } from "framer-motion";

export default function RevealText({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: any;
  immediate?: boolean;
}) {
  const words = text.split(" ");
  const animationProps = immediate
    ? { animate: { y: "0%", opacity: 1 } }
    : { whileInView: { y: "0%", opacity: 1 }, viewport: { once: true, margin: "-10%" } };
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            {...animationProps}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
