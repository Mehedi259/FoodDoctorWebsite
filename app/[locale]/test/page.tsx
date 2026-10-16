import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Test() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary p-4">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Test Page</CardTitle>
          <CardDescription>If you can see this styled, Tailwind is working!</CardDescription>
        </CardHeader>
        <CardContent />
      </Card>
    </div>
  );
}
