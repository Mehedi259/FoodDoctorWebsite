"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { IconCheck, IconLeaf, IconSparkles, IconUsers } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SectionHeader from "@/components/SectionHeader";

// Prices and credits are the plans shown in the app and in the privacy policy (USD)
const plans = {
  monthly: [
    { price: 9.99, credits: 300 },
    { price: 14.99, credits: 500 },
    { price: 24.99, credits: 900 },
  ],
  yearly: [
    { price: 99.99, credits: 4000 },
    { price: 149.99, credits: 7000 },
    { price: 249.99, credits: 12000 },
  ],
};

// The credit meter fills relative to the largest plan in each billing period
const maxCredits = { monthly: 900, yearly: 12000 };

const planIcons = [IconLeaf, IconSparkles, IconUsers];

type Period = keyof typeof plans;
type PlanText = { name: string; description: string; features: string[] };

export default function Pricing() {
  const t = useTranslations("Pricing");
  const format = useFormatter();
  const locale = useLocale();
  const [period, setPeriod] = useState<Period>("monthly");
  const planTexts = t.raw("plans") as PlanText[];
  const yearly = period === "yearly";

  const money = (value: number) =>
    format.number(value, { style: "currency", currency: "USD" });

  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden bg-background py-24"
      lang={locale}
    >
      {/* Soft colour wash behind the cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-48 -z-10 mx-auto h-112 max-w-5xl rounded-full bg-linear-to-r from-emerald-200/40 via-teal-200/40 to-cyan-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("body")} />

        <div className="mb-14 flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted-foreground">{t("billingLabel")}</p>
          <ToggleGroup
            aria-label={t("billingLabel")}
            variant="outline"
            size="lg"
            value={[period]}
            onValueChange={(value) => {
              if (value[0]) setPeriod(value[0] as Period);
            }}
          >
            <ToggleGroupItem value="monthly">{t("monthly")}</ToggleGroupItem>
            <ToggleGroupItem value="yearly" className="gap-2">
              {t("yearly")}
              <Badge variant="secondary">{t("saveBadge")}</Badge>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans[period].map((plan, index) => {
            const text = planTexts[index];
            const Icon = planIcons[index];
            const featured = index === 1;
            const creditsLabel = t("credits", { count: format.number(plan.credits) });

            return (
              <Card
                key={text.name}
                className={
                  featured
                    ? "relative h-full bg-linear-to-b from-emerald-50 via-background to-background shadow-2xl ring-2 ring-primary md:scale-105"
                    : "h-full"
                }
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    {featured && <Badge>{t("recommended")}</Badge>}
                  </div>
                  <CardTitle className="mt-4 text-2xl">{text.name}</CardTitle>
                  <CardDescription>{text.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-end gap-1">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={`${period}-${plan.price}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="text-5xl font-bold tracking-tight"
                        >
                          {money(plan.price)}
                        </motion.span>
                      </AnimatePresence>
                      <span className="pb-2 text-muted-foreground">
                        {yearly ? t("perYear") : t("perMonth")}
                      </span>
                    </div>
                    {yearly && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t("equivalent", { price: money(plan.price / 12) })}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-2 text-sm">
                      <span className="font-semibold">{creditsLabel}</span>
                      <span className="text-muted-foreground">
                        {yearly ? t("creditsPerYear") : t("creditsPerMonth")}
                      </span>
                    </div>
                    <Progress
                      value={(plan.credits / maxCredits[period]) * 100}
                      aria-label={creditsLabel}
                    />
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-semibold">{t("featuresTitle")}</p>
                    <ul className="space-y-3 text-sm">
                      {text.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <IconCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex-col gap-3">
                  <Button
                    className="w-full"
                    size="lg"
                    variant={featured ? "default" : "outline"}
                    nativeButton={false}
                    render={<a href="#get-app" />}
                  >
                    {t("getApp")}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    {yearly ? t("autoRenewYearly") : t("autoRenewMonthly")}
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
