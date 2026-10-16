"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconCreditCardOff, IconLock, IconShieldLock } from "@tabler/icons-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import Illustration from "@/components/Illustration";

const icons = [IconLock, IconShieldLock, IconCreditCardOff];

export default function Trust() {
  const t = useTranslations("Trust");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-background via-emerald-50/40 to-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <Illustration
          src="/illustrations/security.svg"
          className="mb-12 max-w-[220px] sm:max-w-[260px]"
          tone="cyan"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-6 md:grid-cols-3"
        >
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.body}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed p-5 text-center text-sm leading-relaxed text-muted-foreground">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
