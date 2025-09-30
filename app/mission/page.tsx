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
  Target,
  Heart,
  Globe,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function MissionPage() {
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empowering <span className="text-gradient-neon">Dreams</span> Through Financial Access
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We believe every international student deserves equal access to financial opportunities.
                Our mission is to break down barriers and create pathways to success.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students Served</div>
                </div>
                <div className="text-center glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
                <div className="text-center glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Processed</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3">
                  Join Our Mission
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 px-8 py-3">
                  Read Our Story
                  <BookOpen className="w-4 h-4 ml-2" />
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
                  alt="International students"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

                {/* Floating Mission Elements */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">Global Impact</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">Equal</div>
                    <div className="text-sm opacity-90">Access</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Student-First",
                description: "Every decision we make starts with asking: 'How does this help international students succeed?'",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: Globe,
                title: "Global Accessibility",
                description: "Financial services should be accessible regardless of where you're from or where you're going.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Trust & Security",
                description: "We safeguard our students' financial future with the highest security standards.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We constantly innovate to create better, faster, and more intuitive financial solutions.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Users,
                title: "Community",
                description: "We build more than products – we foster a global community of successful students.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: TrendingUp,
                title: "Growth",
                description: "We help students build not just for today, but for their long-term financial success.",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop&crop=center",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center`}>
                        <value.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
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
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Measuring success through the students we've helped
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "50,000+",
                label: "Students Served",
                description: "International students who trust BPay for their financial needs",
              },
              {
                icon: Globe,
                number: "150+",
                label: "Countries Represented",
                description: "Students from around the world using our platform",
              },
              {
                icon: Award,
                number: "$50M+",
                label: "Transactions Processed",
                description: "Secure financial transactions completed successfully",
              },
              {
                icon: Star,
                number: "4.9/5",
                label: "Average Rating",
                description: "Based on thousands of student reviews and feedback",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-8 glass-card hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-3">{stat.label}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
              Our Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From personal experience to global impact
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: "2020",
                title: "The Problem We Faced",
                description: "As international students ourselves, we experienced firsthand the challenges of managing finances abroad – from paying SEVIS fees to building credit history. Traditional financial institutions didn't understand our unique needs.",
                achievements: ["Personal struggles with SEVIS payments", "Difficulty accessing credit", "Limited financial options"],
              },
              {
                year: "2021",
                title: "Building the Solution",
                description: "We started BPay with a simple mission: create financial services designed specifically for international students. Our first product helped students pay SEVIS fees quickly and securely.",
                achievements: ["Launched SEVIS payment platform", "Served first 1,000 students", "Built secure payment infrastructure"],
              },
              {
                year: "2022",
                title: "Expanding Services",
                description: "As our community grew, we expanded beyond payments to include credit building tools, helping students establish their financial future in their host countries.",
                achievements: ["Added credit building features", "Reached 10,000+ users", "Expanded to 50+ countries"],
              },
              {
                year: "2023",
                title: "Global Growth",
                description: "We became the trusted financial partner for international students worldwide, processing millions in transactions and helping thousands build their credit scores.",
                achievements: ["50,000+ students served", "150+ countries supported", "$50M+ transactions processed"],
              },
              {
                year: "2024",
                title: "The Future",
                description: "Today, we continue to innovate and expand our services, with student loans, investment options, and comprehensive financial planning tools on the horizon.",
                achievements: ["Continuous innovation", "Expanding service portfolio", "Building the future of student finance"],
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {milestone.description}
                      </p>
                      <div className="grid md:grid-cols-3 gap-3">
                        {milestone.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of a movement that's changing how international students access and manage their finances worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Learn More About Us
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}