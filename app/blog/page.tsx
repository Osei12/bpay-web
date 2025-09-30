"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeThemeToggle } from "@/components/ui/theme-toggle-safe";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  DollarSign,
  CreditCard,
  Globe,
  Star,
  Eye,
  MessageCircle,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const blogPosts = [
  {
    id: 1,
    title: "Mastering SEVIS Fee Payments: A Complete Guide for International Students",
    excerpt: "Everything you need to know about paying your I-901 SEVIS fee efficiently and avoiding common pitfalls.",
    author: "Sarah Chen",
    authorRole: "Student Financial Advisor",
    publishDate: "Nov 28, 2024",
    readTime: "8 min read",
    category: "SEVIS Payments",
    featured: true,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center",
    views: "2.4k",
    comments: 42,
    tags: ["SEVIS", "Student Visa", "Payments", "Guide"],
  },
  {
    id: 2,
    title: "Building Credit Score as an International Student: 5 Proven Strategies",
    excerpt: "Learn how to establish and build your US credit history from day one of your arrival.",
    author: "Michael Rodriguez",
    authorRole: "Credit Building Expert",
    publishDate: "Nov 25, 2024",
    readTime: "6 min read",
    category: "Credit Building",
    featured: false,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
    views: "1.8k",
    comments: 28,
    tags: ["Credit Score", "Financial Planning", "Students"],
  },
  {
    id: 3,
    title: "Student Loan Options for International Students in 2024",
    excerpt: "Comprehensive overview of available loan programs, eligibility requirements, and application tips.",
    author: "Dr. Jennifer Park",
    authorRole: "Education Finance Specialist",
    publishDate: "Nov 22, 2024",
    readTime: "10 min read",
    category: "Student Loans",
    featured: false,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center",
    views: "3.1k",
    comments: 65,
    tags: ["Student Loans", "Financial Aid", "Education"],
  },
  {
    id: 4,
    title: "Managing Multi-Currency Finances: Tips for Global Students",
    excerpt: "Smart strategies for handling finances across different currencies and countries.",
    author: "Alex Kumar",
    authorRole: "International Finance Advisor",
    publishDate: "Nov 20, 2024",
    readTime: "7 min read",
    category: "Money Management",
    featured: false,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center",
    views: "1.5k",
    comments: 19,
    tags: ["Currency", "International", "Finance"],
  },
  {
    id: 5,
    title: "Top 10 Financial Mistakes International Students Make (And How to Avoid Them)",
    excerpt: "Common financial pitfalls and practical advice to keep your finances on track while studying abroad.",
    author: "Lisa Thompson",
    authorRole: "Student Success Coordinator",
    publishDate: "Nov 18, 2024",
    readTime: "9 min read",
    category: "Financial Tips",
    featured: false,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop&crop=center",
    views: "2.7k",
    comments: 51,
    tags: ["Tips", "Common Mistakes", "Student Life"],
  },
  {
    id: 6,
    title: "Scholarship Opportunities for International Students: Hidden Gems",
    excerpt: "Discover lesser-known scholarship programs that can significantly reduce your education costs.",
    author: "David Williams",
    authorRole: "Scholarship Research Specialist",
    publishDate: "Nov 15, 2024",
    readTime: "12 min read",
    category: "Scholarships",
    featured: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
    views: "4.2k",
    comments: 87,
    tags: ["Scholarships", "Financial Aid", "Education"],
  },
];

const categories = [
  "All Posts",
  "SEVIS Payments",
  "Credit Building",
  "Student Loans",
  "Money Management",
  "Financial Tips",
  "Scholarships",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glass-nav rounded-full px-6 py-3 mx-4 max-w-sm shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">Home</span>
          </Link>
          <SafeThemeToggle />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="absolute inset-0 pattern-dots-overlay opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              BPay <span className="text-gradient-neon">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Financial insights, tips, and guides crafted specifically for international students navigating their educational journey
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 group">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      Featured
                    </Badge>
                  </div>

                  {/* Content Side */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="text-purple-600 border-purple-200">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredPost.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {featuredPost.comments}
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{featuredPost.author}</div>
                          <div className="text-sm text-gray-500">{featuredPost.authorRole}</div>
                        </div>
                      </div>

                      <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.publishDate}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden glass-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.authorRole}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.publishDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <Button size="sm" variant="outline" className="group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all">
                        Read
                      </Button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-3">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Never Miss a Financial Tip
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get weekly insights, tips, and guides delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-xl">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}