'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ModernPhoneMockup } from '@/components/ui/modern-phone-mockup'
import { Star, Download, ArrowRight, Sparkles } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function HeroSection() {
  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&h=60&fit=crop&crop=face"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pattern-light-bg dark:pattern-dark-bg overflow-hidden">
      {/* Diagonal background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 transform rotate-12 animate-pulse"></div>

        {/* Diagonal accent lines */}
        <div className="absolute top-32 left-1/3 w-48 h-px bg-gradient-to-r from-purple-300/30 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-32 right-1/3 w-36 h-px bg-gradient-to-r from-blue-300/30 to-transparent transform -rotate-6"></div>

        {/* Small floating elements */}
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-yellow-400/60 rounded-full transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-green-400/60 rounded-full transform rotate-12 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            {...fadeInUp}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="glass-card text-sm px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50"
              >
                <Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                Trusted by 50,000+ Students
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-gray-900 dark:text-white">Financial</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent relative">
                  Freedom
                  {/* Slanted accent behind text */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-x-12 scale-110"></div>
                </span>{" "}
                <br />
                <span className="text-gray-900 dark:text-white">for International Students</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Pay SEVIS fees instantly, build your US credit score, get student loans, and manage your finances—all in one secure app.
              </motion.p>
            </div>

            {/* Social Proof */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* Avatar Stack */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, index) => (
                    <motion.img
                      key={index}
                      src={avatar}
                      alt={`Student ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    />
                  ))}
                </div>
                <div className="ml-3 text-left">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">4.9/5 from students</p>
                </div>
              </div>

              {/* Download Stats */}
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">50K+ Downloads</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="relative flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg relative overflow-hidden group"
              >
                {/* Slanted accent on hover */}
                <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-700/50 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="relative">Watch Demo</div>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-medium">Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-medium">FDIC Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <ModernPhoneMockup />

              {/* Floating Elements around Phone */}
              <motion.div
                className="absolute -top-8 -left-8 glass-card rounded-xl p-3 shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl">💳</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-8 glass-card rounded-xl p-3 shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl">🎓</div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-12 glass-card rounded-xl p-3 shadow-lg"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl">💰</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slanted bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50 dark:bg-gray-900 transform skew-y-1 origin-bottom-left"></div>
    </section>
  )
}