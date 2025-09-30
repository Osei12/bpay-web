"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeThemeToggle } from "@/components/ui/theme-toggle-safe";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Plus,
  Minus,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  BookOpen,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const faqCategories = [
  "All Questions",
  "SEVIS Payments",
  "Account Setup",
  "Credit Building",
  "Security",
  "Documentation",
  "General",
];

const faqs = [
  {
    category: "SEVIS Payments",
    question: "How do I pay my SEVIS fee through BPay?",
    answer: "To pay your SEVIS fee: 1) Log into your BPay account, 2) Navigate to 'SEVIS Payments', 3) Enter your SEVIS ID and personal information, 4) Choose your payment method, 5) Review and confirm payment. You'll receive instant confirmation and your receipt via email.",
    popular: true,
  },
  {
    category: "SEVIS Payments",
    question: "How long does SEVIS payment processing take?",
    answer: "SEVIS payments through BPay are processed instantly. You'll receive immediate confirmation, and the payment will be reflected in the SEVIS system within minutes. We recommend paying at least 3 business days before your visa interview.",
  },
  {
    category: "SEVIS Payments",
    question: "Can I get a refund on my SEVIS fee?",
    answer: "SEVIS fee refunds are handled directly by SEVP (Student and Exchange Visitor Program). BPay can provide you with all necessary payment documentation, but refund requests must be submitted to SEVP according to their policies.",
  },
  {
    category: "Account Setup",
    question: "What documents do I need to create a BPay account?",
    answer: "To create your BPay account, you'll need: 1) A valid passport, 2) Your I-20 or DS-2019 form, 3) Proof of enrollment from your school, 4) A valid email address and phone number. All documents must be current and clearly legible.",
    popular: true,
  },
  {
    category: "Account Setup",
    question: "How long does account verification take?",
    answer: "Account verification typically takes 1-2 business days. During peak periods (before semester starts), it may take up to 3 business days. You'll receive email updates throughout the process and can check your verification status in your account dashboard.",
  },
  {
    category: "Credit Building",
    question: "How does BPay help me build credit in the US?",
    answer: "BPay reports your payment history to major US credit bureaus. By making timely payments for your financial transactions, you build a positive credit history. We also offer educational resources and credit monitoring tools to help you understand and improve your credit score.",
    popular: true,
  },
  {
    category: "Credit Building",
    question: "When will I see my credit score improve?",
    answer: "Credit score improvements typically become visible after 3-6 months of consistent, on-time payments. Factors affecting timeline include your payment history, account age, and overall credit utilization. We provide monthly credit score updates and personalized tips for improvement.",
  },
  {
    category: "Security",
    question: "How secure is my financial information on BPay?",
    answer: "BPay uses bank-level security including 256-bit SSL encryption, multi-factor authentication, and SOC 2 Type II certified data centers. We never store your full payment card details and comply with PCI DSS standards. Your data is protected with the same security measures used by major financial institutions.",
    popular: true,
  },
  {
    category: "Security",
    question: "What should I do if I suspect unauthorized account access?",
    answer: "If you suspect unauthorized access: 1) Immediately change your password, 2) Enable two-factor authentication if not already active, 3) Review your recent transaction history, 4) Contact our security team immediately via live chat or phone. We'll investigate and secure your account promptly.",
  },
  {
    category: "Documentation",
    question: "Why was my document rejected during verification?",
    answer: "Common reasons for document rejection include: unclear or blurry images, expired documents, missing required information, or documents in unsupported formats. Ensure documents are current, clearly photographed, and all corners are visible. Check our document requirements guide for specific formatting needs.",
  },
  {
    category: "General",
    question: "What fees does BPay charge for its services?",
    answer: "BPay offers transparent pricing with no hidden fees. SEVIS payments include a small convenience fee clearly displayed before confirmation. Credit building services are included free with your account. International transfer fees vary by amount and destination - all fees are shown upfront.",
  },
  {
    category: "General",
    question: "Is BPay available in my country?",
    answer: "BPay serves international students from 150+ countries. We support students studying in the US regardless of their home country. Some payment methods may vary by region. Check our supported countries list or contact support to confirm availability in your specific location.",
    popular: true,
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All Questions" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFaqs = faqs.filter(faq => faq.popular);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glass-nav rounded-full px-6 py-3 mx-4 max-w-sm shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">Home</span>
          </Link>
          <SafeThemeToggle />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="absolute inset-0 pattern-dots-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-6">
                <HelpCircle className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find <span className="text-gradient-neon">Quick Answers</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Get instant answers to the most common questions about BPay services,
                from SEVIS payments to credit building and account management.
              </p>

              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 glass-card rounded-xl border-0 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{faqs.length} articles</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center"
                  alt="FAQ and Help"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>

                {/* Floating FAQ Elements */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">Most Helpful</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">{faqs.length}</div>
                    <div className="text-sm opacity-90">FAQ Articles</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Most Popular Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to our most frequently asked questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {popularFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent
                    className="p-6 cursor-pointer"
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-purple-600 border-purple-200">
                            {faq.category}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                            Popular
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                      </div>
                      <div className="ml-4">
                        {openQuestion === index ? (
                          <Minus className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>

                    {openQuestion === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All FAQs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              All Questions & Answers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Browse by category or search for specific topics
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={`${faq.category}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent
                    className="p-6 cursor-pointer"
                    onClick={() => setOpenQuestion(openQuestion === index + 100 ? null : index + 100)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-purple-600 border-purple-200">
                            {faq.category}
                          </Badge>
                          {faq.popular && (
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                      </div>
                      <div className="ml-4">
                        {openQuestion === index + 100 ? (
                          <Minus className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>

                    {openQuestion === index + 100 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No questions found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or browse different categories
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our support team is available 24/7 to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                Contact Support
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                Browse Help Center
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}