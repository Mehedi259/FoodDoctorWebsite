"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFormatter, useTranslations } from "next-intl";
import { IconShieldCheck } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import SectionHeader from "@/components/SectionHeader";

const GOAL_KCAL = 1900;

// Meal keys point at the "LivePlan" messages (index into mealKeys below)
const mealKeys = ["mealOats", "mealChicken", "mealSalmon", "mealWrap", "mealStir"] as const;

const days = [
  { meals: [0, 1, 2], kcal: 1640, flagged: true },
  { meals: [0, 3, 4], kcal: 1720, flagged: false },
  { meals: [0, 2, 1], kcal: 1580, flagged: false },
  { meals: [0, 4, 3], kcal: 1690, flagged: true },
  { meals: [0, 1, 4], kcal: 1620, flagged: false },
  { meals: [0, 3, 2], kcal: 1750, flagged: false },
  { meals: [0, 4, 1], kcal: 1600, flagged: false },
];

export default function LivePlan() {
  const t = useTranslations("LivePlan");
  const phone = useTranslations("Phone");
  const format = useFormatter();
  const [active, setActive] = useState(0);
  const day = days[active];

  // 2024-01-01 was a Monday, so index 0 is Monday in every locale's weekday names
  const dayLabel = (index: number) =>
    format.dateTime(new Date(2024, 0, 1 + index), { weekday: "short" });

  const mealRows = [
    { label: phone("breakfast"), meal: t(mealKeys[day.meals[0]]) },
    { label: phone("lunch"), meal: t(mealKeys[day.meals[1]]) },
    { label: phone("dinner"), meal: t(mealKeys[day.meals[2]]) },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("body")}
        />

        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex flex-wrap gap-2">
            {days.map((_, index) => {
              const selected = index === active;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    selected ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="live-plan-day"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{dayLabel(index)}</span>
                </button>
              );
            })}

            <AnimatePresence>
              {day.flagged && (
                <motion.div
                  key="flag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full pt-4"
                >
                  <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm">
                    <IconShieldCheck className="size-4 text-primary" />
                    {t("allergyNote")}
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="gap-3">
              <CardTitle className="flex items-baseline justify-between text-lg">
                <span>{phone("todaysPlan")}</span>
                <motion.span
                  key={day.kcal}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-semibold text-primary"
                >
                  {t("kcalLabel", { kcal: format.number(day.kcal) })}
                </motion.span>
              </CardTitle>
              <Progress
                value={(day.kcal / GOAL_KCAL) * 100}
                aria-label={t("kcalLabel", { kcal: format.number(day.kcal) })}
              />
            </CardHeader>

            <CardContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  {mealRows.map((row, index) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.07 }}
                    >
                      <Item variant="muted" size="sm">
                        <ItemContent>
                          <ItemTitle>{row.label}</ItemTitle>
                          <ItemDescription>{row.meal}</ItemDescription>
                        </ItemContent>
                      </Item>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
