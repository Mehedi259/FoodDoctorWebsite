"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image src="/app_icon.png" alt="Food Doctor" width={48} height={48} className="w-12 h-12 rounded-xl shadow-md" />
            <span className="text-2xl font-bold text-gradient">Food Doctor</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition">
              Testimonials
            </a>
            <a href="/about" className="text-gray-700 hover:text-emerald-600 transition">
              About
            </a>
            <div className="relative">
              <button
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition flex items-center gap-2"
              >
                Download App
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    className="absolute right-0 mt-2 w-48 glass rounded-xl shadow-xl overflow-hidden z-50"
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-emerald-50 transition flex items-center gap-3"
                    >
                      <span className="text-2xl">🤖</span>
                      <span className="text-sm font-medium text-gray-700">Get on Android</span>
                    </a>
                    <a
                      href="https://apps.apple.com/gb/app/doctor-food/id6766101323"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-emerald-50 transition flex items-center gap-3 border-t border-gray-100"
                    >
                      <span className="text-2xl">🍎</span>
                      <span className="text-sm font-medium text-gray-700">Get on iOS</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="#features" className="block text-gray-700 hover:text-emerald-600">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-emerald-600">
              How It Works
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-emerald-600">
              Testimonials
            </a>
            <a href="/about" className="block text-gray-700 hover:text-emerald-600">
              About
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full"
            >
              Download App
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
