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
    path: "/terms",
    page: "terms",
    title: t("terms"),
    description: meta("description"),
  });
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const sectionTitle = "mt-8 mb-4 text-2xl font-bold";
const bodyText = "leading-relaxed text-muted-foreground";
const listText = "list-disc space-y-2 ps-6 text-muted-foreground";

export default function Terms() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-muted/40 pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12">
            <CardContent className="space-y-6">
              <h1 className="text-gradient mb-4 text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
              <p className="mb-8 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className={sectionTitle}>1. Agreement to Terms</h2>
              <p className={bodyText}>
                By accessing or using the Doctor Food app, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>

              <h2 className={sectionTitle}>2. Use License</h2>
              <p className={bodyText}>
                Permission is granted to temporarily download one copy of Doctor Food for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className={listText}>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in the app</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className={sectionTitle}>3. Medical Disclaimer</h2>
              <Card size="sm" className="border-amber-500/40 bg-amber-50">
                <CardContent>
                  <p className="text-amber-900">
                    <strong>Important:</strong> Doctor Food provides nutritional information and suggestions for educational purposes only. Our app is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </CardContent>
              </Card>

              <h2 className={sectionTitle}>4. User Accounts</h2>
              <p className={bodyText}>
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>

              <h2 className={sectionTitle}>5. Subscription and Payments</h2>
              <p className={bodyText}>
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Billing cycles are set on a monthly or annual basis, depending on the type of subscription plan you select.
              </p>
              <ul className={listText}>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are provided within 14 days of purchase if no significant use has occurred</li>
                <li>Price changes will be communicated 30 days in advance</li>
              </ul>

              <h2 className={sectionTitle}>6. Prohibited Uses</h2>
              <p className={bodyText}>You may not use the app:</p>
              <ul className={listText}>
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate the Company or another user</li>
                <li>To engage in any automated use of the system</li>
                <li>To interfere with or circumvent the security features of the app</li>
              </ul>

              <h2 className={sectionTitle}>7. Intellectual Property</h2>
              <p className={bodyText}>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Doctor Food and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>

              <h2 className={sectionTitle}>8. Termination</h2>
              <p className={bodyText}>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
              </p>

              <h2 className={sectionTitle}>9. Limitation of Liability</h2>
              <p className={bodyText}>
                In no event shall Doctor Food, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h2 className={sectionTitle}>10. Indemnification</h2>
              <p className={bodyText}>
                You agree to defend, indemnify and hold harmless Doctor Food and its licensee and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of the Service.
              </p>

              <h2 className={sectionTitle}>11. Governing Law</h2>
              <p className={bodyText}>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Doctor Food operates, without regard to its conflict of law provisions.
              </p>

              <h2 className={sectionTitle}>12. Changes to Terms</h2>
              <p className={bodyText}>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className={sectionTitle}>13. Contact Us</h2>
              <p className={bodyText}>
                If you have any questions about these Terms, please contact us:
              </p>
              <Card size="sm" className="bg-muted">
                <CardContent>
                  <p className="font-semibold">Email: legal@fooddoctor.com</p>
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
