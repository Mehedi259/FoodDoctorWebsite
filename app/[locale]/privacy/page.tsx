import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Footer" });
  const meta = await getTranslations({ locale, namespace: "Meta" });

  return pageMetadata({
    locale,
    path: "/privacy",
    page: "privacy",
    title: t("privacy"),
    description: meta("description"),
  });
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  { name: "Monthly Pro", period: "Monthly", price: "$9.99", unit: "/month", credits: "300 Credits", renew: "Auto-renews monthly" },
  { name: "Monthly Premium", period: "Monthly", price: "$14.99", unit: "/month", credits: "500 Credits", renew: "Auto-renews monthly" },
  { name: "Monthly Family", period: "Monthly", price: "$24.99", unit: "/month", credits: "900 Credits", renew: "Auto-renews monthly" },
  { name: "Yearly Pro", period: "Yearly", price: "$99.99", unit: "/year", credits: "4,000 Credits per year", renew: "Auto-renews yearly" },
  { name: "Yearly Premium", period: "Yearly", price: "$149.99", unit: "/year", credits: "7,000 Credits per year", renew: "Auto-renews yearly" },
  { name: "Yearly Family", period: "Yearly", price: "$249.99", unit: "/year", credits: "12,000 Credits per year", renew: "Auto-renews yearly" },
];

const sectionTitle = "mt-8 mb-4 text-2xl font-bold";
const bodyText = "leading-relaxed text-muted-foreground";
const listText = "list-disc space-y-2 ps-6 text-muted-foreground";

export default function Privacy() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-muted/40 pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12">
            <CardContent className="space-y-6">
              <h1 className="text-gradient mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
              <p className="mb-8 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className={sectionTitle}>1. Introduction</h2>
              <p className={bodyText}>
                Welcome to Doctor Food. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our app and tell you about your privacy rights.
              </p>

              <h2 className={sectionTitle}>2. Data We Collect</h2>
              <p className={bodyText}>We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul className={listText}>
                <li><strong className="text-foreground">Identity Data:</strong> Name, username, date of birth, gender</li>
                <li><strong className="text-foreground">Contact Data:</strong> Email address, phone number</li>
                <li><strong className="text-foreground">Health Data:</strong> Dietary preferences, allergies, health goals, weight, height</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our app and services</li>
                <li><strong className="text-foreground">Technical Data:</strong> IP address, device type, browser type, time zone settings</li>
              </ul>

              <h2 className={sectionTitle}>3. How We Use Your Data</h2>
              <p className={bodyText}>We use your personal data for the following purposes:</p>
              <ul className={listText}>
                <li>To provide personalized meal plans and nutrition recommendations</li>
                <li>To track your health progress and goals</li>
                <li>To improve our AI algorithms and app functionality</li>
                <li>To send you important updates about our service</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className={sectionTitle}>4. Data Security</h2>
              <p className={bodyText}>
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. All data is encrypted both in transit and at rest using industry-standard encryption protocols.
              </p>

              <h2 className={sectionTitle}>5. Data Sharing</h2>
              <p className={bodyText}>
                We do not sell your personal data to third parties. We may share your data with trusted service providers who assist us in operating our app, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.
              </p>

              <h2 className={sectionTitle}>6. Your Rights</h2>
              <p className={bodyText}>Under data protection laws, you have rights including:</p>
              <ul className={listText}>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to processing of your data</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2 className={sectionTitle}>7. Data Retention</h2>
              <p className={bodyText}>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h2 className={sectionTitle}>8. Cookies</h2>
              <p className={bodyText}>
                Our app uses cookies and similar tracking technologies to track activity and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className={sectionTitle}>9. Children's Privacy</h2>
              <p className={bodyText}>
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className={sectionTitle}>10. Auto-Renewable Subscription Plans</h2>
              <p className={`${bodyText} mb-6`}>
                Doctor Food offers auto-renewable subscription plans that provide you with credits to access our AI-powered nutrition services. All subscriptions automatically renew unless cancelled before the renewal date.
              </p>

              <div className="my-8 grid gap-6 md:grid-cols-2">
                {plans.map((plan, index) => (
                  <Card key={plan.name} className={index === plans.length - 1 ? "md:col-span-2" : undefined}>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <Badge variant={plan.period === "Yearly" ? "default" : "secondary"}>{plan.period}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.unit}</span>
                      </p>
                      <p className="rounded-lg bg-muted p-3">{plan.credits}</p>
                      <p className="text-xs text-muted-foreground">{plan.renew}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card size="sm" className="border-amber-500/40 bg-amber-50">
                <CardContent>
                  <h4 className="mb-2 font-bold text-amber-900">Important Subscription Information:</h4>
                  <ul className="list-disc space-y-1 ps-6 text-sm text-amber-900">
                    <li>All subscriptions are <strong>auto-renewable</strong> and will automatically renew at the end of each billing period</li>
                    <li>You can cancel your subscription at any time before the renewal date to avoid being charged</li>
                    <li>Credits are allocated at the start of each billing period</li>
                    <li>Unused credits do not roll over to the next billing period</li>
                    <li>Refunds are subject to our refund policy and applicable laws</li>
                    <li>Subscription prices are subject to change with prior notice</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className={sectionTitle}>11. Changes to This Policy</h2>
              <p className={bodyText}>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>

              <h2 className={sectionTitle}>12. Contact Us</h2>
              <p className={bodyText}>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <Card size="sm" className="bg-muted">
                <CardContent>
                  <p className="font-semibold">Email: privacy@fooddoctor.com</p>
                  <p className="font-semibold">Address: 123 Health Street, Wellness City, HC 12345</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
