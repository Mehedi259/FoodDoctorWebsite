"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormatter, useTranslations } from "next-intl";
import { IconMessageCircle, IconSend, IconSparkles, IconX } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ANDROID_URL, IOS_URL, OPEN_CHAT_EVENT } from "@/components/constants";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

// The demo answers below are still English. Only the interface is translated.
const sampleQuestions = [
  "What are the health benefits of avocado?",
  "How many calories should I eat to lose weight?",
  "Is brown rice better than white rice?",
  "What are good protein sources for vegans?",
];

const demoResponses: { [key: string]: string } = {
  "avocado": "Avocados are nutrient-dense superfoods! 🥑 They're rich in healthy monounsaturated fats, fiber, potassium, and vitamins K, E, and C. Benefits include heart health, improved digestion, and better nutrient absorption. One medium avocado has about 240 calories.",
  "calories": "For safe weight loss, aim for a 500-calorie deficit per day, which equals ~1 lb/week loss. Average needs: Women: 1,500-1,800 cal/day, Men: 1,800-2,200 cal/day. Download Doctor Food app for your personalized calorie target! 📱",
  "rice": "Brown rice is generally healthier! 🌾 It has more fiber (3.5g vs 0.6g per cup), vitamins, minerals, and a lower glycemic index. White rice digests faster and has fewer nutrients. However, white rice is easier to digest for some people.",
  "protein": "Great vegan protein sources include: 🌱 Lentils (18g/cup), Chickpeas (15g/cup), Tofu (20g/cup), Tempeh (31g/cup), Quinoa (8g/cup), Hemp seeds (10g/3 tbsp), and Peanut butter (8g/2 tbsp). Combine different sources for complete amino acids!",
  "default": "That's a great nutrition question! 🤔 For personalized AI-powered answers and custom meal plans, download the Doctor Food app. Our AI analyzes your profile, dietary restrictions, and health goals to provide tailored nutrition advice. Try it free! 📱"
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

const FREE_QUESTIONS = 3;

export default function AIDemoChat() {
  const t = useTranslations("Chat");
  const format = useFormatter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: 0,
      text: t("intro"),
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Any "Ask the assistant" button on the page opens this chat
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener(OPEN_CHAT_EVENT, open);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, open);
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim() || questionsAsked >= FREE_QUESTIONS) return;

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
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed end-6 bottom-6 z-50"
          >
            <Button
              size="icon-lg"
              aria-label={t("open")}
              onClick={() => setIsOpen(true)}
              className="relative size-14 rounded-full shadow-2xl"
            >
              <IconMessageCircle className="size-6" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -end-1 size-5 justify-center rounded-full p-0 text-xs"
              >
                AI
              </Badge>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed end-6 bottom-6 z-50"
          >
            <Card className="flex h-[600px] w-[400px] max-w-[calc(100vw-3rem)] flex-col gap-0 overflow-hidden p-0 shadow-2xl">
              {/* Header */}
              <CardHeader className="flex flex-row items-center justify-between gap-3 bg-primary p-4 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <IconSparkles className="size-6" />
                    <span className="absolute -top-1 -end-1 size-3 animate-pulse rounded-full bg-green-400" />
                  </div>
                  <div>
                    <CardTitle>{t("title")}</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      {t("counter", { count: questionsAsked })}
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={t("close")}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                >
                  <IconX />
                </Button>
              </CardHeader>

              {/* Messages */}
              <ScrollArea className="min-h-0 flex-1 bg-muted/40">
                <div className="space-y-4 p-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-3 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-card-foreground shadow-md"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p
                          className={`mt-1 text-xs ${
                            message.sender === "user"
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {format.dateTime(message.timestamp, { hour: "2-digit", minute: "2-digit" })}
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
                      <div className="flex gap-1 rounded-2xl bg-card p-3 shadow-md">
                        <span className="size-2 animate-bounce rounded-full bg-muted-foreground" />
                        <span
                          className="size-2 animate-bounce rounded-full bg-muted-foreground"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span
                          className="size-2 animate-bounce rounded-full bg-muted-foreground"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Quick Questions */}
                  {messages.length === 1 && questionsAsked === 0 && (
                    <div className="space-y-2">
                      <p className="text-center text-xs text-muted-foreground">
                        {t("quickLabel")}
                      </p>
                      {sampleQuestions.map((question) => (
                        <Item
                          key={question}
                          variant="outline"
                          size="sm"
                          className="w-full cursor-pointer bg-background text-start hover:bg-accent"
                          render={
                            <button
                              type="button"
                              onClick={() => handleQuickQuestion(question)}
                            />
                          }
                        >
                          <ItemContent>
                            <ItemTitle className="whitespace-normal">{question}</ItemTitle>
                          </ItemContent>
                        </Item>
                      ))}
                    </div>
                  )}

                  {/* Limit Reached */}
                  {questionsAsked >= FREE_QUESTIONS && (
                    <Card size="sm" className="bg-accent">
                      <CardHeader>
                        <CardTitle>{t("limitTitle")}</CardTitle>
                        <CardDescription>{t("limitBody")}</CardDescription>
                      </CardHeader>
                      <CardFooter className="gap-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          nativeButton={false}
                          render={
                            <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer" />
                          }
                        >
                          {t("android")}
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1"
                          nativeButton={false}
                          render={
                            <a href={IOS_URL} target="_blank" rel="noopener noreferrer" />
                          }
                        >
                          {t("ios")}
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="border-t bg-card p-4">
                {questionsAsked < FREE_QUESTIONS ? (
                  <InputGroup>
                    <InputGroupInput
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSendMessage();
                      }}
                      placeholder={t("placeholder")}
                      aria-label={t("inputLabel")}
                      disabled={isTyping}
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton
                        variant="default"
                        size="icon-xs"
                        aria-label={t("send")}
                        onClick={handleSendMessage}
                        disabled={!inputText.trim() || isTyping}
                      >
                        <IconSend />
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                ) : (
                  <p className="text-center text-xs text-muted-foreground">
                    {t("limitFooter")}
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
