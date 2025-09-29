"use client";

import { motion } from "framer-motion";

export function ModernPhoneMockup() {
  return (
    <div className="relative">
      {/* Slanted Geometric Shapes */}
      <motion.div
        className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-12"
        animate={{
          rotate: [12, 25, 12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform -rotate-12"
        animate={{
          rotate: [-12, -25, -12],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute top-1/3 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 transform rotate-45"
        animate={{
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          rotate: [45, 60, 45],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Phone Frame */}
      <motion.div
        className="relative z-10 w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-2 bg-white">
            <span className="text-black text-sm font-medium">9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
              <div className="w-6 h-3 border border-gray-300 rounded-sm relative">
                <div className="w-4 h-2 bg-green-500 rounded-sm absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="px-6 py-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Good morning</h3>
                <p className="text-sm text-gray-600">John Doe</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            {/* Balance Card */}
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 mb-6"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-blue-100 text-sm mb-1">Total Balance</p>
              <p className="text-white text-2xl font-bold">$12,543.32</p>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-blue-100 text-xs">+2.5% from last month</span>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <motion.div
                className="bg-yellow-50 rounded-xl p-3 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-yellow-500 rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">💳</span>
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">SEVIS</p>
                  <p className="text-gray-600 text-xs">Pay fees</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-green-50 rounded-xl p-3 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-green-500 rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">📊</span>
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">Credit</p>
                  <p className="text-gray-600 text-xs">Build score</p>
                </div>
              </motion.div>
            </div>

            {/* Recent Transactions */}
            <div>
              <h4 className="text-gray-900 font-medium mb-3">Recent Activity</h4>
              <div className="space-y-3">
                {[
                  { name: "University Payment", amount: "-$2,500", color: "bg-blue-500" },
                  { name: "Scholarship Credit", amount: "+$1,000", color: "bg-green-500" },
                  { name: "SEVIS Fee", amount: "-$350", color: "bg-purple-500" },
                ].map((transaction, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 ${transaction.color} rounded-lg mr-3`}></div>
                      <div>
                        <p className="text-gray-900 text-sm font-medium">{transaction.name}</p>
                        <p className="text-gray-600 text-xs">Today</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${
                      transaction.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {transaction.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 transform rotate-30"
        animate={{
          rotate: [30, 45, 30],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Diagonal accent line */}
      <motion.div
        className="absolute top-20 right-0 w-32 h-px bg-gradient-to-r from-transparent to-white/20 transform rotate-45 origin-right"
        animate={{
          scaleX: [0.5, 1, 0.5],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}