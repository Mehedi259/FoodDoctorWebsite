"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// A Storyset illustration on a soft brand gradient that slowly breathes
// behind it and floats gently in front. Decorative: pass alt="".
export default function Illustration({
  src,
  className = "",
  tone = "emerald",
  priority = false,
}: {
  src: string;
  className?: string;
  tone?: "emerald" | "cyan";
  priority?: boolean;
}) {
  const glow =
    tone === "emerald"
      ? "bg-linear-to-br from-emerald-300/60 via-teal-200/50 to-cyan-200/60"
      : "bg-linear-to-br from-cyan-300/60 via-emerald-200/50 to-teal-200/60";

  return (
    <div className={`relative mx-auto w-full max-w-sm ${className}`}>
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.06, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute inset-[8%] rounded-[3rem] blur-2xl ${glow}`}
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src={src}
          alt=""
          width={1000}
          height={1000}
          priority={priority}
          sizes="(min-width: 1024px) 380px, 80vw"
          className="h-auto w-full drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}
