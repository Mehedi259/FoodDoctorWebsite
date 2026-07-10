"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const sampleQuestions = [
  "What are the health benefits of avocado?",
  "How many calories should I eat to lose weight?",
  "Is brown rice better than white rice?",
  "What are good protein sources for vegans?",
];

const demoResponses: { [key: string]: string } = {
  "avocado": "Avocados are nutrient-dense superfoods! 🥑 They're rich in healthy monounsaturated fats, fiber, potassium, and vitamins K, E, and C. Benefits include heart health, improved digestion, and better nutrient absorption. One medium avocado has about 240 calories.",
  "calories": "For safe weight loss, aim for a 500-calorie deficit per day, which equals ~1 lb/week loss. Average needs: Women: 1,500-1,800 cal/day, Men: 1,800-2,200 cal/day. Download Food Doctor app for your personalized calorie target! 📱",
  "rice": "Brown rice is generally healthier! 🌾 It has more fiber (3.5g vs 0.6g per cup), vitamins, minerals, and a lower glycemic index. White rice digests faster and has fewer nutrients. However, white rice is easier to digest for some people.",
  "protein": "Great vegan protein sources include: 🌱 Lentils (18g/cup), Chickpeas (15g/cup), Tofu (20g/cup), Tempeh (31g/cup), Quinoa (8g/cup), Hemp seeds (10g/3 tbsp), and Peanut butter (8g/2 tbsp). Combine different sources for complete amino acids!",
  "default": "That's a great nutrition question! 🤔 For personalized AI-powered answers and custom meal plans, download the Food Doctor app. Our AI analyzes your profile, dietary restrictions, and health goals to provide tailored nutrition advice. Try it free! 📱"
};

function getAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const [keyword, response] of Object.entries(demoResponses)) {
    if (keyword !== "default" && lowerMessage.includes(keyword)) {
      return response;
    }
  }
  
  return demoResponses.default;
}

export default function AIDemoChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! I'm your AI nutrition assistant. Ask me anything about food, nutrition, or healthy eating! 🥗",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim() || questionsAsked >= 3) return;

    const userMessage: Message = {
      id: messages.length,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 1,
        text: getAIResponse(inputText),
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
      setQuestionsAsked((prev) => prev + 1);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-bold">AI Nutrition Assistant</h3>
                  <p className="text-xs text-emerald-100">
                    {questionsAsked}/3 free questions used
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                        : "bg-white text-gray-800 shadow-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-emerald-100"
                          : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-2xl shadow-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length === 1 && questionsAsked === 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">
                    Try these quick questions:
                  </p>
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left text-sm p-2 bg-white hover:bg-emerald-50 rounded-lg transition border border-gray-200 hover:border-emerald-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

              {/* Limit Reached */}
              {questionsAsked >= 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-xl border-2 border-emerald-300"
                >
                  <p className="text-sm font-semibold text-emerald-900 mb-2">
                    🎉 Free trial complete!
                  </p>
                  <p className="text-xs text-emerald-800 mb-3">
                    Download Food Doctor for unlimited AI conversations,
                    personalized meal plans, and more!
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-emerald-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-emerald-700 transition"
                    >
                      Android
                    </a>
                    <a
                      href="https://apps.apple.com/gb/app/doctor-food/id6766101323"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-emerald-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-emerald-700 transition"
                    >
                      iOS
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t">
              {questionsAsked < 3 ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about nutrition..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-emerald-500 text-sm"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-2 rounded-full hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <p className="text-xs text-center text-gray-500">
                  Download the app for unlimited questions! 🚀
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
