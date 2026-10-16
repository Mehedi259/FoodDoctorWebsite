"use client";

import { useFormatter, useLocale, useTranslations } from "next-intl";
import { IconCheck } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

type Period = keyof typeof plans;

export default function Pricing() {
  const t = useTranslations("Pricing");
  const format = useFormatter();
  const locale = useLocale();
  const planTexts = t.raw("plans") as { name: string; description: string }[];

  const money = (value: number) =>
    format.number(value, { style: "currency", currency: "USD" });

  const renderPlans = (period: Period) => (
    <div className="grid gap-6 md:grid-cols-3">
      {plans[period].map((plan, index) => {
        const text = planTexts[index];
        const recommended = index === 1;
        return (
          <Card key={text.name} className={recommended ? "ring-2 ring-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-2xl">{text.name}</CardTitle>
                {recommended && <Badge>{t("recommended")}</Badge>}
              </div>
              <CardDescription>{text.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <span className="text-4xl font-bold">{money(plan.price)}</span>
                <span className="text-muted-foreground">
                  {period === "monthly" ? t("perMonth") : t("perYear")}
                </span>
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <IconCheck className="size-4 text-primary" />
                  {t("credits", { count: format.number(plan.credits) })}{" "}
                  {period === "monthly" ? t("creditsPerMonth") : t("creditsPerYear")}
                </li>
                <li className="flex items-center gap-2">
                  <IconCheck className="size-4 text-primary" />
                  {period === "monthly" ? t("autoRenewMonthly") : t("autoRenewYearly")}
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={recommended ? "default" : "outline"}
                render={<a href="#get-app" />}
              >
                {t("getApp")}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );

  return (
    <section id="pricing" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" lang={locale}>
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("body")}
        />

        <Tabs defaultValue="monthly">
          <div className="mb-10 flex justify-center">
            <TabsList>
              <TabsTrigger value="monthly">{t("monthly")}</TabsTrigger>
              <TabsTrigger value="yearly">{t("yearly")}</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="monthly">{renderPlans("monthly")}</TabsContent>
          <TabsContent value="yearly">{renderPlans("yearly")}</TabsContent>
        </Tabs>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
