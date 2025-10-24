"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <div className="flex space-x-4">
      {socials.map(({ name, icon: Icon, href }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-md text-white transition-all duration-300 group shadow-sm"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.a>
      ))}
    </div>
  );
}
