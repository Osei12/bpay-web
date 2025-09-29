"use client";

import { motion } from "framer-motion";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <motion.div
      className={`relative mx-auto ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Phone Frame */}
      <div className="relative w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 rounded-[2rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
            <span>9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
              <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
              <div className="w-4 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 pb-4">
            {children || (
              <div className="text-center text-white pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">BPay</h3>
                <p className="text-sm text-gray-300 mb-4">Your Financial Companion</p>

                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Current Balance</span>
                      <span className="text-xs text-green-400">●</span>
                    </div>
                    <div className="text-xl font-bold">$2,450.00</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-purple-500/20 rounded-lg p-2 text-center">
                      <div className="text-xs text-purple-300">SEVIS</div>
                      <div className="text-sm font-semibold">Pay Fees</div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-2 text-center">
                      <div className="text-xs text-blue-300">LOANS</div>
                      <div className="text-sm font-semibold">Apply</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white text-sm font-bold"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✓
      </motion.div>

      <motion.div
        className="absolute top-20 -left-6 w-12 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs"
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        $$$
      </motion.div>

      <motion.div
        className="absolute bottom-20 -right-6 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        🎓
      </motion.div>
    </motion.div>
  );
}