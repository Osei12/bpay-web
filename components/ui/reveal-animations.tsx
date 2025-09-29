"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = ""
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
        scale: 0.8
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      } : {
        opacity: 0,
        ...directions[direction],
        scale: 0.8
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredReveal({
  children,
  staggerDelay = 0.1,
  className = ""
}: {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function TypewriterText({
  text,
  delay = 0,
  speed = 0.05,
  className = ""
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            delay: delay + index * speed,
            duration: 0.1
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function CounterAnimation({
  value,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  className = ""
}: {
  value: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      <motion.span
        initial={{ textContent: "0" }}
        animate={isInView ? { textContent: value.toString() } : { textContent: "0" }}
        transition={{
          delay: delay + 0.5,
          duration,
          ease: "easeOut"
        }}
      >
        {prefix}0{suffix}
      </motion.span>
    </motion.div>
  );
}

export function MorphingShape() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="absolute inset-0"
      >
        <motion.path
          d="M200,50 Q350,100 350,200 Q350,300 200,350 Q50,300 50,200 Q50,100 200,50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          opacity="0.3"
          animate={{
            d: [
              "M200,50 Q350,100 350,200 Q350,300 200,350 Q50,300 50,200 Q50,100 200,50",
              "M200,80 Q320,120 320,200 Q320,280 200,320 Q80,280 80,200 Q80,120 200,80",
              "M200,50 Q350,100 350,200 Q350,300 200,350 Q50,300 50,200 Q50,100 200,50"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}