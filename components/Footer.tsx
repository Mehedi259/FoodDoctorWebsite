"use client";

import { Apple, Mail, MessageCircle, Share2, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Apple className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">Food Doctor</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your personal AI health coach for a better, healthier life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition">
                <Link className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-emerald-500 transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-500 transition">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-500 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-emerald-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-emerald-500 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-emerald-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Food Doctor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
