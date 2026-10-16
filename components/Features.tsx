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
import Illustration from "@/components/Illustration";

const icons = [IconBrain, IconSalad, IconShieldCheck, IconChartLine, IconChefHat, IconCalendarEvent];

export default function Features() {
  const t = useTranslations("Features");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="features" className="relative isolate overflow-hidden bg-linear-to-br from-muted/40 via-cyan-50/50 to-emerald-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="lg:sticky lg:top-28">
            <Illustration src="/illustrations/features-healthy-food.svg" className="max-w-sm" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
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
      </div>
    </section>
  );
}
