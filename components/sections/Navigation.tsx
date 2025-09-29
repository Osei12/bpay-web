'use client'

import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'
import { SafeThemeToggle } from '@/components/ui/theme-toggle-safe'

interface NavigationProps {
  isScrolled: boolean
}

export function Navigation({ isScrolled }: NavigationProps) {
  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'glass-nav hover:glass-card-hover rounded-full px-6 py-3 mx-4 max-w-sm shadow-2xl'
          : 'bg-transparent rounded-full px-6 py-4 max-w-7xl w-full'
      }`}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        borderRadius: isScrolled ? "9999px" : "24px"
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        {!isScrolled && (
          <motion.div
            className="flex items-center space-x-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              About
            </a>
          </motion.div>
        )}

        <motion.div
          className={`flex items-center space-x-2 ${isScrolled ? 'mx-auto' : ''}`}
          animate={{ scale: isScrolled ? 0.9 : 1 }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center relative">
            <Smartphone className="w-4 h-4 text-white" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400/40 transform rotate-45"></div>
          </div>
          <span className="text-lg font-bold">BPay</span>
        </motion.div>

        {!isScrolled && (
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <SafeThemeToggle />
            <a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              Download
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}