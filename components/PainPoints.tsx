import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  IconAlertTriangle,
  IconChefHat,
  IconClock,
  IconMessageQuestion,
  IconRefresh,
  IconUsers,
} from "@tabler/icons-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const icons = [IconRefresh, IconAlertTriangle, IconClock, IconChefHat, IconMessageQuestion, IconUsers];

export default function PainPoints() {
  const t = useTranslations("Pain");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="problems" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <Image
          src="/illustrations/mobile-note-list.svg"
          alt=""
          width={1000}
          height={1000}
          sizes="(min-width: 768px) 480px, 80vw"
          className="mx-auto mb-12 h-auto w-full max-w-sm"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-muted text-foreground">
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
