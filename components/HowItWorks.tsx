import Image from "next/image";
import { useTranslations } from "next-intl";
import { IconBolt, IconRefresh, IconUserPlus, IconWand } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const icons = [IconUserPlus, IconWand, IconBolt, IconRefresh];

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const steps = t.raw("steps") as { title: string; body: string }[];

  return (
    <section id="how-it-works" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <Image
          src="/illustrations/order-food.svg"
          alt=""
          width={1000}
          height={1000}
          sizes="(min-width: 768px) 640px, 90vw"
          className="mx-auto mb-12 h-auto w-full max-w-sm"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute top-12 start-[calc(50%+3rem)] z-0 hidden h-px w-[calc(100%-6rem)] bg-linear-to-r from-primary/60 to-primary/10 lg:block" />
                )}
                <Card className="relative z-10 h-full">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="size-6" />
                      </div>
                      <Badge variant="outline" className="text-base font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {step.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
