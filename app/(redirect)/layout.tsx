import type { Metadata } from "next";
import type { ReactNode } from "react";

// This page only redirects to a locale, so keep it out of search results
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

// Root layout for "/" only. Each locale has its own layout in app/[locale]/layout.tsx.
export default function RedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
