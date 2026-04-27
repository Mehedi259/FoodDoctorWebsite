import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Food Doctor</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Food Doctor is a revolutionary health-tech platform that combines artificial intelligence with nutritional science to help people achieve their wellness goals. Founded in 2023, we've grown to serve over 500,000 active users worldwide.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
              <p>
                We believe that everyone deserves access to personalized, expert-level nutrition guidance. Our mission is to democratize health and wellness by making AI-powered dietary recommendations accessible to all.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Story</h2>
              <p>
                Food Doctor was born from a simple observation: despite the abundance of diet information available, people still struggle to find personalized nutrition advice that works for their unique needs. Our founders, a team of nutritionists, data scientists, and health enthusiasts, came together to solve this problem using cutting-edge AI technology.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
              <p>
                We provide intelligent, personalized meal planning and nutrition tracking that adapts to your lifestyle, preferences, and health goals. Our AI analyzes your dietary patterns, identifies areas for improvement, and suggests actionable changes that fit seamlessly into your daily routine.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Science-Based:</strong> All our recommendations are grounded in peer-reviewed nutritional research.</li>
                <li><strong>Privacy-First:</strong> Your health data is encrypted and never shared without your explicit consent.</li>
                <li><strong>Inclusive:</strong> We support all dietary preferences, restrictions, and cultural food traditions.</li>
                <li><strong>Transparent:</strong> We explain the reasoning behind every recommendation we make.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Team</h2>
              <p>
                Food Doctor is powered by a diverse team of registered dietitians, machine learning engineers, UX designers, and health advocates. Together, we're committed to making healthy eating simple, enjoyable, and sustainable for everyone.
              </p>

              <div className="mt-12 p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-2">Join Our Journey</h3>
                <p className="text-emerald-50">
                  We're always looking for passionate individuals to join our mission. Check out our careers page or reach out to us at careers@fooddoctor.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
