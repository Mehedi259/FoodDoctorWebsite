"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconArrowUpRight, IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import { Link } from "@/i18n/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ANDROID_URL, IOS_URL } from "@/components/constants";

const navLinks = [
  { href: "/features", label: "features" },
  { href: "/#how-it-works", label: "howItWorks" },
  { href: "/#pricing", label: "pricing" },
  { href: "/faq", label: "faq" },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
] as const;

const storeLinks = [
  { href: ANDROID_URL, label: "getOnAndroid", logo: "/logos/google-play.svg" },
  { href: IOS_URL, label: "getOnIos", logo: "/logos/app-store.svg" },
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);

  // The background appears once the page scrolls; the thin line shows reading progress
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 16));

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-foreground/5 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/app_icon.png"
            alt="Doctor Food"
            width={36}
            height={36}
            className="rounded-xl ring-1 ring-foreground/10 transition-transform duration-300 group-hover:-rotate-6"
          />
          <span className="font-heading text-lg font-bold tracking-tight whitespace-nowrap">
            Doctor<span className="text-primary"> Food</span>
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className="relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100"
                >
                  {t(link.label)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1.5">
          <LocaleSwitcher />

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button className="hidden rounded-full bg-foreground px-4 text-background hover:bg-foreground/90 md:inline-flex" />
              }
            >
              {t("downloadApp")}
              <IconArrowUpRight className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-52">
              {storeLinks.map((store) => (
                <DropdownMenuItem
                  key={store.label}
                  render={
                    <a href={store.href} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  <Image src={store.logo} alt="" width={16} height={16} />
                  {t(store.label)}
                  <IconChevronDown className="ms-auto size-3.5 -rotate-90 opacity-40" />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label={t("openMenu")}
                />
              }
            >
              <IconMenu2 />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Doctor Food</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={buttonVariants({
                          variant: "ghost",
                          className: "justify-start",
                        })}
                      />
                    }
                  >
                    {t(link.label)}
                  </SheetClose>
                ))}
                {storeLinks.map((store) => (
                  <Button
                    key={store.label}
                    variant="outline"
                    className="mt-2 w-full"
                    nativeButton={false}
                    render={
                      <a href={store.href} target="_blank" rel="noopener noreferrer" />
                    }
                  >
                    <Image src={store.logo} alt="" width={16} height={16} />
                    {t(store.label)}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary"
      />
    </motion.header>
  );
}
