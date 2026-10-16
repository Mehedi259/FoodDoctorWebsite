import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware Link/router: links keep the current locale (e.g. /es/about)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
