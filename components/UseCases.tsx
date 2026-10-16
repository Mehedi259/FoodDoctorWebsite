import { useTranslations } from "next-intl";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/SectionHeader";

// One illustration per tab, in the same order as the copy in messages/*.json. Decorative: the heading says the same thing.
const scenes = ["in-progress", "mobile-note-list", "cooking", "family"] as const;

type UseCase = { label: string; title: string; body: string; points: string[] };

export default function UseCases() {
  const t = useTranslations("UseCases");
  const cases = t.raw("tabs") as UseCase[];

  return (
    <section id="use-cases" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <Tabs defaultValue="0" className="mx-auto max-w-5xl">
          <div className="flex justify-start overflow-x-auto px-1 sm:justify-center">
            <TabsList>
              {cases.map((item, index) => (
                <TabsTrigger key={item.label} value={String(index)}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {cases.map((item, index) => (
            <TabsContent key={item.label} value={String(index)} className="mt-10">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{item.body}</p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <IconCheck className="mt-1 size-5 shrink-0 text-primary" />
                        <span className="text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Image
                  src={`/illustrations/${scenes[index]}.svg`}
                  alt=""
                  width={1000}
                  height={1000}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
