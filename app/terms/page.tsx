'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Scale, FileText, AlertTriangle, CheckCircle, XCircle, Users } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using BPay services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old and legally capable of entering into contracts to use BPay services. International students must have valid visa status and be enrolled in a Student and Exchange Visitor Program (SEVP)-certified institution to use SEVIS payment services."
        },
        {
          subtitle: "Account Registration",
          text: "You must provide accurate, current, and complete information during registration and maintain the accuracy of your account information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account."
        }
      ]
    },
    {
      title: "Service Description",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Financial Services",
          text: "BPay provides financial services including SEVIS fee payments, credit building assistance, student loan applications, money transfers, and financial management tools. These services are designed specifically for international students in the United States."
        },
        {
          subtitle: "Third-Party Integration",
          text: "Our services integrate with various third-party providers including banks, payment processors, credit bureaus, and government systems. We are not responsible for the availability, accuracy, or functionality of third-party services."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to maintain service availability 24/7 but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Lawful Use",
          text: "You agree to use BPay services only for lawful purposes and in compliance with all applicable laws, regulations, and these Terms. You may not use our services for any illegal activities, including money laundering, fraud, or financing of prohibited activities."
        },
        {
          subtitle: "Accurate Information",
          text: "You must provide truthful, accurate, and complete information when using our services. This includes personal information, financial information, and documentation required for identity verification and compliance purposes."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the security of your account credentials and must notify us immediately of any unauthorized access or suspicious activity. You agree not to share your account access with others or use another person's account."
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not: (a) attempt to gain unauthorized access to our systems; (b) use automated systems to access our services; (c) interfere with or disrupt our services; (d) violate any applicable laws or regulations; (e) impersonate others or provide false information."
        }
      ]
    },
    {
      title: "Fees and Payments",
      icon: <Scale className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Fees",
          text: "BPay charges fees for certain services as disclosed in our fee schedule available in the app and website. Fees may include transaction fees, service fees, and third-party fees. All fees are clearly disclosed before you complete a transaction."
        },
        {
          subtitle: "Payment Authorization",
          text: "By using our services, you authorize BPay to charge applicable fees to your designated payment method. You represent that you have the right to use the payment method and that the information provided is accurate."
        },
        {
          subtitle: "Refunds",
          text: "Refunds are provided in accordance with our refund policy. Generally, transaction fees are non-refundable once a transaction is completed. Refunds for other services may be available at our discretion and subject to applicable terms."
        },
        {
          subtitle: "Currency and Conversion",
          text: "All fees are stated in US Dollars unless otherwise specified. Currency conversion rates are determined by our payment processors and may include conversion fees. Rates may fluctuate and are not guaranteed."
        }
      ]
    },
    {
      title: "Privacy and Data Protection",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Data Collection",
          text: "We collect and process personal and financial information as described in our Privacy Policy. By using our services, you consent to our collection and use of information in accordance with our Privacy Policy."
        },
        {
          subtitle: "Data Sharing",
          text: "We may share your information with third parties as necessary to provide services, comply with legal requirements, and as described in our Privacy Policy. This includes sharing with banks, payment processors, credit bureaus, and government agencies."
        },
        {
          subtitle: "Data Security",
          text: "We implement industry-standard security measures to protect your information. However, no system is completely secure, and we cannot guarantee absolute security of your data transmitted over the internet."
        }
      ]
    },
    {
      title: "Disclaimers and Limitations",
      icon: <XCircle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Disclaimers",
          text: "BPay services are provided 'as is' without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of our services. We are not responsible for any financial losses resulting from your use of our services."
        },
        {
          subtitle: "Limitation of Liability",
          text: "To the maximum extent permitted by law, BPay's total liability for any claims related to our services shall not exceed the amount of fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, special, or consequential damages."
        },
        {
          subtitle: "Third-Party Services",
          text: "We are not responsible for the actions, omissions, or services of third parties. This includes banks, payment processors, credit bureaus, government agencies, and other service providers that we integrate with or refer you to."
        },
        {
          subtitle: "Financial Advice Disclaimer",
          text: "BPay does not provide financial, legal, or tax advice. Our services are tools to help you manage your finances, but you should consult with qualified professionals for specific advice regarding your financial situation."
        }
      ]
    },
    {
      title: "Termination",
      icon: <XCircle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Termination by You",
          text: "You may terminate your account at any time by contacting our customer support. Upon termination, you remain responsible for any outstanding obligations and fees incurred before termination."
        },
        {
          subtitle: "Termination by BPay",
          text: "We may suspend or terminate your account at any time for violation of these Terms, suspicious activity, legal requirements, or at our discretion. We will provide notice when reasonably possible, except in cases of legal prohibition or security concerns."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use our services ceases immediately. We may retain certain information as required by law or for legitimate business purposes. Outstanding transactions may continue to be processed."
        }
      ]
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
                <Scale className="w-4 h-4 text-white" />
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using BPay services. These terms govern your use of our financial services and mobile application.
            </p>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: December 22, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            className="glass-card rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to BPay. These Terms of Service ("Terms") govern your use of BPay's mobile application, website, and financial services (collectively, the "Service"). BPay Inc. ("BPay," "we," "our," or "us") provides financial services specifically designed for international students in the United States, including SEVIS fee payments, credit building, student loans, and financial management tools. By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="glass-card hover:glass-card-hover rounded-2xl p-8 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legal Information */}
          <motion.div
            className="glass-card rounded-2xl p-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Governing Law and Disputes</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Governing Law</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in New York County, New York.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Dispute Resolution</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Any dispute, claim, or controversy arising out of or relating to these Terms or the use of BPay services shall first be subject to informal dispute resolution. If the dispute cannot be resolved informally, it shall be resolved through binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Class Action Waiver</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  You agree that any arbitration or legal proceeding shall be conducted on an individual basis and not as a class action, collective action, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="glass-card rounded-2xl p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Legal Department</h3>
                <p className="text-blue-600 dark:text-blue-400">legal@bpay.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customer Support</h3>
                <p className="text-blue-600 dark:text-blue-400">support@bpay.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mailing Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  BPay Inc.<br />
                  Legal Department<br />
                  123 Financial District<br />
                  New York, NY 10004<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-BPAY<br />
                  Monday - Friday: 9 AM - 6 PM EST
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Updates */}
          <motion.div
            className="glass-card rounded-2xl p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right to update these Terms of Service at any time to reflect changes in our services, legal requirements, or business practices. We will notify you of material changes by posting the updated Terms on our website and app, and updating the "Last updated" date. For significant changes that affect your rights or obligations, we may also provide additional notice via email or in-app notification. Your continued use of BPay services after the effective date of updated Terms constitutes your acceptance of the changes. If you do not agree to the updated Terms, you must stop using our services and may terminate your account.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}