"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Heart, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Trusted by Experts",
    description: "Developed with nutritionists and health professionals to ensure accuracy and safety.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "No more meal planning stress. Get instant recommendations that fit your schedule.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every recommendation is tailored to your unique health profile and preferences.",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "See improvements in your health and energy levels within the first few weeks.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <span className="text-gradient block">Food Doctor?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who have transformed their health and achieved their wellness goals with our intelligent platform.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-2xl text-white">
                  <p className="text-4xl font-bold mb-2">92%</p>
                  <p className="text-emerald-100">Users report improved health within 30 days</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6 rounded-2xl text-white">
                    <p className="text-3xl font-bold mb-2">4.8★</p>
                    <p className="text-teal-100">App Store Rating</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-6 rounded-2xl text-white">
                    <p className="text-3xl font-bold mb-2">500K+</p>
                    <p className="text-cyan-100">Active Users</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-2xl text-white">
                  <p className="text-4xl font-bold mb-2">50M+</p>
                  <p className="text-blue-100">Meals successfully tracked and optimized</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
