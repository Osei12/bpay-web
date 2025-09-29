"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, Users, TrendingUp, Award } from "lucide-react";

const trustStats = [
  {
    number: "10K+",
    label: "Students Served",
    icon: Users,
    description: "Happy international students on BPay",
    gradient: "from-blue-400 to-cyan-600"
  },
  {
    number: "1,500+",
    label: "5-Star Reviews",
    icon: Star,
    description: "5-star review for speed and reliability",
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    number: "2H",
    label: "Processing Time",
    icon: Clock,
    description: "Average payment processing time on BPay",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    number: "99.9%",
    label: "Uptime",
    icon: Shield,
    description: "Reliable service you can count on",
    gradient: "from-purple-400 to-violet-600"
  }
];

const backedBy = [
  { name: "Techstars", logo: "🚀" },
  { name: "Y Combinator", logo: "🔥" },
  { name: "Stripe", logo: "💳" },
  { name: "Paystack", logo: "💰" },
  { name: "Western Union", logo: "🌍" },
  { name: "Visa", logo: "💎" }
];

const complianceLogos = [
  { name: "PCI DSS", icon: Shield, description: "Payment Card Industry Compliant" },
  { name: "SOC 2", icon: Award, description: "Security & Availability Certified" },
  { name: "GDPR", icon: Shield, description: "Data Protection Compliant" },
  { name: "256-bit SSL", icon: Shield, description: "Bank-Level Encryption" }
];

export function TrustIndicators() {
  return (
    <div className="space-y-16">
      {/* News Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Card className="inline-block glass-effect border-white/20 hover:border-purple-500/30 transition-all duration-300">
          <CardContent className="px-6 py-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                Latest
              </Badge>
              <span className="text-white">BPay partners with major universities for seamless payments</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Trust Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {trustStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Card className="glass-effect border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full group-hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`
                  w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${stat.gradient}
                  flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                `}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Backed By Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-8"
      >
        <div>
          <p className="text-gray-400 mb-4">Backed by</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {backedBy.map((investor, index) => (
              <motion.div
                key={investor.name}
                className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">{investor.logo}</span>
                <span className="text-gray-300 font-medium">{investor.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Compliance & Security */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Safe, Secure, & Compliant</h3>
          <p className="text-gray-400">Bank-level security and compliance standards</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceLogos.map((compliance, index) => (
            <motion.div
              key={compliance.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-white/10 hover:border-green-500/30 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <compliance.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">
                      {compliance.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {compliance.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Proof Avatars */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-6"
      >
        <div className="flex -space-x-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-white font-bold"
              whileHover={{ scale: 1.1, zIndex: 10 }}
              style={{ zIndex: 5 - i }}
            >
              {['🎓', '👨‍🎓', '👩‍🔬', '👨‍💼', '👩‍🎓'][i]}
            </motion.div>
          ))}
        </div>
        <div className="text-left">
          <div className="text-white font-semibold">Trusted by 10K+ Students</div>
          <div className="text-gray-400 text-sm">Join thousands of successful students</div>
        </div>
      </motion.div>
    </div>
  );
}