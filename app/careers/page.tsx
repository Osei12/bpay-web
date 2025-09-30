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
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Star,
  ArrowRight,
  Globe,
  Coffee,
  Zap,
  Award,
} from "lucide-react";

export default function CareersPage() {
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-6">
                <Briefcase className="w-4 h-4 mr-2" />
                Join Our Team
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build the <span className="text-gradient-neon">Future</span> of FinTech
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Join BPay's mission to empower international students worldwide.
                We're looking for passionate individuals who want to make a real impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Open Roles</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 px-8 py-3">
                  View Open Positions
                  <Briefcase className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 px-8 py-3">
                  Learn About Culture
                  <Heart className="w-4 h-4 ml-2" />
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>

                {/* Floating Team Elements */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">Great Place to Work</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">Remote</div>
                    <div className="text-sm opacity-90">First Culture</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Join BPay?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're building more than just a product – we're creating a culture where innovation thrives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Impact",
                description: "Help millions of international students achieve their dreams",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Fast Growth",
                description: "Join a rapidly scaling company with endless opportunities",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Coffee,
                title: "Work-Life Balance",
                description: "Flexible schedules and unlimited PTO to recharge",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=center",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Award,
                title: "Competitive Benefits",
                description: "Health insurance, equity, and professional development budget",
                image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop&crop=center",
                color: "from-purple-500 to-violet-500",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center p-6 glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center`}>
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

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find your next career opportunity with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Senior Frontend Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time",
                salary: "$120k - $180k",
                description: "Join our frontend team to build beautiful, responsive user interfaces for our mobile and web applications.",
                requirements: ["5+ years React experience", "TypeScript proficiency", "Mobile-first design"],
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "San Francisco / Remote",
                type: "Full-time",
                salary: "$140k - $200k",
                description: "Drive product strategy and execution for our international student financial services.",
                requirements: ["3+ years PM experience", "FinTech background", "International market knowledge"],
              },
              {
                title: "Customer Success Manager",
                department: "Customer Success",
                location: "Remote",
                type: "Full-time",
                salary: "$80k - $120k",
                description: "Help our international student community succeed by providing exceptional support and guidance.",
                requirements: ["Customer-facing experience", "Multi-language skills", "Empathy for students"],
              },
              {
                title: "Data Scientist",
                department: "Data & Analytics",
                location: "Remote",
                type: "Full-time",
                salary: "$130k - $190k",
                description: "Use data to drive insights and improve our financial products for international students.",
                requirements: ["PhD or Masters in quantitative field", "Python/R expertise", "ML/AI experience"],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {job.title}
                        </h3>
                        <Badge variant="outline" className="text-purple-600 border-purple-200">
                          {job.department}
                        </Badge>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button className="w-full md:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <Button variant="outline" className="px-8 py-3">
              Send Us Your Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our team and help us build the future of financial services for international students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
                View All Positions
                <Briefcase className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
                Learn About Our Culture
                <Heart className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}