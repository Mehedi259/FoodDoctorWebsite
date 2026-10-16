import { useTranslations } from "next-intl";
import {
  IconBrain,
  IconCalendarEvent,
  IconChartLine,
  IconChefHat,
  IconSalad,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const icons = [IconBrain, IconSalad, IconShieldCheck, IconChartLine, IconChefHat, IconCalendarEvent];

export default function Features() {
  const t = useTranslations("Features");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="features" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={item.title}
                className="group transition hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
