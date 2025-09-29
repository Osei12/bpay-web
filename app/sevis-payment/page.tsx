'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, CreditCard, CheckCircle, Clock, Shield, Smartphone, DollarSign, Users, Zap, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SEVISPaymentPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Processing",
      description: "SEVIS payments processed instantly with immediate confirmation receipts."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Encrypted",
      description: "Bank-level security with 256-bit encryption for all transactions."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Fees",
      description: "Low transaction fees with transparent pricing and no hidden charges."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multiple Currencies",
      description: "Pay in your local currency with real-time exchange rates."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any payment issues."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "SEVP Approved",
      description: "Officially approved payment method by SEVP and DHS."
    }
  ]

  const steps = [
    {
      step: "1",
      title: "Enter SEVIS ID",
      description: "Provide your SEVIS ID and verify your program information."
    },
    {
      step: "2",
      title: "Select Payment Method",
      description: "Choose from multiple payment options including bank transfer, card, or digital wallet."
    },
    {
      step: "3",
      title: "Review & Confirm",
      description: "Review payment details and fees before confirming your transaction."
    },
    {
      step: "4",
      title: "Instant Receipt",
      description: "Receive immediate confirmation and official receipt for your records."
    }
  ]

  const faqs = [
    {
      question: "What is the SEVIS fee?",
      answer: "The SEVIS fee is a mandatory fee required for F-1, F-3, M-1, and M-3 visa applicants to fund the Student and Exchange Visitor Information System (SEVP)."
    },
    {
      question: "How much is the SEVIS fee?",
      answer: "The SEVIS fee is $350 for F and M students. The fee may vary for certain program types and exchange visitors."
    },
    {
      question: "When should I pay the SEVIS fee?",
      answer: "You must pay the SEVIS fee before applying for your visa and arriving in the United States. Payment should be made after receiving your Form I-20 from your school."
    },
    {
      question: "How long does payment processing take?",
      answer: "Payments are processed instantly through BPay. You'll receive immediate confirmation and can print your receipt right away."
    },
    {
      question: "Is BPay an approved payment method?",
      answer: "Yes, BPay is an officially approved payment method by SEVP and the Department of Homeland Security for SEVIS fee payments."
    }
  ]

  return (
    <div className="min-h-screen pattern-light-bg dark:pattern-dark-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-nav backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>

            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BPay</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 transform -rotate-12 animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    SEVIS Fee Payment
                  </h1>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-2">
                    Fast, Secure, Official
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Pay your SEVIS fee instantly with BPay's secure, SEVP-approved payment system. Get immediate confirmation and official receipts required for your visa application.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  Pay SEVIS Fee Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 text-lg"
                >
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$350</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Standard SEVIS Fee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">Instant</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Processing Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Available</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card hover:glass-card-hover rounded-2xl p-8 bg-white/10 dark:bg-gray-900/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-6xl">
                  <Smartphone className="w-24 h-24" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">SEVIS Fee</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$350.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Processing Fee</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$2.99</span>
                  </div>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-gray-900 dark:text-white">$352.99</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose BPay for SEVIS Payments?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The most trusted and efficient way to pay your SEVIS fee</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card hover:glass-card-hover rounded-xl p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simple steps to complete your SEVIS payment</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about SEVIS payments</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card hover:glass-card-hover rounded-xl p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Pay Your SEVIS Fee?</h2>
            <p className="text-xl text-white/90 mb-8">Join thousands of students who trust BPay for their SEVIS payments</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Start Payment Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}