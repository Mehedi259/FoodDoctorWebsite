"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconArrowDown, IconCheck } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ANDROID_URL, IOS_URL } from "@/components/constants";

// Each word fades up and un-blurs in turn
const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.25 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Words({ text, className = "" }: { text: string; className?: string }) {
  return text.split(" ").map((word, i) => (
    <motion.span
      key={`${word}-${i}`}
      custom={i}
      variants={wordVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block whitespace-pre ${className}`}
    >
      {word}{" "}
    </motion.span>
  ));
}

export default function Hero() {
  const t = useTranslations("Hero");
  const trust = t.raw("trust") as string[];

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 lg:pt-36">
      {/* Background: soft gradient and two slowly turning glows */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-emerald-50 via-background to-background" />
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -start-40 -z-10 size-[36rem] rounded-full bg-[conic-gradient(from_0deg,var(--color-emerald-300),var(--color-cyan-300),var(--color-emerald-200),var(--color-emerald-300))] opacity-30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 -end-40 -z-10 size-[32rem] rounded-full bg-[conic-gradient(from_180deg,var(--color-cyan-300),var(--color-teal-200),var(--color-cyan-200),var(--color-cyan-300))] opacity-30 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
        <div className="min-w-0 text-center lg:text-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 gap-2 px-3 py-1.5 text-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {t("badge")}
            </Badge>
          </motion.div>

          <h1 className="text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <Words text={t("titleLine1")} />
            <br className="hidden sm:block" />
            <Words text={t("titleHighlight")} className="text-gradient" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-6"
                nativeButton={false}
                render={
                  <a
                    href={ANDROID_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("availableOn")} ${t("googlePlay")}`}
                  />
                }
              >
                <Image src="/logos/google-play.svg" alt="" width={20} height={20} />
                {t("googlePlay")}
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-6"
                nativeButton={false}
                render={
                  <a
                    href={IOS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("availableOn")} ${t("appStore")}`}
                  />
                }
              >
                <Image src="/logos/app-store.svg" alt="" width={20} height={20} />
                {t("appStore")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="mt-2 rounded-full"
              nativeButton={false}
              render={<a href="#ask-ai" />}
            >
              {t("askCta")}
              <IconArrowDown className="size-4" />
            </Button>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } } }}
            className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
          >
            {trust.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2"
              >
                <IconCheck className="size-4 text-primary" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/illustrations/eating-healthy-food.svg"
              alt=""
              width={1000}
              height={1000}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
