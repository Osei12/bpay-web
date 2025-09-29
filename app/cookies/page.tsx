'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Cookie, Settings, Shield, BarChart3, Target, Globe } from 'lucide-react'
import Link from 'next/link'

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: <Settings className="w-5 h-5" />,
      name: "Essential Cookies",
      purpose: "Required for basic website functionality",
      description: "These cookies are necessary for the website to function and cannot be switched off. They enable core functionality such as security, network management, and accessibility.",
      examples: ["Authentication cookies", "Security cookies", "Load balancing cookies"],
      canDisable: false
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      name: "Analytics Cookies",
      purpose: "Help us understand how visitors use our website",
      description: "These cookies collect information about how visitors use our website, which pages are visited most often, and if users get error messages from web pages.",
      examples: ["Google Analytics", "Page view tracking", "User journey analysis"],
      canDisable: true
    },
    {
      icon: <Target className="w-5 h-5" />,
      name: "Marketing Cookies",
      purpose: "Used to deliver relevant advertisements",
      description: "These cookies track your activity across websites to understand your interests and provide you with relevant advertising.",
      examples: ["Facebook Pixel", "Google Ads", "Retargeting pixels"],
      canDisable: true
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Functional Cookies",
      purpose: "Enhance functionality and personalization",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: ["Language preferences", "Theme settings", "User preferences"],
      canDisable: true
    }
  ]

  const cookieList = [
    {
      name: "_bpay_session",
      purpose: "Authentication and session management",
      type: "Essential",
      duration: "Session",
      domain: "bpay.com"
    },
    {
      name: "_bpay_secure",
      purpose: "Security and fraud prevention",
      type: "Essential",
      duration: "7 days",
      domain: "bpay.com"
    },
    {
      name: "_ga",
      purpose: "Google Analytics - distinguish users",
      type: "Analytics",
      duration: "2 years",
      domain: "google.com"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguish users",
      type: "Analytics",
      duration: "24 hours",
      domain: "google.com"
    },
    {
      name: "_fbp",
      purpose: "Facebook Pixel - track conversions",
      type: "Marketing",
      duration: "90 days",
      domain: "facebook.com"
    },
    {
      name: "bpay_theme",
      purpose: "Remember user theme preference",
      type: "Functional",
      duration: "1 year",
      domain: "bpay.com"
    },
    {
      name: "bpay_lang",
      purpose: "Remember language preference",
      type: "Functional",
      duration: "1 year",
      domain: "bpay.com"
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
                <Cookie className="w-4 h-4 text-white" />
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
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cookie Policy
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how BPay uses cookies and similar technologies to improve your experience and provide our services.
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What are Cookies?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and understanding how you use our services.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This Cookie Policy explains how BPay ("we," "our," or "us") uses cookies and similar technologies on our website and mobile applications. By using our services, you consent to our use of cookies as described in this policy.
            </p>
          </motion.div>

          {/* Types of Cookies */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Types of Cookies We Use</h2>

            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  className="glass-card rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-white">
                      {cookie.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cookie.name}</h3>
                        {cookie.canDisable ? (
                          <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                            Can Disable
                          </span>
                        ) : (
                          <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded-full">
                            Essential
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{cookie.purpose}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{cookie.description}</p>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Examples:</p>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                          {cookie.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cookie List */}
          <motion.div
            className="glass-card rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Specific Cookies We Use</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Cookie Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieList.map((cookie, index) => (
                    <tr key={cookie.name} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-4 font-mono text-sm text-gray-900 dark:text-white">{cookie.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{cookie.purpose}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          cookie.type === 'Essential'
                            ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                            : cookie.type === 'Analytics'
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                            : cookie.type === 'Marketing'
                            ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* How to Control Cookies */}
          <motion.div
            className="glass-card rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Control Cookies</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Browser Settings</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Cookie Preferences</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  When you first visit our website, you'll see a cookie banner where you can choose which types of cookies to accept. You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Third-Party Opt-Outs</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  For third-party cookies, you can opt out directly with the providers:
                </p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 dark:text-blue-400 hover:underline">Google Analytics Opt-out</a></li>
                  <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 dark:text-blue-400 hover:underline">Facebook Ad Preferences</a></li>
                  <li><strong>Industry Opt-out:</strong> <a href="http://www.aboutads.info/choices/" className="text-blue-600 dark:text-blue-400 hover:underline">Digital Advertising Alliance</a></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            className="glass-card rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We use several third-party services that may set cookies on your device:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  We use Google Analytics to understand how visitors use our website and to improve our services.
                </p>
                <a href="https://policies.google.com/privacy" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                  Google Privacy Policy
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Facebook Pixel</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  We use Facebook Pixel to measure the effectiveness of our advertising and provide relevant ads.
                </p>
                <a href="https://www.facebook.com/privacy/explanation" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                  Facebook Privacy Policy
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Stripe</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Our payment processor may set cookies for fraud prevention and secure payment processing.
                </p>
                <a href="https://stripe.com/privacy" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                  Stripe Privacy Policy
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Intercom</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Our customer support chat system may set cookies to provide personalized support.
                </p>
                <a href="https://www.intercom.com/legal/privacy" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                  Intercom Privacy Policy
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="glass-card hover:glass-card-hover rounded-2xl p-8 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Questions About Cookies?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy Team</h3>
                <p className="text-blue-600 dark:text-blue-400">privacy@bpay.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mailing Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  BPay Inc.<br />
                  Privacy Department<br />
                  123 Financial District<br />
                  New York, NY 10004
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. When we make changes, we will update the "Last updated" date at the top of this policy. We encourage you to review this policy periodically to stay informed about how we use cookies. If we make material changes, we will provide notice through our website or by other means.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}