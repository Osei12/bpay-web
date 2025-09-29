"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureIllustrationProps {
  icon: LucideIcon;
  gradient: string;
  title: string;
  size?: "sm" | "md" | "lg";
}

export function FeatureIllustration({
  icon: Icon,
  gradient,
  title,
  size = "md"
}: FeatureIllustrationProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64"
  };

  const iconSizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} mx-auto mb-6`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Circle */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full opacity-20 blur-xl`} />

      {/* Main Circle */}
      <motion.div
        className={`relative w-full h-full bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center shadow-2xl`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className={`${iconSizes[size]} text-white`} />

        {/* Animated Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-white/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-white/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating Dots */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-3 h-3 bg-white/60 rounded-full"
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-8 left-8 w-1.5 h-1.5 bg-white/80 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />

      {/* Title */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
          {title}
        </span>
      </div>
    </motion.div>
  );
}