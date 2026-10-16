import { useFormatter, useLocale, useTranslations } from "next-intl";
import {
  IconAlertTriangle,
  IconBolt,
  IconCalendarEvent,
  IconCoffee,
  IconMoon,
  IconSalad,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";

// A static preview of the app: the numbers are an example, not real user data
export default function PhoneMockup() {
  const t = useTranslations("Phone");
  const format = useFormatter();
  const locale = useLocale();

  const eaten = 1640;
  const goal = 1900;

  const meals = [
    { icon: IconCoffee, label: t("breakfast"), meal: t("breakfastMeal") },
    { icon: IconSalad, label: t("lunch"), meal: t("lunchMeal") },
    { icon: IconMoon, label: t("dinner"), meal: t("dinnerMeal") },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      <div className="rounded-[2.75rem] border-[10px] border-foreground/90 bg-card shadow-2xl">
        <div className="space-y-4 rounded-[2rem] bg-background p-4">
          <div>
            <p className="text-xs text-muted-foreground">{t("greeting")}</p>
            <p className="text-lg font-semibold">{t("todaysPlan")}</p>
          </div>

          <Card size="sm">
            <CardContent className="space-y-3">
              <p className="text-sm font-medium">
                {t("progress", {
                  eaten: format.number(eaten),
                  goal: format.number(goal),
                })}
              </p>
              <Progress value={(eaten / goal) * 100} />
            </CardContent>
          </Card>

          <div className="space-y-2">
            {meals.map((meal) => (
              <Item key={meal.label} variant="muted" size="sm">
                <ItemMedia variant="icon">
                  <meal.icon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{meal.label}</ItemTitle>
                  <ItemDescription>{meal.meal}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </div>

          <Alert>
            <IconShieldCheck />
            <AlertTitle>{t("allergyTitle")}</AlertTitle>
            <AlertDescription>{t("allergyBody")}</AlertDescription>
          </Alert>
        </div>
      </div>

      <Card size="sm" className="absolute start-0 -top-4 w-52 shadow-xl lg:-start-16">
        <CardContent className="flex items-center gap-2">
          <IconCalendarEvent className="size-4 shrink-0 text-primary" />
          <p className="text-xs font-medium">{t("floatingPlan")}</p>
        </CardContent>
      </Card>

      <Card size="sm" className="absolute end-0 top-1/2 w-44 shadow-xl lg:-end-16">
        <CardContent className="flex items-center gap-2">
          <IconBolt className="size-4 shrink-0 text-primary" />
          <p className="text-xs font-medium">{t("floatingProtein")}</p>
        </CardContent>
      </Card>

      <p className="mt-6 text-center text-xs text-muted-foreground" lang={locale}>
        {t("preview")}
      </p>
    </div>
  );
}
