import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Food Doctor. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our app and tell you about your privacy rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> Name, username, date of birth, gender</li>
                <li><strong>Contact Data:</strong> Email address, phone number</li>
                <li><strong>Health Data:</strong> Dietary preferences, allergies, health goals, weight, height</li>
                <li><strong>Usage Data:</strong> Information about how you use our app and services</li>
                <li><strong>Technical Data:</strong> IP address, device type, browser type, time zone settings</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide personalized meal plans and nutrition recommendations</li>
                <li>To track your health progress and goals</li>
                <li>To improve our AI algorithms and app functionality</li>
                <li>To send you important updates about our service</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. All data is encrypted both in transit and at rest using industry-standard encryption protocols.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Sharing</h2>
              <p>
                We do not sell your personal data to third parties. We may share your data with trusted service providers who assist us in operating our app, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
              <p>Under data protection laws, you have rights including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to processing of your data</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cookies</h2>
              <p>
                Our app uses cookies and similar tracking technologies to track activity and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Auto-Renewable Subscription Plans</h2>
              <p className="mb-6">
                Food Doctor offers auto-renewable subscription plans that provide you with credits to access our AI-powered nutrition services. All subscriptions automatically renew unless cancelled before the renewal date.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Monthly Pro */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Monthly Pro</h3>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Monthly</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-600">$9.99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-gray-700"><span className="font-bold text-emerald-600">300 Credits</span> per month</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Auto-renews monthly</p>
                </div>

                {/* Monthly Premium */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Monthly Premium</h3>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Monthly</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">$14.99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-gray-700"><span className="font-bold text-blue-600">500 Credits</span> per month</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Auto-renews monthly</p>
                </div>

                {/* Monthly Family */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Monthly Family</h3>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Monthly</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-purple-600">$24.99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-gray-700"><span className="font-bold text-purple-600">900 Credits</span> per month</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Auto-renews monthly</p>
                </div>

                {/* Yearly Pro */}
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-2xl border-2 border-emerald-300 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Yearly Pro</h3>
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Yearly</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-700">$99.99</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-gray-700"><span className="font-bold text-emerald-700">4,000 Credits</span> per year</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Auto-renews yearly</p>
                </div>

                {/* Yearly Premium */}
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl border-2 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Yearly Premium</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Yearly</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-700">$149.99</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-gray-700"><span className="font-bold text-blue-700">7,000 Credits</span> per year</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Auto-renews yearly</p>
                </div>

                {/* Yearly Family */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg md:col-span-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Yearly Family</h3>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Yearly</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-purple-700">$249.99</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg inline-block">
                    <p className="text-gray-700"><span className="font-bold text-purple-700">12,000 Credits</span> per year</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Auto-renews yearly</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg my-6">
                <h4 className="font-bold text-amber-900 mb-2">Important Subscription Information:</h4>
                <ul className="list-disc pl-6 space-y-1 text-amber-900 text-sm">
                  <li>All subscriptions are <strong>auto-renewable</strong> and will automatically renew at the end of each billing period</li>
                  <li>You can cancel your subscription at any time before the renewal date to avoid being charged</li>
                  <li>Credits are allocated at the start of each billing period</li>
                  <li>Unused credits do not roll over to the next billing period</li>
                  <li>Refunds are subject to our refund policy and applicable laws</li>
                  <li>Subscription prices are subject to change with prior notice</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to This Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Email: privacy@fooddoctor.com</p>
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
