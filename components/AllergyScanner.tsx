"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Illustration from "@/components/Illustration";

type Allergen = "peanut" | "milk" | "gluten";

const allergens: { id: Allergen; key: string }[] = [
  { id: "peanut", key: "allergyPeanut" },
  { id: "milk", key: "allergyMilk" },
  { id: "gluten", key: "allergyGluten" },
];

const ingredients: { key: string; contains: Allergen[] }[] = [
  { key: "ingPeanutButter", contains: ["peanut"] },
  { key: "ingYogurt", contains: ["milk"] },
  { key: "ingBread", contains: ["gluten"] },
  { key: "ingChicken", contains: [] },
  { key: "ingBlueberries", contains: [] },
];

export default function AllergyScanner() {
  const t = useTranslations("AllergyScanner");
  const [selected, setSelected] = useState<Allergen[]>(["peanut"]);

  const toggle = (id: Allergen) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-muted/40 via-emerald-50/50 to-muted/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-start">
          <Badge variant="secondary" className="mb-4">
            {t("eyebrow")}
          </Badge>
          <h2 className="mb-5 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            {t("body")}
          </p>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {allergens.map((allergen) => {
              const on = selected.includes(allergen.id);
              return (
                <motion.div key={allergen.id} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={on ? "default" : "outline"}
                    size="lg"
                    aria-pressed={on}
                    onClick={() => toggle(allergen.id)}
                    className="rounded-full"
                  >
                    {on && <IconCheck className="size-4" />}
                    {t(allergen.key)}
                  </Button>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t("hint")}</p>

          <Illustration
            src="/illustrations/eating-vegan.svg"
            className="mt-10 hidden max-w-[240px] lg:block"
          />
        </div>

        <Card className="mx-auto w-full max-w-md shadow-xl">
          <CardContent className="space-y-2 p-4">
            {ingredients.map((ingredient) => {
              const flagged = ingredient.contains.some((id) => selected.includes(id));
              return (
                <motion.div
                  key={ingredient.key}
                  layout
                  animate={{
                    backgroundColor: flagged ? "rgb(254 226 226 / 0.6)" : "rgb(255 255 255 / 1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between gap-3 rounded-xl border p-3"
                  style={{ borderColor: flagged ? "rgb(252 165 165)" : undefined }}
                >
                  <span className="font-medium">{t(ingredient.key)}</span>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={flagged ? "flagged" : "safe"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {flagged ? (
                        <Badge variant="destructive" className="gap-1">
                          <IconAlertTriangle className="size-3.5" />
                          {t("flagged")}
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="gap-1">
                          <IconCheck className="size-3.5 text-primary" />
                          {t("safe")}
                        </Badge>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
