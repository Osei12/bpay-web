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
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Award,
  Globe,
  Server,
  UserCheck,
  FileCheck,
  AlertTriangle,
  Zap,
  Clock,
  Users,
  ArrowRight,
  Download,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const securityFeatures = [
  {
    icon: Shield,
    title: "Bank-Level Encryption",
    description: "All data is protected with AES-256 encryption, the same standard used by major banks worldwide.",
    details: "256-bit SSL encryption ensures your personal and financial information remains secure during transmission.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    description: "Advanced authentication protocols including biometric verification and SMS codes.",
    details: "Multiple layers of security verification protect your account from unauthorized access.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: Server,
    title: "Secure Data Centers",
    description: "Your data is stored in SOC 2 Type II certified data centers with 24/7 monitoring.",
    details: "Enterprise-grade infrastructure with redundant systems and continuous security monitoring.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: UserCheck,
    title: "Identity Verification",
    description: "Comprehensive KYC (Know Your Customer) processes ensure account authenticity.",
    details: "Advanced identity verification using government-issued documents and biometric matching.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: FileCheck,
    title: "Compliance Standards",
    description: "Full compliance with GDPR, PCI DSS, and other international security standards.",
    details: "Regular audits and certifications ensure we meet the highest security and privacy standards.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "AI-powered fraud detection monitors transactions 24/7 for suspicious activity.",
    details: "Machine learning algorithms analyze patterns to detect and prevent fraudulent activities instantly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "GDPR Compliant",
    description: "General Data Protection Regulation",
    icon: Globe,
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
  },
];

const securityStats = [
  { value: "99.99%", label: "Uptime Guarantee", icon: Clock },
  { value: "256-bit", label: "SSL Encryption", icon: Lock },
  { value: "24/7", label: "Security Monitoring", icon: Eye },
  { value: "0", label: "Security Breaches", icon: Shield },
];

export default function SecurityPage() {
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid-overlay opacity-10"></div>

        {/* Floating Security Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield className="w-8 h-8 text-blue-500" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center"
            animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Lock className="w-6 h-6 text-purple-500" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4 w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center"
            animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <CheckCircle className="w-7 h-7 text-green-500" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Security
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your <span className="text-gradient-neon">Security</span> is Our Priority
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We implement bank-level security measures to protect your financial data and personal information.
                Your trust is our foundation, and security is our commitment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3">
                  View Security Certificates
                  <Award className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 px-8 py-3">
                  Download Security Report
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Security Stats */}
              <div className="grid grid-cols-2 gap-6">
                {securityStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-4 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center"
                  alt="Security and Protection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

                {/* Floating Security Elements */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Secure Connection</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">256-bit</div>
                    <div className="text-sm opacity-90">SSL Encryption</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Security Measures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every layer of our platform is designed with security in mind, from data encryption to user authentication
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Feature Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industry Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We maintain the highest security standards through rigorous certifications and regular audits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center p-8 glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Promise */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Security Promise
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              We pledge to maintain the highest security standards, protect your data with unwavering vigilance,
              and continuously evolve our security measures to stay ahead of emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Read Security Policy
                <FileCheck className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Contact Security Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keeping Your Account Safe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple steps you can take to enhance your account security
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: Lock,
                title: "Use Strong Passwords",
                description: "Create unique, complex passwords and enable two-factor authentication for added security.",
              },
              {
                icon: Eye,
                title: "Monitor Account Activity",
                description: "Regularly review your account activity and report any suspicious transactions immediately.",
              },
              {
                icon: AlertTriangle,
                title: "Beware of Phishing",
                description: "Never share your login credentials via email or phone. BPay will never ask for your password.",
              },
              {
                icon: Zap,
                title: "Keep Apps Updated",
                description: "Always use the latest version of the BPay app to ensure you have the most recent security features.",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}