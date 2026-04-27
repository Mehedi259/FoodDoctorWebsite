"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                🎉 Now Available on iOS & Android
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Personal
              <span className="text-gradient block">AI Health Coach</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your health journey with personalized meal plans, smart nutrition tracking, and AI-powered diet recommendations tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
              >
                Download Now <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition"
              >
                <Smartphone className="w-5 h-5" /> Watch Demo
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-3xl font-bold text-gradient">500K+</p>
                <p className="text-gray-600 text-sm">Active Users</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">4.8★</p>
                <p className="text-gray-600 text-sm">App Rating</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">50M+</p>
                <p className="text-gray-600 text-sm">Meals Tracked</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-[300px] h-[600px] glass rounded-[3rem] p-4 shadow-2xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[2.5rem] flex items-center justify-center">
                <div className="text-white text-center">
                  <Smartphone className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Food Doctor App</p>
                  <p className="text-sm opacity-75">UI Preview</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-10 glass p-4 rounded-2xl shadow-lg"
            >
              <p className="text-sm font-semibold text-emerald-600">🥗 Meal Plan Ready</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-32 -right-10 glass p-4 rounded-2xl shadow-lg"
            >
              <p className="text-sm font-semibold text-teal-600">✨ AI Powered</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
