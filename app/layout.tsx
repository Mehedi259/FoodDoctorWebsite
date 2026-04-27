import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Doctor - AI-Powered Diet & Health Assistant",
  description: "Transform your health with personalized meal plans, AI diet recommendations, and smart allergy detection. Your personal nutrition expert in your pocket.",
  keywords: "diet app, health tracker, meal planning, AI nutrition, allergy detection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
