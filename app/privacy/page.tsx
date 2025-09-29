'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Globe } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account with BPay, we collect personal information including your full name, email address, phone number, date of birth, Social Security Number (for credit building services), and address. This information is necessary to provide our financial services and comply with regulatory requirements."
        },
        {
          subtitle: "Financial Information",
          text: "We collect banking information such as account numbers, routing numbers, and transaction history to facilitate payments and transfers. For SEVIS fee payments, we collect your SEVIS ID and school information. Credit building services require access to your credit information."
        },
        {
          subtitle: "Device and Usage Information",
          text: "We automatically collect device information including IP address, device type, operating system, browser type, and mobile device identifiers. We also collect usage data such as app interactions, feature usage, and session duration to improve our services."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide BPay services including SEVIS fee payments, credit building, student loans, money transfers, and financial management tools. This includes processing transactions, maintaining your account, and providing customer support."
        },
        {
          subtitle: "Legal Compliance",
          text: "We use your information to comply with applicable laws, regulations, and legal processes. This includes anti-money laundering (AML) and Know Your Customer (KYC) requirements, tax reporting obligations, and regulatory reporting to government agencies."
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze usage data to improve our services, develop new features, prevent fraud, and enhance security. We may use aggregated, anonymized data for research and analytics purposes."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: <Globe className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Providers",
          text: "We share information with trusted third-party service providers who help us operate our services, including payment processors, banking partners, credit bureaus, identity verification services, and cloud hosting providers. These partners are contractually required to protect your information."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, court order, or government request. We may also share information to prevent fraud, protect our rights, or ensure user safety. We will notify you of such disclosures when legally permitted."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity. We will provide notice before your information is transferred and becomes subject to a different privacy policy."
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Encryption and Protection",
          text: "We implement industry-standard security measures including 256-bit SSL encryption, secure data transmission, and encrypted data storage. Our systems are regularly monitored and updated to protect against unauthorized access, alteration, disclosure, or destruction of information."
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict access controls with multi-factor authentication, role-based access permissions, and regular security audits. Only authorized personnel with legitimate business needs can access your personal information."
        },
        {
          subtitle: "Incident Response",
          text: "We have comprehensive incident response procedures in place. In the unlikely event of a data breach, we will notify affected users and relevant authorities within 72 hours as required by applicable laws."
        }
      ]
    },
    {
      title: "Your Privacy Rights",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: "Access and Portability",
          text: "You have the right to access your personal information stored in our systems and request a copy of your data in a portable format. You can access most of your information through your BPay account dashboard."
        },
        {
          subtitle: "Correction and Deletion",
          text: "You can update or correct your personal information through your account settings. You may also request deletion of your account and associated data, subject to legal and regulatory retention requirements."
        },
        {
          subtitle: "Communication Preferences",
          text: "You can control your communication preferences and opt out of marketing communications at any time. However, we may still send you service-related communications that are necessary for your account."
        }
      ]
    },
    {
      title: "Data Retention",
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: "Retention Periods",
          text: "We retain your personal information for as long as your account is active or as needed to provide services. Financial transaction records are retained for 7 years as required by federal regulations. After account closure, we retain certain information for regulatory compliance and fraud prevention."
        },
        {
          subtitle: "Automatic Deletion",
          text: "Some information is automatically deleted based on predefined schedules. For example, temporary authentication tokens are deleted after expiration, and certain log files are automatically purged after 90 days."
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
                <Shield className="w-4 h-4 text-white" />
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities. Learn how we collect, use, and protect your information.
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
              BPay ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and web services (collectively, the "Service"). This policy applies to all users of BPay services, including international students using our SEVIS payment, credit building, and financial management features.
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

          {/* Contact Information */}
          <motion.div
            className="glass-card rounded-2xl p-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-blue-600 dark:text-blue-400">privacy@bpay.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  BPay Inc.<br />
                  123 Financial District<br />
                  New York, NY 10004<br />
                  United States
                </p>
              </div>
            </div>
          </motion.div>

          {/* Policy Updates */}
          <motion.div
            className="glass-card rounded-2xl p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Policy Updates</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. For significant changes, we may also send you a notification via email or through the app. Your continued use of our services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}