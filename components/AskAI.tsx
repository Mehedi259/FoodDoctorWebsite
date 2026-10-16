"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { IconCheck, IconMessageCircle, IconSparkles } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OPEN_CHAT_EVENT } from "@/components/constants";

export default function AskAI() {
  const t = useTranslations("AskAI");
  const chat = useTranslations("Chat");
  const points = t.raw("points") as string[];

  return (
    <section id="ask-ai" className="bg-muted/40 py-24">
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
          <ul className="mx-auto mb-8 inline-block space-y-3 text-start lg:mx-0 lg:block">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-lg">
                <IconCheck className="size-5 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            onClick={() => window.dispatchEvent(new Event(OPEN_CHAT_EVENT))}
          >
            <IconMessageCircle />
            {t("cta")}
          </Button>
        </div>

        <div className="mx-auto w-full max-w-md space-y-6">
          <Image
            src="/illustrations/order-food.svg"
            alt=""
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-auto w-full"
          />
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3 border-b bg-primary/5">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <IconSparkles className="size-5" />
              </div>
              <CardTitle className="text-base">{chat("title")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5">
              <div className="ms-auto max-w-[85%] rounded-2xl rounded-ee-sm bg-primary p-4 text-primary-foreground">
                <p className="text-sm leading-relaxed">{t("sampleQuestion")}</p>
              </div>
              <div className="me-auto max-w-[90%] rounded-2xl rounded-es-sm bg-muted p-4">
                <p className="text-sm leading-relaxed">{t("sampleAnswer")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
