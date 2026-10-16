"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconSparkles } from "@tabler/icons-react";

// A slow, endless strip of the product's key phrases
export default function Marquee() {
  const t = useTranslations("Marquee");
  const items = t.raw("items") as string[];
  const row = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-foreground/5 bg-background py-5">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className="flex items-center gap-10 text-lg font-medium whitespace-nowrap text-muted-foreground"
          >
            {item}
            <IconSparkles className="size-4 text-primary" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
