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
  GraduationCap,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  FileText,
  Calculator,
  Shield,
  TrendingDown,
  Users,
  Globe,
  AlertCircle,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Target,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const loanTypes = [
  {
    title: "Undergraduate Loans",
    description: "Flexible funding options for bachelor's degree programs",
    maxAmount: "$50,000",
    interestRate: "From 3.5%",
    repaymentTerm: "Up to 15 years",
    features: ["No co-signer required", "Grace period available", "Flexible repayment"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=center",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Graduate Loans",
    description: "Advanced funding for master's and doctoral programs",
    maxAmount: "$100,000",
    interestRate: "From 4.2%",
    repaymentTerm: "Up to 20 years",
    features: ["Higher loan limits", "Research funding", "Career-based repayment"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Professional Loans",
    description: "Specialized funding for medical, law, and business schools",
    maxAmount: "$200,000",
    interestRate: "From 5.0%",
    repaymentTerm: "Up to 25 years",
    features: ["Specialized programs", "Residency deferrals", "Income-driven options"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    color: "from-green-500 to-emerald-500",
  },
];

const loanBenefits = [
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Industry-leading interest rates starting from 3.5% APR",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get approved in as little as 24 hours with our streamlined process",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "Transparent pricing with no origination or prepayment penalties",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: TrendingDown,
    title: "Flexible Repayment",
    description: "Choose from multiple repayment options that fit your budget",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop&crop=center",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Verify you meet our basic requirements for international students",
    details: "Must be enrolled in an eligible program, have valid student status, and meet academic requirements.",
  },
  {
    step: 2,
    title: "Gather Documents",
    description: "Collect required documents including transcripts and financial statements",
    details: "Academic transcripts, enrollment verification, passport, and financial documentation required.",
  },
  {
    step: 3,
    title: "Complete Application",
    description: "Fill out our online application form with personal and academic information",
    details: "Comprehensive application takes 15-20 minutes to complete with all required information.",
  },
  {
    step: 4,
    title: "Review & Approval",
    description: "Our team reviews your application and provides a decision within 24-48 hours",
    details: "Automated review process with human oversight ensures quick and accurate decisions.",
  },
];

const testimonials = [
  {
    name: "Maria Rodriguez",
    program: "MBA Student",
    university: "Stanford University",
    country: "Mexico",
    quote: "BPay's student loan made my MBA dream possible. The application was straightforward and the rates were better than anywhere else I looked.",
    rating: 5,
    image: "👩🏻‍🎓",
  },
  {
    name: "Chen Wei",
    program: "PhD Computer Science",
    university: "MIT",
    country: "China",
    quote: "As an international student, finding loans was challenging. BPay understood my situation and provided excellent support throughout the process.",
    rating: 5,
    image: "👨🏻‍💻",
  },
  {
    name: "Raj Patel",
    program: "Medical Student",
    university: "Harvard Medical School",
    country: "India",
    quote: "The flexible repayment options and competitive rates made BPay the obvious choice for financing my medical education.",
    rating: 5,
    image: "👨🏽‍⚕️",
  },
];

export default function StudentLoansPage() {
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

      {/* Coming Soon Banner */}
      <motion.div
        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 glass-nav rounded-full px-6 py-2 mx-4 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Coming Soon</span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-10"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <GraduationCap className="w-8 h-8 text-green-500" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center"
            animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <DollarSign className="w-6 h-6 text-blue-500" />
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
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white mb-6">
                <GraduationCap className="w-4 h-4 mr-2" />
                Student Financing
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fund Your <span className="text-gradient-neon">Education Dreams</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Competitive student loans designed specifically for international students.
                Quick approval, flexible terms, and competitive rates to help you achieve your academic goals.
              </p>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Coming Soon</h3>
                    <p className="text-amber-700 dark:text-amber-300 text-sm">
                      Our student loan program is currently in development. Join our waitlist to be notified when applications open.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-3">
                  Join Waitlist
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 px-8 py-3">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center"
                  alt="Students studying"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">3.5%</div>
                    <div className="text-sm opacity-90">Starting APR</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm opacity-90">Quick Approval</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Types */}
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
              Loan Options for Every Program
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're pursuing undergraduate, graduate, or professional studies, we have tailored loan options
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={loan.image}
                      alt={loan.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${loan.color} rounded-full text-white text-sm font-medium`}>
                      {loan.title}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{loan.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{loan.description}</p>

                    {/* Loan Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Max Amount:</span>
                        <span className="font-semibold">{loan.maxAmount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                        <span className="font-semibold">{loan.interestRate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Repayment:</span>
                        <span className="font-semibold">{loan.repaymentTerm}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {loan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Choose BPay Student Loans?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges international students face and have designed our loans accordingly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center p-6 glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Simple Application Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get approved in just 4 easy steps
            </p>
          </motion.div>

          <div className="space-y-8">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{step.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{step.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from students who funded their education with BPay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 glass-card hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white text-lg">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.program}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.university}</p>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Fund Your Future?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our waitlist today and be among the first to access our competitive student loan program when it launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Join Waitlist
                <Mail className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
                Contact Us
                <Phone className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}