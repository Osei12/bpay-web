"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { FeatureIllustration } from "@/components/ui/feature-illustration";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { ServiceTabs } from "@/components/ui/service-tabs";
import { TrustIndicators } from "@/components/ui/trust-indicators";
import { FAQSection } from "@/components/ui/faq-section";
import { SafeThemeToggle } from "@/components/ui/theme-toggle-safe";
import { AnimatedStatsGrid } from "@/components/ui/animated-stats";
import { FloatingUIElements, ModernCard } from "@/components/ui/floating-elements";
import { Reveal, StaggeredReveal, TypewriterText } from "@/components/ui/reveal-animations";
import {
  Smartphone,
  DollarSign,
  GraduationCap,
  Shield,
  Calendar,
  BookOpen,
  Wallet,
  FileText,
  Star,
  Download,
  ChevronRight,
  CheckCircle,
  Zap,
  Globe,
  Users,
  ArrowRight,
  Play,
  Menu,
  X,
  CreditCard,
  Lock,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Eye,
  EyeOff
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    icon: DollarSign,
    title: "SEVIS Fee Payments",
    description: "Pay your I-901 SEVIS fees securely and instantly with multiple payment options and real-time confirmation.",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Manage your finances with our secure digital wallet supporting GHS and USD currencies.",
    gradient: "from-blue-400 to-cyan-600"
  },
  {
    icon: GraduationCap,
    title: "Student Loans",
    description: "Apply for student loans with streamlined processes and track loan status with ease.",
    gradient: "from-purple-400 to-violet-600"
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Securely store and manage important documents with KYC verification and document scanning.",
    gradient: "from-orange-400 to-red-600"
  },
  {
    icon: Calendar,
    title: "Interview Booking",
    description: "Schedule visa interview appointments easily with automated reminders and calendar integration.",
    gradient: "from-pink-400 to-rose-600"
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access scholarship information, educational quizzes, and financial literacy resources.",
    gradient: "from-indigo-400 to-purple-600"
  }
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Graduate Student",
    content: "BPay made paying my SEVIS fee so much easier. The whole process was done in minutes!",
    rating: 5,
    avatar: "🎓"
  },
  {
    name: "Michael O.",
    role: "International Student",
    content: "Finally, a financial app that understands student needs. The loan application was straightforward.",
    rating: 5,
    avatar: "👨‍🎓"
  },
  {
    name: "Priya S.",
    role: "PhD Student",
    content: "The document management feature saved me during my visa interview. Everything was organized perfectly.",
    rating: 5,
    avatar: "👩‍🔬"
  }
];

const stats = [
  { number: "10K+", label: "Students Served" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
  { number: "256-bit", label: "Encryption" }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 light:from-blue-50 light:via-purple-50 light:to-pink-50 text-white dark:text-white light:text-gray-900 overflow-hidden transition-colors duration-500">
      {/* Floating UI Elements */}
      <FloatingUIElements />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-300/30 rounded-full blur-3xl will-change-transform"
          style={{
            transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`,
            left: '10%',
            top: '20%',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-80 h-80 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-300/30 rounded-full blur-3xl will-change-transform"
          style={{
            transform: `translate3d(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px, 0)`,
            right: '10%',
            top: '60%',
            animation: 'float 8s ease-in-out infinite 2s'
          }}
        />
        <div
          className="absolute w-64 h-64 bg-pink-500/20 dark:bg-pink-500/20 light:bg-pink-300/30 rounded-full blur-3xl will-change-transform"
          style={{
            transform: `translate3d(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px, 0)`,
            left: '50%',
            bottom: '20%',
            animation: 'float 8s ease-in-out infinite 4s'
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-2 px-6'
            : 'py-4 px-6'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? 'max-w-4xl bg-black/80 dark:bg-black/80 light:bg-white/90 backdrop-blur-xl border border-white/20 dark:border-white/20 light:border-black/10 rounded-full px-6 py-3 shadow-2xl'
              : 'max-w-7xl bg-transparent'
          }`}
          animate={{
            scale: isScrolled ? 0.95 : 1,
            y: isScrolled ? 5 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: isScrolled ? 0.9 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`${isScrolled ? 'w-8 h-8' : 'w-10 h-10'} bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300`}>
              <Smartphone className={`${isScrolled ? 'w-4 h-4' : 'w-6 h-6'} text-white transition-all duration-300`} />
            </div>
            <span className={`${isScrolled ? 'text-lg' : 'text-2xl'} font-bold font-poppins transition-all duration-300 text-white dark:text-white light:text-gray-900`}>BPay</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-6' : 'space-x-8'}`}>
            {["Features", "Security", "Testimonials", "FAQ"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-3' : 'space-x-4'}`}>
            <SafeThemeToggle />
            <Button
              variant="ghost"
              className={`text-white dark:text-white light:text-gray-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300 ${isScrolled ? 'text-sm px-3 py-1 h-8' : 'px-4 py-2'}`}
            >
              Sign In
            </Button>
            <Button
              className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ${isScrolled ? 'text-sm px-3 py-1 h-8' : 'px-4 py-2'}`}
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <SafeThemeToggle />
            <button
              className="text-white dark:text-white light:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className={`md:hidden absolute left-4 right-4 top-full mt-2 bg-black/90 dark:bg-black/90 light:bg-white/95 backdrop-blur-lg border border-white/20 dark:border-white/20 light:border-black/10 rounded-2xl overflow-hidden ${isScrolled ? 'rounded-2xl' : 'rounded-lg'}`}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 space-y-4">
              {["Features", "Security", "Testimonials", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                <Button variant="ghost" className="w-full text-white dark:text-white light:text-gray-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Trust Indicators Section */}
      <section className="relative z-10 px-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <TrustIndicators />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <Reveal direction="up" delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
                  Global Payments & Banking That
                  <TypewriterText
                    text="Builds Credit"
                    delay={1}
                    className="block text-gradient animated-gradient"
                  />
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed max-w-lg">
                  The BPay App makes it simple for international students to pay for tuition and fees globally, build credit with everyday spending, and access AI-powered study abroad tools.
                </p>
              </Reveal>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg glow-purple group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download App
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-6 pt-6"
              >
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-sm"
                    >
                      {['🎓', '👨‍🎓', '👩‍🔬', '👨‍💼', '👩‍🎓'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold">Trusted by 10K+ Students</div>
                  <div className="text-gray-400 text-sm">Worldwide</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InteractiveCard>
                <PhoneMockup className="scale-110" />
              </InteractiveCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
                Trusted by Students
                <span className="block text-gradient">Worldwide</span>
              </h2>
              <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600">
                Join thousands of international students who trust BPay
              </p>
            </div>
          </Reveal>

          <AnimatedStatsGrid />
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Everything You Need for
              <span className="block text-gradient">Student Financial Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial services designed specifically for international students
            </p>
          </motion.div>

          <ServiceTabs />
        </div>
      </section>


      {/* How It Works Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Get Started in
              <span className="text-gradient"> 3 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of students who have simplified their financial journey with BPay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30" />

            {[
              {
                step: "01",
                title: "Download & Register",
                description: "Download BPay and create your secure account with KYC verification in minutes",
                icon: Download,
                visual: (
                  <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <motion.div
                      className="text-4xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      📱
                    </motion.div>
                  </div>
                )
              },
              {
                step: "02",
                title: "Add Payment Methods",
                description: "Securely link your bank account or cards and set up your digital wallet",
                icon: CreditCard,
                visual: (
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <motion.div
                      className="grid grid-cols-2 gap-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-8 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-8 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded"></div>
                      <div className="w-8 h-5 bg-gradient-to-r from-purple-400 to-purple-600 rounded"></div>
                      <div className="w-8 h-5 bg-gradient-to-r from-pink-400 to-pink-600 rounded"></div>
                    </motion.div>
                  </div>
                )
              },
              {
                step: "03",
                title: "Start Managing Finances",
                description: "Pay SEVIS fees, apply for loans, book interviews, and access all student services",
                icon: Zap,
                visual: (
                  <div className="w-full h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-4xl"
                    >
                      🎯
                    </motion.div>
                  </div>
                )
              }
            ].map((item, index) => (
              <Reveal key={index} direction="up" delay={index * 0.2}>
                <ModernCard>
                  <div className="p-8 text-center space-y-6">
                    <div className="relative">
                      <FeatureIllustration
                        icon={item.icon}
                        gradient="from-purple-500 to-pink-500"
                        title=""
                        size="sm"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {item.step}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-white dark:text-white light:text-gray-900">{item.title}</h3>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">{item.description}</p>
                    </div>

                    {item.visual}
                  </div>
                </ModernCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
                Bank-Level Security
                <span className="block text-gradient">You Can Trust</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your financial data and transactions are protected with industry-leading security measures
              </p>

              <div className="space-y-4">
                {[
                  "End-to-end encryption for all transactions",
                  "Biometric authentication (Face ID/Fingerprint)",
                  "Secure document storage with access controls",
                  "PCI DSS compliant payment processing",
                  "Multi-factor authentication support"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-white/10 p-8">
                <CardContent>
                  <div className="text-center">
                    <Shield className="w-24 h-24 mx-auto mb-6 text-green-400" />
                    <h3 className="text-2xl font-semibold mb-4">Your Data is Safe</h3>
                    <p className="text-gray-400 mb-6">
                      We use the same security standards as major banks to protect your information
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/5 rounded-lg p-3">
                        <Globe className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                        <div>SSL Secured</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <Shield className="w-6 h-6 mx-auto mb-2 text-green-400" />
                        <div>256-bit Encryption</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
              Loved by Students
              <span className="block text-gradient">Worldwide</span>
            </h2>
            <p className="text-xl text-gray-300">
              See what students are saying about BPay
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-effect border-white/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Frequently Asked
              <span className="block text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get quick answers to common questions about BPay's services and features
            </p>
          </motion.div>

          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Ready to Take Control of Your
              <span className="block text-gradient">Student Finances?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students already using BPay to manage their financial needs
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg glow-purple"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>

            <p className="text-gray-400 text-sm">
              Available on iOS and Android • Free to download
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-poppins">BPay</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your complete financial companion for students. Secure, reliable, and designed with students in mind.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div><a href="#features" className="hover:text-white transition-colors">Features</a></div>
                <div><a href="#security" className="hover:text-white transition-colors">Security</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Pricing</a></div>
                <div><a href="#" className="hover:text-white transition-colors">FAQ</a></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div><a href="#" className="hover:text-white transition-colors">Help Center</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Contact Us</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Terms of Service</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div><a href="#" className="hover:text-white transition-colors">Twitter</a></div>
                <div><a href="#" className="hover:text-white transition-colors">LinkedIn</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Facebook</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Instagram</a></div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 BPay. All rights reserved. Built with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}