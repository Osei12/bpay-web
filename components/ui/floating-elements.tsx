"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className = "" }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`group relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
      {children}
    </motion.div>
  );
}

export function FloatingUIElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const floatingElements = [
    { icon: "💳", size: "w-12 h-12", gradient: "from-blue-400 to-cyan-400", top: "20%", left: "10%" },
    { icon: "📱", size: "w-10 h-10", gradient: "from-purple-400 to-pink-400", top: "40%", right: "15%" },
    { icon: "🔒", size: "w-8 h-8", gradient: "from-green-400 to-emerald-400", bottom: "30%", left: "20%" },
    { icon: "⚡", size: "w-14 h-14", gradient: "from-yellow-400 to-orange-400", top: "60%", right: "20%" },
    { icon: "🎯", size: "w-10 h-10", gradient: "from-indigo-400 to-purple-400", bottom: "20%", right: "30%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-r ${element.gradient} rounded-2xl flex items-center justify-center text-lg backdrop-blur-sm border border-white/20 shadow-lg`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.2 }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Cursor Following Element */}
      <motion.div
        className="absolute w-8 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-sm"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </div>
  );
}

export function ModernCard({
  children,
  className = "",
  hoverEffect = true
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={hoverEffect ? {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

      {/* Card Content */}
      <div className="relative bg-white/10 dark:bg-white/10 light:bg-white/80 backdrop-blur-xl border border-white/20 dark:border-white/20 light:border-gray-200 rounded-2xl overflow-hidden">
        {/* Shimmer Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}