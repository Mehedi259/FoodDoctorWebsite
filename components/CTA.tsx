"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ANDROID_URL, IOS_URL } from "@/components/constants";

export default function CTA() {
  const t = useTranslations("Cta");
  const h = useTranslations("Hero");

  return (
    <section id="get-app" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-0 bg-primary p-10 text-primary-foreground md:p-16">
            <div className="absolute top-0 end-0 size-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10" />
            <div className="absolute bottom-0 start-0 size-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-white/10" />

            <CardContent className="relative flex flex-col items-center text-center">
              <h2 className="mb-5 max-w-3xl text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                {t("title")}
              </h2>
              <p className="mb-10 max-w-2xl text-lg opacity-90">{t("body")}</p>

              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  render={
                    <a
                      href={IOS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${h("availableOn")} ${h("appStore")}`}
                    />
                  }
                >
                  <Image src="/logos/app-store.svg" alt="" width={20} height={20} />
                  {h("appStore")}
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  render={
                    <a
                      href={ANDROID_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${h("availableOn")} ${h("googlePlay")}`}
                    />
                  }
                >
                  <Image src="/logos/google-play.svg" alt="" width={20} height={20} />
                  {h("googlePlay")}
                </Button>
              </div>

              <p className="mt-6 text-sm opacity-80">{t("note")}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
