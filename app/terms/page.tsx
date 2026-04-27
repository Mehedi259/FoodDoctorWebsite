import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Food Doctor app, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of Food Doctor for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in the app</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Medical Disclaimer</h2>
              <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong>Important:</strong> Food Doctor provides nutritional information and suggestions for educational purposes only. Our app is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Subscription and Payments</h2>
              <p>
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Billing cycles are set on a monthly or annual basis, depending on the type of subscription plan you select.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are provided within 14 days of purchase if no significant use has occurred</li>
                <li>Price changes will be communicated 30 days in advance</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Prohibited Uses</h2>
              <p>You may not use the app:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate the Company or another user</li>
                <li>To engage in any automated use of the system</li>
                <li>To interfere with or circumvent the security features of the app</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Food Doctor and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                In no event shall Food Doctor, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Indemnification</h2>
              <p>
                You agree to defend, indemnify and hold harmless Food Doctor and its licensee and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Food Doctor operates, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Email: legal@fooddoctor.com</p>
                <p className="font-semibold">Address: 123 Health Street, Wellness City, HC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
