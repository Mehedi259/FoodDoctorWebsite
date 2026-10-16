"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconCheck } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/PhoneMockup";
import { ANDROID_URL, IOS_URL } from "@/components/constants";

export default function Hero() {
  const t = useTranslations("Hero");
  const trust = t.raw("trust") as string[];

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 lg:pt-36">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-emerald-50 via-background to-background" />
      <div className="absolute top-24 -start-32 -z-10 size-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute top-40 -end-24 -z-10 size-96 rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0 text-center lg:text-start"
        >
          <Badge variant="secondary" className="mb-6 gap-2 px-3 py-1.5 text-sm">
            <span className="size-2 rounded-full bg-primary" />
            {t("badge")}
          </Badge>

          <h1 className="text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("titleLine1")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button
              size="lg"
              variant="outline"
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
            <Button
              size="lg"
              variant="outline"
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
          </div>

          <Button
            variant="ghost"
            size="lg"
            className="mt-2"
            render={<a href="#ask-ai" />}
          >
            {t("askCta")}
          </Button>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <IconCheck className="size-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
