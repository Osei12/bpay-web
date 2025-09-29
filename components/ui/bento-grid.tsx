"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  className?: string;
}

export function BentoCard({
  title,
  description,
  icon: Icon,
  gradient,
  size = "medium",
  children,
  className = ""
}: BentoCardProps) {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1",
    large: "col-span-1 md:col-span-2 lg:col-span-3 row-span-2"
  };

  return (
    <motion.div
      className={`
        relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10
        border border-white/10 backdrop-blur-sm overflow-hidden group
        hover:from-white/10 hover:to-white/20 hover:border-white/20
        transition-all duration-500 ${sizeClasses[size]} ${className}
      `}
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Background Gradient Blob */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {children && (
          <div className="flex-1 flex items-end">
            {children}
          </div>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
    </motion.div>
  );
}

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr ${className}`}>
      {children}
    </div>
  );
}