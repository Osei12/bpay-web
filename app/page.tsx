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
  Sparkles,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function CleanHomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup dropdown timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Helper functions for dropdown behavior
  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  const handleDropdownStay = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bpay.com/#organization",
        name: "BPay",
        url: "https://bpay.com",
        logo: {
          "@type": "ImageObject",
          url: "https://bpay.com/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "Leading financial technology company serving international students with mobile banking, SEVIS payments, and credit building solutions.",
        foundingDate: "2020",
        sameAs: [
          "https://twitter.com/BPayApp",
          "https://linkedin.com/company/bpay",
          "https://facebook.com/BPayApp",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-800-BPAY-APP",
          contactType: "customer service",
          availableLanguage: ["English", "Spanish", "Chinese", "French"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://bpay.com/#website",
        url: "https://bpay.com",
        name: "BPay - Financial App for International Students",
        description:
          "Trusted by 50,000+ international students for SEVIS payments, credit building, student loans, and financial management.",
        publisher: {
          "@id": "https://bpay.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://bpay.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "MobileApplication",
        name: "BPay - Student Financial App",
        description:
          "Mobile financial management app for international students. Pay SEVIS fees, build credit, manage finances.",
        operatingSystem: ["iOS", "Android"],
        applicationCategory: "FinanceApplication",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "50000",
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        downloadUrl: [
          "https://apps.apple.com/app/bpay",
          "https://play.google.com/store/apps/details?id=com.bpay",
        ],
      },
      {
        "@type": "FinancialService",
        name: "BPay Financial Services",
        description:
          "Comprehensive financial services for international students including SEVIS payments, credit building, student loans, and money transfers.",
        provider: {
          "@id": "https://bpay.com/#organization",
        },
        serviceType: [
          "SEVIS Fee Payment",
          "Credit Building",
          "Student Loans",
          "Money Transfer",
          "Mobile Banking",
        ],
        areaServed: "Worldwide",
        audience: {
          "@type": "Audience",
          audienceType: "International Students",
        },
      },
    ],
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
            name: "BPay - #1 Financial App for International Students",
            description:
              "Join 50,000+ international students who trust BPay for SEVIS payments, credit building, and financial management.",
            url: "https://bpay.com",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "BPay",
              operatingSystem: ["iOS", "Android"],
              applicationCategory: "FinanceApplication",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "50000",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://bpay.com",
                },
              ],
            },
          }),
        }}
      />
      <div className="min-h-screen bg-white dark:bg-gray-950  text-gray-900 dark:text-white relative">
        {/* Pattern Overlays */}
        {/* <div className="absolute inset-0 pattern-dots-overlay pointer-events-none"></div>
        <div className="absolute inset-0 pattern-waves pointer-events-none"></div> */}
        {/* Enhanced Responsive Navigation */}
        <motion.nav
          role="navigation"
          aria-label="Main navigation"
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
            isScrolled
              ? "glass-nav rounded-full px-6 py-3 mx-4  shadow-2xl"
              : "bg-transparent rounded-2xl px-6 py-4 max-w-7xl w-full"
          }`}
          initial={{ opacity: 0, y: -20, x: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            borderRadius: isScrolled ? "9999px" : "16px",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-x-10 justify-between w-full">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer z-10"
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex relative w-10 h-10 items-center justify-center mr-2">
                <Image
                  src={"/assets/logo/adaptive-icon.png"}
                  fill
                  alt="BPay logo"
                  className="object-contain"
                />
              </div>
              <span
                className={`font-bold transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
              >
                BPay
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className={`items-center space-x-8  hidden md:flex `}
              // className={`items-center space-x-8 ${isScrolled ? "hidden" : "hidden lg:flex"}`}
              // animate={{ opacity: isScrolled ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onMouseEnter={() => handleDropdownEnter("services")}
                  onMouseLeave={handleDropdownLeave}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl shadow-lg py-2"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href="/student-loans"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <GraduationCap className="w-5 h-5 text-purple-500" />
                      <div>
                        <div className="font-medium">Student Loans</div>
                        <div className="text-sm text-gray-500">Coming Soon</div>
                      </div>
                    </Link>
                    <Link
                      href="#features"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-medium">SEVIS Payments</div>
                        <div className="text-sm text-gray-500">
                          Instant & secure
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#features"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <CreditCard className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-medium">Credit Building</div>
                        <div className="text-sm text-gray-500">
                          Build US credit
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/appointments"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Users className="w-5 h-5 text-teal-500" />
                      <div>
                        <div className="font-medium">Appointments</div>
                        <div className="text-sm text-gray-500">Coming Soon</div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onMouseEnter={() => handleDropdownEnter("resources")}
                  onMouseLeave={handleDropdownLeave}
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl shadow-lg py-2"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href="/blog"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded text-white flex items-center justify-center text-xs">
                        📖
                      </div>
                      <div>
                        <div className="font-medium">Blog</div>
                        <div className="text-sm text-gray-500">
                          Financial tips & guides
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/help"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded text-white flex items-center justify-center text-xs">
                        ❓
                      </div>
                      <div>
                        <div className="font-medium">Help Center</div>
                        <div className="text-sm text-gray-500">Get support</div>
                      </div>
                    </Link>
                    <Link
                      href="/faq"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded text-white flex items-center justify-center text-xs">
                        💬
                      </div>
                      <div>
                        <div className="font-medium">FAQ</div>
                        <div className="text-sm text-gray-500">
                          Quick answers
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/community"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white flex items-center justify-center text-xs">
                        👥
                      </div>
                      <div>
                        <div className="font-medium">Community</div>
                        <div className="text-sm text-gray-500">
                          Connect with students
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onMouseEnter={() => handleDropdownEnter("company")}
                  onMouseLeave={handleDropdownLeave}
                >
                  Company
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl shadow-lg py-2"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href="/mission"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white flex items-center justify-center text-xs">
                        🎯
                      </div>
                      <div className="font-medium">Our Mission</div>
                    </Link>
                    <Link
                      href="/security"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded text-white flex items-center justify-center text-xs">
                        🔒
                      </div>
                      <div className="font-medium">Security</div>
                    </Link>
                    <Link
                      href="/careers"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white flex items-center justify-center text-xs">
                        💼
                      </div>
                      <div className="font-medium">Careers</div>
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link
                href="/live-chat"
                className="text-gray-600 hidden lg:block dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Support
              </Link>
            </motion.div>

            {/* Desktop Actions */}
            <motion.div
              className="hidden md:flex items-center space-x-3"
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <SafeThemeToggle />
              {/* <Button
                variant="outline"
                className={`transition-all duration-300 ${
                  isScrolled ? "px-3 py-2 text-sm" : "px-4 py-2"
                }`}
              >
                Sign In
              </Button> */}
              <Button
                className={`bg-gradient-to-r text-white from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ${
                  isScrolled ? "px-4 py-2 text-sm" : "px-6 py-3"
                }`}
              >
                Get App
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <SafeThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-1">
                {/* Mobile Services */}
                <div className="py-2">
                  <div className="font-medium text-gray-900 dark:text-white mb-2">
                    Services
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/student-loans"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Student Loans{" "}
                      <Badge className="text-xs bg-amber-100 text-amber-800">
                        Soon
                      </Badge>
                    </Link>
                    <Link
                      href="#features"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      <DollarSign className="w-4 h-4" />
                      SEVIS Payments
                    </Link>
                    <Link
                      href="#features"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      <CreditCard className="w-4 h-4" />
                      Credit Building
                    </Link>
                    <Link
                      href="/appointments"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      <Users className="w-4 h-4" />
                      Appointments{" "}
                      <Badge className="text-xs bg-amber-100 text-amber-800">
                        Soon
                      </Badge>
                    </Link>
                  </div>
                </div>

                {/* Mobile Resources */}
                <div className="py-2">
                  <div className="font-medium text-gray-900 dark:text-white mb-2">
                    Resources
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/blog"
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/help"
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      Help Center
                    </Link>
                    <Link
                      href="/faq"
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/community"
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      Community
                    </Link>
                  </div>
                </div>

                {/* Mobile Company */}
                <div className="py-2">
                  <div className="font-medium text-gray-900 dark:text-white mb-2">
                    Company
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/mission"
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      Our Mission
                    </Link>
                    <Link
                      href="/security"
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      Security
                    </Link>
                    <Link
                      href="/careers"
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                    >
                      Careers
                    </Link>
                  </div>
                </div>

                <Link
                  href="/live-chat"
                  className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                >
                  Support
                </Link>

                {/* Mobile Actions */}
                <div className="pt-4 space-y-3">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <main>
          <section
            className="relative pt-32 pb-16 bg-[#F5F0E8] dark:bg-gray-900 light:pattern-elegant-light dark:pattern-elegant-dark"
            aria-labelledby="hero-title"
          >
            {/* <div
              className="absolute dark:hidden inset-0 z-0"
              style={{
                background:
                  "radial-gradient(125% 125% at 50% 90%, #fff 40%, #350136 100%)",
              }}
            /> */}

            {/* <div
              className="absolute dark:hidden  inset-0 z-0"
              style={{
                background:
                  "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
              }}
            /> */}

            {/* Azure Depths */}
            <div
              className="absolute hidden bg-fixed dark:block inset-0 z-0"
              style={{
                background:
                  "radial-gradient(125% 125% at 50% 100%, #000000 50%, #350136 100%)",
              }}
            />

            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 light:mesh-gradient-light dark:mesh-gradient-dark pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid relative z-10 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[500px] sm:min-h-[600px]">
                {/* Left Column - Main Hero Card */}
                <motion.div
                  className="relative col-span-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="bg-white/30  dark:bg-gray-800/20 backdrop-blur-sm dark:glass-card p-4 sm:p-6 lg:p-8 shadow-lg border-0 rounded-2xl sm:rounded-3xl dark:neon-border">
                    <CardContent className="p-0">
                      {/* Navigation dots */}
                      <div className="flex items-center gap-2 mb-6 sm:mb-8">
                        <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                          bpayco
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                        {/* Left side - Text content */}
                        <div className="space-y-6">
                          <h1
                            id="hero-title"
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                          >
                            Manage your
                            <br />
                            <span className="text-blue-600 dark:text-gradient-neon">
                              student finances
                            </span>
                            <br />
                            like never before
                          </h1>

                          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                            Simplify tuition payments, SEVIS payments and credit
                            building. The trusted choice of over 50,000
                            international students.
                          </p>

                          {/* App Store Buttons */}
                          <div className="space-y-3">
                            <div className="flex flex-col space-y-2">
                              <motion.a
                                href="#"
                                className="glass-card hover:glass-card-hover rounded-xl p-3 flex items-center space-x-3 group transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                                  {/* <span className="text-white text-xs font-bold">🤖</span> */}
                                  <Image
                                    src={"/assets/icons/googleplay.svg"}
                                    width={40}
                                    height={40}
                                    alt="Google Play"
                                  />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Get it on
                                  </p>
                                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Google Play
                                  </p>
                                </div>
                              </motion.a>
                              <motion.a
                                href="#"
                                className="glass-card hover:glass-card-hover rounded-xl p-3 flex items-center space-x-3 group transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                                  {/* <span className="text-white text-xs font-bold">📱</span> */}
                                  <Image
                                    src={"/assets/icons/appstore.svg"}
                                    width={40}
                                    height={40}
                                    alt="Google Play"
                                  />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Download on the
                                  </p>
                                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    App Store
                                  </p>
                                </div>
                              </motion.a>
                            </div>
                          </div>

                          {/* Social Proof with Avatars */}
                        </div>

                        {/* Right side - Phone mockup with hand */}
                        <div className="relative flex justify-center items-center">
                          <motion.div
                            className="relative"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {/* Hand illustration */}
                            <div className="absolute -z-[1] -bottom-1  md:-bottom-4 -left-4 w-24 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-80 transform rotate-12"></div>
                            <div className="absolute -z-[1] -top-1  md:-top-8 -right-4 w-24 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-80 transform rotate-12"></div>

                            {/* Phone */}
                            <Image
                              src={"/assets/images/mock-up-2.svg"}
                              width={4000}
                              height={4400}
                              objectFit="cover"
                              alt=""
                              className="w-64 sm:w-72 md:w-80 lg:w-96  drop-shadow-2xl"
                            />
                          </motion.div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4">
                        <div className="flex -space-x-3">
                          {/* Student Avatar Images */}
                          <div className="w-8 h-8 overflow-hidden relative sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-3 border-white dark:border-gray-800 flex items-center justify-center">
                            <Image
                              src={"/assets/images/profile-1.webp"}
                              fill
                              alt="image"
                              className="bg-cover object-cover bg-center object-center "
                            />
                          </div>
                          <div className="w-8 h-8 overflow-hidden relative sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-3 border-white dark:border-gray-800 flex items-center justify-center">
                            <Image
                              src={"/assets/images/profile-2.jpg"}
                              fill
                              alt="image"
                              className="bg-cover object-cover bg-center object-center "
                            />
                          </div>
                          <div className="w-8 h-8 overflow-hidden relative sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-3 border-white dark:border-gray-800 flex items-center justify-center">
                            <Image
                              src={"/assets/images/profile-3.jpg"}
                              fill
                              alt="image"
                              className="bg-cover object-cover bg-center object-center "
                            />
                          </div>

                          <div className="w-8 h-8 overflow-hidden relative sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-3 border-white dark:border-gray-800 flex items-center justify-center">
                            <Image
                              src={"/assets/images/profile-4.jpg"}
                              fill
                              alt="image"
                              className="bg-cover object-cover bg-center object-center "
                            />
                          </div>

                          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs sm:text-sm">
                            +50K
                          </div>
                        </div>
                        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                          <div className="font-semibold">
                            Trusted by 50,000+ students
                          </div>
                          <div className="text-xs sm:text-sm opacity-80">
                            from 150+ countries
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Right Column - Secondary Cards */}
                <div className="space-y-6 col-span-2 lg:col-span-1">
                  {/* Save Money Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Card className="bg-white/20 backdrop-blur-sm dark:bg-gray-800/40 dark:glass-card p-6 shadow-lg border-0 rounded-3xl dark:neon-glow-blue">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              Save money with
                              <br />
                              proper calculation
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Smart budgeting tools help international students
                              manage expenses and save for tuition.
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
                    <Card className="bg-white/20 backdrop-blur-sm dark:bg-gray-800/40 dark:glass-card p-6 shadow-lg border-0 rounded-3xl dark:neon-glow-cyan">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              Features that blows mind
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                              SEVIS payments, credit building, global transfers
                              - all in one powerful app.
                            </p>

                            {/* Feature highlights */}
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-gray-600 dark:text-gray-300">
                                  Instant SEVIS payments
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-gray-600 dark:text-gray-300">
                                  Credit score building
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-gray-600 dark:text-gray-300">
                                  150+ supported countries
                                </span>
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
                    <Card className="bg-gray-900/80 backdrop-blur-sm dark:bg-gray-800 dark:glass-card p-6 shadow-lg border-0 rounded-3xl text-white dark:pulse-neon">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <p className="text-sm mb-4 leading-relaxed">
                              "BPay transformed my study abroad journey! The
                              instant SEVIS payments and credit building
                              features gave me confidence in my financial
                              future."
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-sm">
                                👨🏾‍🎓
                              </div>
                              <div>
                                <div className="font-semibold text-sm">
                                  David Okafor
                                </div>
                                <div className="text-xs text-gray-400">
                                  Engineering Student, Nigeria → Germany
                                </div>
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
          <section className="relative py-20 bg-gray-50 dark:bg-gray-900  overflow-hidden">
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
                  { value: "<2h", label: "Processing Time" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
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
        <section
          className="py-20  relative dark:bg-gray-900 overflow-hidden"
          // className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 pattern-dots-overlay opacity-20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
                Trusted by thousands of{" "}
                <span className="text-blue-600 dark:text-gradient-neon block sm:inline">
                  international students
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                Real stories from students who've made their financial journey
                easier with BPay
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Computer Science Student",
                  country: "India → USA",
                  image: "👩🏽‍💻",
                  quote:
                    "BPay made my SEVIS payment so simple! I saved hours compared to traditional methods and the rates were amazing.",
                  gradient: "from-blue-500 to-purple-600",
                },
                {
                  name: "Ahmed Hassan",
                  role: "Business Student",
                  country: "Egypt → Canada",
                  image: "👨🏽‍🎓",
                  quote:
                    "Building my credit score while studying abroad seemed impossible until I found BPay. Now I'm on track for financial success!",
                  gradient: "from-green-500 to-blue-500",
                },
                {
                  name: "Maria Rodriguez",
                  role: "Medical Student",
                  country: "Mexico → UK",
                  image: "👩🏻‍⚕️",
                  quote:
                    "The instant tuition payments saved my enrollment! BPay's support team was there every step of the way.",
                  gradient: "from-pink-500 to-red-500",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative"
                >
                  <Card className="h-full p-6 bg-white dark:bg-gray-800 dark:glass-card border-0 shadow-lg hover:shadow-xl dark:hover:neon-glow-blue transition-all duration-300">
                    <CardContent className="p-0">
                      {/* Student Info */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white text-lg`}
                        >
                          {testimonial.image}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-blue-600 dark:text-blue-400">
                            {testimonial.country}
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
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
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join thousands of successful students
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:glass-button dark:neon-glow-purple px-8 py-3">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section
          id="features"
          className="relative py-20 bg-gray-50 dark:bg-gray-900"
          aria-labelledby="features-title"
        >
          <div className="absolute inset-0 pattern-dots-overlay opacity-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <header className="text-center mb-16">
              <motion.h2
                id="features-title"
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Everything you need in one app
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Comprehensive financial solutions designed specifically for
                international students
              </motion.p>
            </header>

            <motion.div
              className="relative max-w-6xl mx-auto px-8 py-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Central Image */}
              <div className="flex justify-center items-center relative">
                <Card className="overflow-hidden shadow-2xl border-0 bg-white dark:bg-gray-800 w-80 h-80 lg:w-96 lg:h-96 relative z-10">
                  <div className="relative w-full h-full">
                    <motion.div
                      key={activeFeature}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={
                          [
                            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
                            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
                            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center",
                            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=center",
                            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center",
                            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
                            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center",
                          ][activeFeature]
                        }
                        alt={
                          [
                            "SEVIS Fee Payments",
                            "Build Credit Score",
                            "Student Loans",
                            "Bank-Level Security",
                            "Global Transfers",
                            "Instant Processing",
                            "Appointment Booking",
                          ][activeFeature]
                        }
                        fill
                        className="object-cover rounded-xl"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>
                    </motion.div>

                    {/* Feature title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h3
                        key={`title-${activeFeature}`}
                        className="text-xl lg:text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {
                          [
                            "SEVIS Fee Payments",
                            "Build Credit Score",
                            "Student Loans",
                            "Bank-Level Security",
                            "Global Transfers",
                            "Instant Processing",
                            "Appointment Booking",
                          ][activeFeature]
                        }
                      </motion.h3>
                      <motion.div
                        key={`bar-${activeFeature}`}
                        className={`h-1 w-16 bg-gradient-to-r ${
                          [
                            "from-green-500 to-emerald-600",
                            "from-blue-500 to-cyan-600",
                            "from-purple-500 to-violet-600",
                            "from-orange-500 to-red-600",
                            "from-pink-500 to-rose-600",
                            "from-indigo-500 to-purple-600",
                            "from-teal-500 to-cyan-600",
                          ][activeFeature]
                        } rounded-full`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                    </div>

                    {/* Floating ring animation */}
                    <motion.div
                      className="absolute -inset-4 border-2 border-purple-500/30 rounded-xl"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </div>
                </Card>

                {/* Features arranged in circular/oval pattern */}
                {[
                  {
                    title: "SEVIS Fee Payments",
                    description:
                      "Pay your I-901 SEVIS fees instantly with zero hassle and immediate confirmation.",
                    color: "from-green-500 to-emerald-600",
                    accent: "border-green-500",
                    bgAccent: "bg-green-50 dark:bg-green-900/20",
                    icon: DollarSign,
                    position:
                      "top-6 left-1/2 -translate-x-1/2 -translate-y-full", // Top - closer
                  },
                  {
                    title: "Build Credit Score",
                    description:
                      "Establish your US credit history with everyday spending and smart financial tools.",
                    color: "from-blue-500 to-cyan-600",
                    accent: "border-blue-500",
                    bgAccent: "bg-blue-50 dark:bg-blue-900/20",
                    icon: CreditCard,
                    position:
                      "top-1/4 -right-16 translate-x-full -translate-y-1/2", // Top Right - closer
                  },
                  {
                    title: "Student Loans",
                    description:
                      "Access flexible loan options with competitive rates designed for students.",
                    color: "from-purple-500 to-violet-600",
                    accent: "border-purple-500",
                    bgAccent: "bg-purple-50 dark:bg-purple-900/20",
                    icon: GraduationCap,
                    comingSoon: true,
                    position:
                      "bottom-1/4 -right-16 translate-x-full translate-y-1/2", // Bottom Right - closer
                  },
                  {
                    title: "Bank-Level Security",
                    description:
                      "Your money and data are protected with enterprise-grade security measures.",
                    color: "from-orange-500 to-red-600",
                    accent: "border-orange-500",
                    bgAccent: "bg-orange-50 dark:bg-orange-900/20",
                    icon: Shield,
                    position:
                      "-bottom-6 left-1/2 -translate-x-1/2 translate-y-full", // Bottom - closer
                  },
                  {
                    title: "Global Transfers",
                    description:
                      "Send money worldwide with the best exchange rates and lowest fees.",
                    color: "from-pink-500 to-rose-600",
                    accent: "border-pink-500",
                    bgAccent: "bg-pink-50 dark:bg-pink-900/20",
                    icon: Globe,
                    position:
                      "bottom-1/4 -left-16 -translate-x-full translate-y-1/2", // Bottom Left - closer
                  },
                  {
                    title: "Instant Processing",
                    description:
                      "Most transactions are completed within minutes, not days.",
                    color: "from-indigo-500 to-purple-600",
                    accent: "border-indigo-500",
                    bgAccent: "bg-indigo-50 dark:bg-indigo-900/20",
                    icon: Zap,
                    position:
                      "top-1/4 -left-16 -translate-x-full -translate-y-1/2", // Top Left - closer
                  },
                  {
                    title: "Appointment Booking",
                    description:
                      "Schedule visa interviews and financial consultations with ease.",
                    color: "from-teal-500 to-cyan-600",
                    accent: "border-teal-500",
                    bgAccent: "bg-teal-50 dark:bg-teal-900/20",
                    icon: Users,
                    comingSoon: true,
                    position:
                      "top-1/2 -right-20 translate-x-full -translate-y-1/2", // Mid Right - closer
                  },
                ].map((feature, index) => (
                  <motion.button
                    key={index}
                    onMouseEnter={() => setActiveFeature(index)}
                    onClick={() => setActiveFeature(index)}
                    className={`absolute w-64 p-4 rounded-2xl transition-all duration-500 ${
                      feature.position
                    } ${
                      activeFeature === index
                        ? `${feature.bgAccent} border-2 ${feature.accent} shadow-2xl scale-110 z-20`
                        : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg z-10"
                    }`}
                    whileHover={{
                      scale: activeFeature === index ? 1.1 : 1.05,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotate: index * (360 / 7),
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {/* Active pulse effect */}
                    {activeFeature === index && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 rounded-2xl`}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            activeFeature === index
                              ? `bg-gradient-to-r ${feature.color} shadow-lg`
                              : "bg-gray-100 dark:bg-gray-700"
                          } transition-all duration-300`}
                        >
                          <feature.icon
                            className={`w-5 h-5 ${
                              activeFeature === index
                                ? "text-white"
                                : "text-gray-600 dark:text-gray-300"
                            }`}
                          />
                        </div>

                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2 mb-1">
                            <h3
                              className={`font-bold text-sm leading-tight ${
                                activeFeature === index
                                  ? "text-gray-900 dark:text-white"
                                  : "text-gray-700 dark:text-gray-200"
                              }`}
                            >
                              {feature.title}
                            </h3>
                            {feature.comingSoon && (
                              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1">
                                Soon
                              </Badge>
                            )}
                          </div>
                          <p
                            className={`text-xs leading-relaxed ${
                              activeFeature === index
                                ? "text-gray-600 dark:text-gray-300"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connecting line to center */}
                    <motion.div
                      className={`absolute w-0.5 h-8 bg-gradient-to-b ${
                        feature.color
                      } ${
                        activeFeature === index ? "opacity-60" : "opacity-20"
                      }`}
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "center top",
                        transform: `translateX(-50%) rotate(${
                          index * (360 / 7) - 90
                        }deg)`,
                      }}
                      animate={{
                        scaleY: activeFeature === index ? 1 : 0.5,
                        opacity: activeFeature === index ? 0.6 : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}

                {/* Feature indicators */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-purple-500 w-8"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
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
              viewport={{ once: true, amount: 0.3 }}
            >
              Ready to take control of your finances?
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Join thousands of international students who trust BPay for their
              financial needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
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
        <footer className="relative  dark:!bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
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
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6 relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center relative shadow-lg">
                    <Smartphone className="w-5 h-5 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400/60 rounded-full transform rotate-45"></div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    BPay
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Trusted by 50,000+ international students for SEVIS payments,
                  credit building, and financial management across the US.
                </p>

                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { name: "Twitter", icon: "🐦" },
                    { name: "LinkedIn", icon: "💼" },
                    { name: "Instagram", icon: "📷" },
                    { name: "Facebook", icon: "📘" },
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
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
                  Services
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></div>
                </h3>
                <ul className="space-y-4">
                  {[
                    { name: "SEVIS Fee Payment", link: "#features" },
                    { name: "Credit Building", link: "#features" },
                    { name: "Student Loans", link: "/student-loans" },
                    { name: "Financial Management", link: "#features" },
                    { name: "Money Transfer", link: "#features" },
                    { name: "Appointment Booking", link: "/appointments" },
                  ].map((service, index) => (
                    <li key={service.name}>
                      <motion.a
                        href={service.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transform rotate-45"></span>
                        {service.name}
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
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
                  Company
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></div>
                </h3>
                <ul className="space-y-4">
                  {[
                    { name: "About Us", link: "/mission" },
                    { name: "Our Mission", link: "/mission" },
                    { name: "Security", link: "/security" },
                    { name: "Careers", link: "/careers" },
                    { name: "Blog", link: "/blog" },
                    { name: "Press Kit", link: "/blog" },
                  ].map((item, index) => (
                    <li key={item.name}>
                      <motion.a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transform rotate-45"></span>
                        {item.name}
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
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
                  Support
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></div>
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    { name: "Help Center", link: "/help" },
                    { name: "Contact Us", link: "/help" },
                    { name: "Live Chat", link: "/live-chat" },
                    { name: "Documentation", link: "/help" },
                    { name: "FAQ", link: "/faq" },
                    { name: "Community", link: "/community" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.link}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transform rotate-45"></span>
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Download Our App
                  </p>
                  <div className="flex flex-col space-y-2">
                    <motion.a
                      href="#"
                      className="glass-card hover:glass-card-hover rounded-xl p-3 flex items-center space-x-3 group transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                        {/* <span className="text-white text-xs font-bold">🤖</span> */}
                        <Image
                          src={"/assets/icons/googleplay.svg"}
                          width={40}
                          height={40}
                          alt="Google Play"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Get it on
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Google Play
                        </p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="#"
                      className="glass-card hover:glass-card-hover rounded-xl p-3 flex items-center space-x-3 group transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                        {/* <span className="text-white text-xs font-bold">📱</span> */}
                        <Image
                          src={"/assets/icons/appstore.svg"}
                          width={40}
                          height={40}
                          alt="Google Play"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Download on the
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          App Store
                        </p>
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
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
                <div className="mb-6 lg:mb-0">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Stay Updated
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get the latest updates on new features and financial tips
                    for international students.
                  </p>
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
                    { name: "Privacy Policy", href: "/privacy" },
                    { name: "Terms of Service", href: "/terms" },
                    { name: "Cookie Policy", href: "/cookies" },
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
