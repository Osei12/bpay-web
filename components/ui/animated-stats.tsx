"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  description: string;
  icon: string;
  gradient: string;
}

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    mass: 1
  });

  const display = useTransform(spring, (current) => {
    return prefix + Math.floor(current).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function AnimatedStat({
  value,
  suffix,
  prefix,
  duration,
  label,
  description,
  icon,
  gradient
}: AnimatedStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.8 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: Math.random() * 0.2
      }}
      className="group relative"
    >
      <div className="relative p-8 bg-white/5 dark:bg-white/5 light:bg-white/70 backdrop-blur-xl border border-white/10 dark:border-white/10 light:border-gray-200 rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white/80 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
        {/* Background Gradient Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${gradient} rounded-full opacity-20`}
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Icon */}
        <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {icon}
        </div>

        {/* Stats */}
        <div className="relative z-10">
          <div className="text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
            <AnimatedCounter value={value} suffix={suffix} prefix={prefix} duration={duration} />
          </div>
          <div className="text-lg font-semibold text-white dark:text-white light:text-gray-800 mb-2">
            {label}
          </div>
          <div className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
            {description}
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
      </div>
    </motion.div>
  );
}

export function AnimatedStatsGrid() {
  const stats = [
    {
      value: 50000,
      suffix: "+",
      label: "Happy Students",
      description: "International students trust BPay for their financial needs",
      icon: "🎓",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Uptime",
      description: "Reliable service you can count on 24/7",
      icon: "⚡",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      value: 150,
      suffix: "+",
      label: "Countries",
      description: "Global coverage for international payments",
      icon: "🌍",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      value: 2,
      suffix: "H",
      label: "Processing Time",
      description: "Average payment processing speed",
      icon: "🚀",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <AnimatedStat key={index} {...stat} />
      ))}
    </div>
  );
}