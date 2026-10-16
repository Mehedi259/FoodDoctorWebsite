import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";

const linkClass = "opacity-70 transition hover:opacity-100";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/app_icon.png" alt="Doctor Food" width={40} height={40} className="rounded-xl" />
              <span className="text-2xl font-bold">Doctor Food</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">{t("tagline")}</p>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">{t("product")}</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className={linkClass}>{t("features")}</Link></li>
              <li><Link href="/#how-it-works" className={linkClass}>{t("howItWorks")}</Link></li>
              <li><Link href="/#pricing" className={linkClass}>{t("pricing")}</Link></li>
              <li><Link href="/faq" className={linkClass}>{t("faq")}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">{t("company")}</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className={linkClass}>{t("about")}</Link></li>
              <li><Link href="/blog" className={linkClass}>{t("blog")}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">{t("legal")}</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className={linkClass}>{t("privacy")}</Link></li>
              <li><Link href="/terms" className={linkClass}>{t("terms")}</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-background/20" />
        <p className="text-center text-sm opacity-70">
          &copy; {new Date().getFullYear()} Doctor Food. {t("rights")}
        </p>
        <p className="mt-2 text-center text-xs opacity-60">
          Illustrations by{" "}
          <a href="https://storyset.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-100">
            Storyset
          </a>
        </p>
      </div>
    </footer>
  );
}
