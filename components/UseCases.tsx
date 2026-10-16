import { useTranslations } from "next-intl";
import { IconClock, IconScale, IconShieldCheck, IconUsers } from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/SectionHeader";

const icons = [IconScale, IconShieldCheck, IconClock, IconUsers];

type UseCase = { label: string; title: string; body: string; points: string[] };

export default function UseCases() {
  const t = useTranslations("UseCases");
  const cases = t.raw("tabs") as UseCase[];

  return (
    <section id="use-cases" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <Tabs defaultValue="0" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto flex h-auto w-full flex-wrap justify-center gap-1 rounded-full p-1.5">
            {cases.map((item, index) => (
              <TabsTrigger key={item.label} value={String(index)} className="rounded-full px-4 py-2 text-sm">
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {cases.map((item, index) => {
            const Icon = icons[index];
            return (
              <TabsContent key={item.label} value={String(index)} className="mt-10">
                <div className="grid items-center gap-10 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{item.title}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>

                  <Card className="md:col-span-2">
                    <CardContent className="space-y-3">
                      {item.points.map((point, pointIndex) => (
                        <div key={point} className="flex items-start gap-3 rounded-xl bg-muted/60 p-4">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                            {pointIndex + 1}
                          </span>
                          <span className="pt-0.5 font-medium">{point}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
