"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  GraduationCap,
  FileText,
  Calendar,
  Wallet,
  BookOpen,
  ChevronRight
} from "lucide-react";

interface ServiceTab {
  id: string;
  title: string;
  icon: React.ElementType;
  services: {
    title: string;
    description: string;
    icon: string;
    gradient: string;
  }[];
  description: string;
  highlight: string;
}

const serviceTabs: ServiceTab[] = [
  {
    id: "payments",
    title: "Payment Services",
    icon: DollarSign,
    description: "Fast, secure payment solutions for all your student financial needs",
    highlight: "Lightning-fast processing",
    services: [
      {
        title: "SEVIS Fee Payment",
        description: "Pay your I-901 SEVIS fees instantly",
        icon: "🏛️",
        gradient: "from-green-400 to-emerald-600"
      },
      {
        title: "Tuition & School Fees",
        description: "Direct university payment processing",
        icon: "🎓",
        gradient: "from-blue-400 to-cyan-600"
      },
      {
        title: "Application Fees",
        description: "University and exam application fees",
        icon: "📝",
        gradient: "from-purple-400 to-violet-600"
      },
      {
        title: "Housing & Living Expenses",
        description: "Accommodation and living cost payments",
        icon: "🏠",
        gradient: "from-orange-400 to-red-600"
      }
    ]
  },
  {
    id: "banking",
    title: "Banking & Credit",
    icon: Wallet,
    description: "Build your financial future with our banking solutions",
    highlight: "Credit building made easy",
    services: [
      {
        title: "Digital Wallet",
        description: "Multi-currency wallet management",
        icon: "💳",
        gradient: "from-blue-400 to-cyan-600"
      },
      {
        title: "Credit Builder",
        description: "Build credit with everyday spending",
        icon: "📈",
        gradient: "from-green-400 to-emerald-600"
      },
      {
        title: "Student Loans",
        description: "Flexible loan options for students",
        icon: "🏦",
        gradient: "from-purple-400 to-violet-600"
      },
      {
        title: "Savings Account",
        description: "High-yield savings for students",
        icon: "🐷",
        gradient: "from-pink-400 to-rose-600"
      }
    ]
  },
  {
    id: "services",
    title: "Student Services",
    icon: BookOpen,
    description: "Comprehensive support for your academic journey",
    highlight: "Everything you need in one app",
    services: [
      {
        title: "Document Management",
        description: "Secure storage and verification",
        icon: "📁",
        gradient: "from-orange-400 to-red-600"
      },
      {
        title: "Interview Booking",
        description: "Schedule visa interviews easily",
        icon: "📅",
        gradient: "from-pink-400 to-rose-600"
      },
      {
        title: "Scholarship Search",
        description: "Find and apply for scholarships",
        icon: "🎯",
        gradient: "from-indigo-400 to-purple-600"
      },
      {
        title: "Academic Resources",
        description: "Study tools and financial literacy",
        icon: "📚",
        gradient: "from-cyan-400 to-blue-600"
      }
    ]
  }
];

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("payments");
  const currentTab = serviceTabs.find(tab => tab.id === activeTab) || serviceTabs[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {serviceTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300
              ${activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }
            `}
          >
            <tab.icon className="w-5 h-5" />
            <span className="font-medium">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Services Grid */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-3 text-gradient">
              {currentTab.highlight}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {currentTab.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentTab.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`
                        w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient}
                        flex items-center justify-center text-2xl
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                          {service.title}
                        </h4>
                      </div>
                      <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
          >
            Explore All Services
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Visual Illustration */}
        <div className="relative">
          <motion.div
            className="relative mx-auto max-w-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl" />
            <Card className="relative glass-effect border-white/20 p-8">
              <CardContent className="text-center space-y-6">
                <div className="text-6xl mb-4">
                  {currentTab.services[0]?.icon || "💳"}
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {currentTab.title}
                </h4>
                <p className="text-gray-300">
                  {currentTab.description}
                </p>

                {/* Animated Progress Bars */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Processing Speed</span>
                    <span className="text-green-400">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "99%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">User Satisfaction</span>
                    <span className="text-blue-400">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-2xl">✓</span>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xl">🚀</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}