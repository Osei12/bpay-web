"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeThemeToggle } from "@/components/ui/theme-toggle-safe";
import { ModernPhoneMockup } from "@/components/ui/modern-phone-mockup";
import {
  Smartphone,
  DollarSign,
  Shield,
  Zap,
  Users,
  Star,
  Download,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Globe,
  CreditCard,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function CleanHomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bpay.com/#organization",
        "name": "BPay",
        "url": "https://bpay.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bpay.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Leading financial technology company serving international students with mobile banking, SEVIS payments, and credit building solutions.",
        "foundingDate": "2020",
        "sameAs": [
          "https://twitter.com/BPayApp",
          "https://linkedin.com/company/bpay",
          "https://facebook.com/BPayApp"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-BPAY-APP",
          "contactType": "customer service",
          "availableLanguage": ["English", "Spanish", "Chinese", "French"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://bpay.com/#website",
        "url": "https://bpay.com",
        "name": "BPay - Financial App for International Students",
        "description": "Trusted by 50,000+ international students for SEVIS payments, credit building, student loans, and financial management.",
        "publisher": {
          "@id": "https://bpay.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bpay.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "MobileApplication",
        "name": "BPay - Student Financial App",
        "description": "Mobile financial management app for international students. Pay SEVIS fees, build credit, manage finances.",
        "operatingSystem": ["iOS", "Android"],
        "applicationCategory": "FinanceApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "50000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "downloadUrl": [
          "https://apps.apple.com/app/bpay",
          "https://play.google.com/store/apps/details?id=com.bpay"
        ]
      },
      {
        "@type": "FinancialService",
        "name": "BPay Financial Services",
        "description": "Comprehensive financial services for international students including SEVIS payments, credit building, student loans, and money transfers.",
        "provider": {
          "@id": "https://bpay.com/#organization"
        },
        "serviceType": ["SEVIS Fee Payment", "Credit Building", "Student Loans", "Money Transfer", "Mobile Banking"],
        "areaServed": "Worldwide",
        "audience": {
          "@type": "Audience",
          "audienceType": "International Students"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "BPay - #1 Financial App for International Students",
            "description": "Join 50,000+ international students who trust BPay for SEVIS payments, credit building, and financial management.",
            "url": "https://bpay.com",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "BPay",
              "operatingSystem": ["iOS", "Android"],
              "applicationCategory": "FinanceApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "50000"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bpay.com"
                }
              ]
            }
          })
        }}
      />
    <div className="min-h-screen bg-white dark:bg-gray-950 light:pattern-light-bg dark:pattern-dark-bg text-gray-900 dark:text-white relative">
      {/* Pattern Overlays */}
      <div className="absolute inset-0 pattern-dots-overlay pointer-events-none"></div>
      <div className="absolute inset-0 pattern-waves pointer-events-none"></div>
      {/* Animated Oval Navigation */}
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'glass-nav rounded-full px-6 py-3 mx-4 max-w-sm shadow-2xl'
            : 'bg-transparent rounded-full px-6 py-4 max-w-7xl w-full'
        }`}
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          borderRadius: isScrolled ? "9999px" : "24px"
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={isScrolled ? { scale: 1.05 } : {}}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'gap-4' : 'gap-8'
        }`}>
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            animate={{
              scale: isScrolled ? 0.9 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center" aria-hidden="true">
              <Smartphone className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className={`font-bold transition-all duration-300 ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}>BPay</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className={`items-center space-x-6 ${
              isScrolled ? 'hidden' : 'hidden md:flex'
            }`}
            role="menubar"
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" role="menuitem">
              Features
            </a>
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" role="menuitem">
              Services
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" role="menuitem">
              About
            </a>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-4"
            animate={{
              scale: isScrolled ? 0.9 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <SafeThemeToggle />
            {!isScrolled && (
              <Button variant="ghost" className="hidden md:inline-flex text-sm" aria-label="Sign in to your account">
                Sign In
              </Button>
            )}
            <Button
              className={`bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:neon-glow-purple dark:glass-button transition-all duration-300 ${
                isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3'
              }`}
              aria-label="Get started with BPay"
            >
              {isScrolled ? 'Get App' : 'Get Started'}
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main>
        <section className="relative pt-20 pb-16 bg-[#F5F0E8] dark:bg-gray-900 light:pattern-elegant-light dark:pattern-elegant-dark" aria-labelledby="hero-title">
          {/* Mesh Gradient Overlay */}
          <div className="absolute inset-0 light:mesh-gradient-light dark:mesh-gradient-dark pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] sm:min-h-[600px]">
            {/* Left Column - Main Hero Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white dark:bg-gray-800 dark:glass-card p-4 sm:p-6 lg:p-8 shadow-lg border-0 rounded-2xl sm:rounded-3xl dark:neon-border">
                <CardContent className="p-0">
                  {/* Navigation dots */}
                  <div className="flex items-center gap-2 mb-6 sm:mb-8">
                    <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">bpayco</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left side - Text content */}
                    <div className="space-y-6">
                      <h1 id="hero-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        Manage your
                        <br />
                        <span className="text-blue-600 dark:text-gradient-neon">student finances</span>
                        <br />
                        like never before
                      </h1>

                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        Simplify tuition payments, SEVIS payments and
                        credit building. The trusted choice of over
                        50,000 international students.
                      </p>

                      {/* App Store Buttons */}
                      <div className="flex flex-col gap-3">
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl h-12 justify-start px-4">
                          <span className="text-lg mr-2">📱</span>
                          <div className="text-left">
                            <div className="text-xs opacity-80">Download on</div>
                            <div className="font-semibold">App Store</div>
                          </div>
                        </Button>
                        <Button variant="outline" className="border-gray-900 text-gray-900 dark:border-white dark:text-white rounded-xl h-12 justify-start px-4">
                          <span className="text-lg mr-2">📱</span>
                          <div className="text-left">
                            <div className="text-xs opacity-80">Get it on</div>
                            <div className="font-semibold">Google Play</div>
                          </div>
                        </Button>
                      </div>

                      {/* Social Proof with Avatars */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4">
                        <div className="flex -space-x-2">
                          {/* Student Avatar Images */}
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-bold">👩🏽‍🎓</span>
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-bold">👨🏿‍🎓</span>
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-bold">👩🏻‍🎓</span>
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-bold">👨🏽‍🎓</span>
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs sm:text-sm">
                            +50K
                          </div>
                        </div>
                        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                          <div className="font-semibold">Trusted by 50,000+ students</div>
                          <div className="text-xs sm:text-sm opacity-80">from 150+ countries</div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Phone mockup with hand */}
                    <div className="relative flex justify-center items-center">
                      <motion.div
                        className="relative"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {/* Hand illustration */}
                        <div className="absolute -bottom-8 -left-4 w-24 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-80 transform rotate-12"></div>

                        {/* Phone */}
                        <div className="w-28 h-56 sm:w-32 sm:h-64 lg:w-36 lg:h-72 bg-gray-900 rounded-2xl sm:rounded-3xl p-1 shadow-xl relative z-10">
                          <div className="w-full h-full bg-white rounded-[20px] overflow-hidden">
                            {/* Status bar */}
                            <div className="bg-blue-600 h-8 flex items-center justify-center">
                              <span className="text-white text-xs font-medium">9:41</span>
                            </div>

                            {/* App content */}
                            <div className="p-3 space-y-3">
                              <div className="text-xs font-bold text-gray-900">BPAY Dashboard</div>

                              {/* Balance card */}
                              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 text-white">
                                <div className="text-xs opacity-80">Total Balance</div>
                                <div className="text-lg font-bold">$12,543</div>
                              </div>

                              {/* Quick actions */}
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-yellow-50 rounded-lg p-2 text-center">
                                  <div className="w-6 h-6 bg-yellow-500 rounded mx-auto mb-1"></div>
                                  <div className="text-xs font-medium">SEVIS</div>
                                </div>
                                <div className="bg-green-50 rounded-lg p-2 text-center">
                                  <div className="w-6 h-6 bg-green-500 rounded mx-auto mb-1"></div>
                                  <div className="text-xs font-medium">Credit</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Secondary Cards */}
            <div className="space-y-6">
              {/* Save Money Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-white dark:bg-gray-800 dark:glass-card p-6 shadow-lg border-0 rounded-3xl dark:neon-glow-blue">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          Save money with
                          <br />
                          proper calculation
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Smart budgeting tools help international students manage expenses and save for tuition.
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700 rounded-2xl flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-purple-600 dark:text-purple-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features that blow mind */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="bg-white dark:bg-gray-800 dark:glass-card p-6 shadow-lg border-0 rounded-3xl dark:neon-glow-cyan">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          Features that blows mind
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          SEVIS payments, credit building, global transfers - all in one powerful app.
                        </p>

                        {/* Feature highlights */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 dark:text-gray-300">Instant SEVIS payments</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 dark:text-gray-300">Credit score building</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 dark:text-gray-300">150+ supported countries</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Security testimonial card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="bg-gray-900 dark:bg-gray-800 dark:glass-card p-6 shadow-lg border-0 rounded-3xl text-white dark:pulse-neon">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <p className="text-sm mb-4 leading-relaxed">
                          "BPay transformed my study abroad journey! The instant SEVIS payments and credit building features gave me confidence in my financial future."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-sm">
                            👨🏾‍🎓
                          </div>
                          <div>
                            <div className="font-semibold text-sm">David Okafor</div>
                            <div className="text-xs text-gray-400">Engineering Student, Nigeria → Germany</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900 light:pattern-light-bg dark:pattern-dark-bg overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 pattern-grid-overlay pointer-events-none"></div>
        {/* Slanted Top Border */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-purple-600 transform -skew-y-1 origin-top-left"></div>

        {/* Diagonal Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-10 right-1/4 w-64 h-px bg-gradient-to-r from-purple-300 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-px bg-gradient-to-r from-blue-300 to-transparent transform -rotate-6"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Students Served" },
              { value: "99.9%", label: "Uptime" },
              { value: "150+", label: "Countries" },
              { value: "<2h", label: "Processing Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  {/* Slanted accent behind number */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-300"></div>
                  <div className="relative text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 py-2">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </main>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots-overlay opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
              Trusted by thousands of <span className="text-blue-600 dark:text-gradient-neon block sm:inline">international students</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Real stories from students who've made their financial journey easier with BPay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Computer Science Student",
                country: "India → USA",
                image: "👩🏽‍💻",
                quote: "BPay made my SEVIS payment so simple! I saved hours compared to traditional methods and the rates were amazing.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                name: "Ahmed Hassan",
                role: "Business Student",
                country: "Egypt → Canada",
                image: "👨🏽‍🎓",
                quote: "Building my credit score while studying abroad seemed impossible until I found BPay. Now I'm on track for financial success!",
                gradient: "from-green-500 to-blue-500"
              },
              {
                name: "Maria Rodriguez",
                role: "Medical Student",
                country: "Mexico → UK",
                image: "👩🏻‍⚕️",
                quote: "The instant tuition payments saved my enrollment! BPay's support team was there every step of the way.",
                gradient: "from-pink-500 to-red-500"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full p-6 bg-white dark:bg-gray-800 dark:glass-card border-0 shadow-lg hover:shadow-xl dark:hover:neon-glow-blue transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Student Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white text-lg`}>
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.country}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">Join thousands of successful students</p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:glass-button dark:neon-glow-purple px-8 py-3">
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 light:pattern-elegant-light dark:pattern-elegant-dark" aria-labelledby="features-title">
        {/* Subtle Wave Pattern */}
        <div className="absolute inset-0 pattern-waves opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="features-title" className="text-3xl md:text-5xl font-bold mb-6">
              Everything you need in one app
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial solutions designed specifically for international students
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "SEVIS Fee Payments",
                description: "Pay your I-901 SEVIS fees instantly with zero hassle and immediate confirmation.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: CreditCard,
                title: "Build Credit Score",
                description: "Establish your US credit history with everyday spending and smart financial tools.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: GraduationCap,
                title: "Student Loans",
                description: "Access flexible loan options with competitive rates designed for students.",
                color: "from-purple-500 to-violet-600"
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your money and data are protected with enterprise-grade security measures.",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Globe,
                title: "Global Transfers",
                description: "Send money worldwide with the best exchange rates and lowest fees.",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: Zap,
                title: "Instant Processing",
                description: "Most transactions are completed within minutes, not days.",
                color: "from-indigo-500 to-purple-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 dark:glass-card hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:neon-glow-purple relative overflow-hidden group">
                  {/* Slanted accent overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-blue-500/5 transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>

                  <CardContent className="p-8 relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 relative`}>
                      <feature.icon className="w-6 h-6 text-white" />
                      {/* Small slanted accent */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/20 transform rotate-45"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        {/* Slanted top border */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white dark:bg-gray-950 transform -skew-y-1 origin-top-right"></div>

        {/* Diagonal background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-20 w-32 h-32 bg-white/10 transform rotate-45"
            animate={{
              rotate: [45, 60, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-24 h-24 bg-yellow-400/20 transform -rotate-12"
            animate={{
              rotate: [-12, -25, -12],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Diagonal accent lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-6"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 pt-8">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to take control of your finances?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of international students who trust BPay for their financial needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 dark:glass-button dark:neon-glow-blue px-8 py-3 text-lg relative overflow-hidden group"
            >
              {/* Slanted accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 dark:glass-button dark:neon-border px-8 py-3 text-lg relative overflow-hidden group"
            >
              {/* Slanted accent on hover */}
              <div className="absolute inset-0 bg-white/10 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative">Learn More</div>
            </Button>
          </motion.div>
        </div>

        {/* Slanted bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50 dark:bg-gray-900 transform skew-y-1 origin-bottom-left"></div>
      </section>

      {/* Footer */}
      <footer className="relative pattern-light-bg dark:pattern-dark-bg border-t border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        {/* Diagonal background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 transform -rotate-12 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 transform rotate-12 animate-pulse"></div>

          {/* Diagonal accent lines */}
          <div className="absolute top-32 left-1/3 w-48 h-px bg-gradient-to-r from-purple-300/30 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-32 right-1/3 w-36 h-px bg-gradient-to-r from-blue-300/30 to-transparent transform -rotate-6"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6 relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center relative shadow-lg">
                  <Smartphone className="w-5 h-5 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400/60 rounded-full transform rotate-45"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BPay</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Trusted by 50,000+ international students for SEVIS payments, credit building, and financial management across the US.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '🐦' },
                  { name: 'LinkedIn', icon: '💼' },
                  { name: 'Instagram', icon: '📷' },
                  { name: 'Facebook', icon: '📘' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 glass-card hover:glass-card-hover rounded-xl flex items-center justify-center text-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
                Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  'SEVIS Fee Payment',
                  'Credit Building',
                  'Student Loans',
                  'Financial Management',
                  'Money Transfer',
                  'Budget Planning'
                ].map((service, index) => (
                  <li key={service}>
                    <motion.a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transform rotate-45"></span>
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
                Company
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  'About Us',
                  'Our Mission',
                  'Security',
                  'Careers',
                  'Blog',
                  'Press Kit'
                ].map((item, index) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transform rotate-45"></span>
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
                Support
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></div>
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  'Help Center',
                  'Contact Us',
                  'Live Chat',
                  'Documentation',
                  'FAQ',
                  'Community'
                ].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transform rotate-45"></span>
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Download Our App</p>
                <div className="flex flex-col space-y-2">
                  <motion.a
                    href="#"
                    className="glass-card hover:glass-card-hover rounded-xl p-3 flex items-center space-x-3 group transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📱</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Download on the</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">App Store</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    className="glass-card hover:glass-card-hover rounded-xl p-3 flex items-center space-x-3 group transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🤖</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Get it on</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Google Play</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="py-8 border-t border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
              <div className="mb-6 lg:mb-0">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Stay Updated</h4>
                <p className="text-gray-600 dark:text-gray-300">Get the latest updates on new features and financial tips for international students.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 glass-card focus:glass-card-hover rounded-xl border-0 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative">Subscribe</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <div className="py-8 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="relative">
                  <span>© 2024 BPay. All rights reserved.</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 transform -skew-x-6 scale-110"></div>
                </div>
                <span className="hidden sm:inline">|</span>
                <span>Made with ❤️ for international students</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                {[
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Cookie Policy', href: '/cookies' }
                ].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300 transform -skew-x-12"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}