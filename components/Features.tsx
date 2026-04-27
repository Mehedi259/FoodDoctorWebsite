"use client";

import { motion } from "framer-motion";
import { Brain, UtensilsCrossed, ShieldAlert, Activity, Sparkles, Calendar } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Diet Recommendations",
    description: "Get personalized nutrition advice powered by advanced AI that learns your preferences and health goals.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Personalized Meal Plans",
    description: "Custom meal plans designed around your lifestyle, dietary preferences, and nutritional needs.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: ShieldAlert,
    title: "Allergy Detection",
    description: "Smart scanning technology that identifies allergens in food and keeps you safe from harmful ingredients.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Activity,
    title: "Health Tracking",
    description: "Monitor your progress with comprehensive health metrics, weight tracking, and wellness insights.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Discover new recipes and foods that match your taste profile and nutritional requirements.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Calendar,
    title: "Meal Scheduling",
    description: "Plan your meals ahead with our intuitive calendar and never miss a healthy eating opportunity.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="text-gradient block">Better Health</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your diet and achieve your health goals in one intelligent app.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
