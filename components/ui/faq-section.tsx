"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I pay my SEVIS I-901 fee through BPay?",
    answer: "Simply download the BPay app, create your account, and navigate to the SEVIS payment section. Enter your SEVIS ID and select your payment method. The process takes just a few minutes and you'll receive instant confirmation.",
    category: "Payments"
  },
  {
    question: "Is my financial information secure with BPay?",
    answer: "Absolutely. We use bank-level 256-bit encryption, are PCI DSS compliant, and follow strict security protocols. Your data is protected with the same standards used by major financial institutions.",
    category: "Security"
  },
  {
    question: "What payment methods are accepted?",
    answer: "BPay accepts all major credit cards (Visa, Mastercard, American Express), bank transfers, and mobile money options. We support both GHS and USD currencies for your convenience.",
    category: "Payments"
  },
  {
    question: "How long does it take for payments to be processed?",
    answer: "Most payments are processed instantly or within 2 hours. SEVIS fee payments are confirmed immediately, while bank transfers may take 1-2 business days depending on your bank.",
    category: "Payments"
  },
  {
    question: "Can I track my visa interview appointments?",
    answer: "Yes! BPay includes a comprehensive interview scheduling system with automated reminders, calendar integration, and real-time updates on your appointment status.",
    category: "Services"
  },
  {
    question: "How do I apply for student loans through BPay?",
    answer: "Access the Banking & Credit section in the app, complete your profile, upload required documents, and submit your application. Our streamlined process provides quick approval decisions.",
    category: "Banking"
  },
  {
    question: "What documents can I store in BPay?",
    answer: "You can securely store passports, transcripts, financial statements, I-20 forms, visa documents, and any other important student documents with end-to-end encryption.",
    category: "Services"
  },
  {
    question: "Is BPay available in my country?",
    answer: "BPay is available globally for international students. However, some specific services may vary by country. Contact our support team to confirm availability in your region.",
    category: "General"
  }
];

const categories = ["All", "Payments", "Security", "Banking", "Services", "General"];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs = activeCategory === "All"
    ? faqData
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }
            `}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        <AnimatePresence mode="wait">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="glass-effect border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <ChevronDown className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-white/10 pt-4">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Contact Support Card */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="glass-effect border-white/20 max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-4">
              Our support team is here to help you 24/7
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg">
              Contact Support
            </button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}