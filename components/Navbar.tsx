"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image src="/app_icon.png" alt="Food Doctor" width={32} height={32} className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-gradient">Food Doctor</span>
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
            <a 
              href="https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Download App
            </a>
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
