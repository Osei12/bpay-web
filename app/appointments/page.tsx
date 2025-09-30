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
  Calendar,
  Clock,
  Users,
  Video,
  MapPin,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
  FileText,
  Globe,
  Shield,
  Star,
  ArrowRight,
  Bell,
} from "lucide-react";

export default function AppointmentsPage() {
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
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-blue-900/20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-teal-500 to-blue-500 text-white mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Appointment Booking
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Schedule Your <span className="text-gradient-neon">Consultations</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Book visa interviews, financial consultations, and support sessions with our expert team.
                Get personalized guidance for your international student journey.
              </p>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Coming Soon</h3>
                    <p className="text-amber-700 dark:text-amber-300 text-sm">
                      Our appointment booking system is currently being developed. Join our waitlist to be notified when it's available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 px-8 py-3">
                  Get Notified
                  <Bell className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 px-8 py-3">
                  Contact Support
                  <MessageCircle className="w-4 h-4 ml-2" />
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
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center"
                  alt="Professional consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available 24/7</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">15min</div>
                    <div className="text-sm opacity-90">Quick Setup</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Types */}
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
              Available Consultation Types
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from various consultation options tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Visa Consultation",
                description: "Expert guidance on visa applications and requirements",
                duration: "45 minutes",
                price: "Free",
                features: ["Document review", "Application guidance", "Q&A session"],
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Financial Planning",
                description: "Personalized financial planning for your education",
                duration: "60 minutes",
                price: "$50",
                features: ["Budget planning", "Loan guidance", "Investment advice"],
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: MessageCircle,
                title: "General Support",
                description: "Get help with any questions about our services",
                duration: "30 minutes",
                price: "Free",
                features: ["Platform guidance", "Account help", "General Q&A"],
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
                color: "from-purple-500 to-violet-500",
              },
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${type.color} rounded-full text-white text-sm font-medium`}>
                      {type.price}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>
                        <type.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{type.title}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {type.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>

                    <div className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full" disabled>
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Appointment Booking Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple steps to schedule your consultation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Choose Service",
                description: "Select the type of consultation you need",
                icon: Users,
              },
              {
                step: 2,
                title: "Pick Time",
                description: "Choose from available time slots",
                icon: Calendar,
              },
              {
                step: 3,
                title: "Confirm Booking",
                description: "Complete your appointment booking",
                icon: CheckCircle,
              },
              {
                step: 4,
                title: "Meet Expert",
                description: "Join your scheduled consultation",
                icon: Video,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-2 border-teal-500">
                    <span className="text-sm font-bold text-teal-500">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get Expert Guidance When You Need It
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our team of experts is ready to help you navigate your international student journey with personalized consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3">
                Join Waitlist
                <Bell className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3">
                Contact Us
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}