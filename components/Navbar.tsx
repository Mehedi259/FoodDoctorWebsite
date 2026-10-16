"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
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
  { href: "/#features", label: "features" },
  { href: "/#how-it-works", label: "howItWorks" },
  { href: "/#pricing", label: "pricing" },
  { href: "/#faq", label: "faq" },
  { href: "/about", label: "about" },
] as const;

const storeLinks = [
  { href: ANDROID_URL, label: "getOnAndroid", logo: "/logos/google-play.svg" },
  { href: IOS_URL, label: "getOnIos", logo: "/logos/app-store.svg" },
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app_icon.png"
            alt="Doctor Food"
            width={40}
            height={40}
            className="rounded-xl shadow-md"
          />
          <span className="text-gradient font-heading text-xl font-bold whitespace-nowrap sm:text-2xl">Doctor Food</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink render={<Link href={link.href} />}>
                  {t(link.label)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />

          <DropdownMenu>
            <DropdownMenuTrigger render={<Button className="hidden md:inline-flex" />}>
              {t("downloadApp")}
              <IconChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {storeLinks.map((store) => (
                <DropdownMenuItem
                  key={store.label}
                  render={
                    <a href={store.href} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  <Image src={store.logo} alt="" width={16} height={16} />
                  {t(store.label)}
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
    </motion.header>
  );
}
