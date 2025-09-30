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
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  Users,
  FileText,
  CreditCard,
  Shield,
  Globe,
  DollarSign,
  Clock,
  ChevronRight,
  Star,
  ArrowRight,
  Headphones,
  Video,
} from "lucide-react";

const helpCategories = [
  {
    icon: CreditCard,
    title: "Payments & Transactions",
    description: "Get help with SEVIS payments, transfers, and transaction issues",
    articleCount: 24,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-cyan-500",
    topics: ["SEVIS Payment Process", "Transaction History", "Payment Methods", "Refunds & Cancellations"],
  },
  {
    icon: Shield,
    title: "Account & Security",
    description: "Account management, security settings, and verification help",
    articleCount: 18,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center",
    color: "from-green-500 to-emerald-500",
    topics: ["Account Verification", "Two-Factor Authentication", "Password Reset", "Security Settings"],
  },
  {
    icon: DollarSign,
    title: "Credit Building",
    description: "Learn about building your US credit score as an international student",
    articleCount: 15,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    color: "from-purple-500 to-violet-500",
    topics: ["Credit Score Basics", "Building Credit History", "Credit Monitoring", "Credit Cards"],
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Document upload, verification, and management assistance",
    articleCount: 12,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=center",
    color: "from-orange-500 to-red-500",
    topics: ["Document Requirements", "Upload Process", "Verification Status", "Document Security"],
  },
  {
    icon: Globe,
    title: "International Students",
    description: "Specific guidance for international students and visa requirements",
    articleCount: 21,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    color: "from-teal-500 to-cyan-500",
    topics: ["Visa Requirements", "Student Status", "Country-Specific Info", "Study Abroad Tips"],
  },
  {
    icon: Users,
    title: "General Support",
    description: "General questions, app navigation, and getting started guides",
    articleCount: 30,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center",
    color: "from-pink-500 to-rose-500",
    topics: ["Getting Started", "App Navigation", "Feature Overview", "Troubleshooting"],
  },
];

const popularArticles = [
  {
    title: "How to Pay Your SEVIS Fee in 5 Easy Steps",
    category: "SEVIS Payments",
    readTime: "3 min read",
    views: "12.4k",
    rating: 4.9,
  },
  {
    title: "Building Your US Credit Score as an International Student",
    category: "Credit Building",
    readTime: "6 min read",
    views: "8.7k",
    rating: 4.8,
  },
  {
    title: "Document Verification: What You Need to Know",
    category: "Documentation",
    readTime: "4 min read",
    views: "6.2k",
    rating: 4.7,
  },
  {
    title: "Troubleshooting Common Payment Issues",
    category: "Payments",
    readTime: "5 min read",
    views: "5.9k",
    rating: 4.6,
  },
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    availability: "Available 24/7",
    responseTime: "< 2 minutes",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    availability: "Available 24/7",
    responseTime: "< 4 hours",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support specialists",
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "< 1 minute",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Schedule a screen-sharing session for complex issues",
    availability: "By appointment",
    responseTime: "Same day",
    color: "from-orange-500 to-red-500",
  },
];

export default function HelpCenterPage() {
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
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 pattern-grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6">
                <Headphones className="w-4 h-4 mr-2" />
                Help Center
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How can we <span className="text-gradient-neon">help you</span> today?
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Find answers to your questions, get step-by-step guides, or connect with our support team.
                We're here to make your BPay experience smooth and successful.
              </p>

              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    className="w-full pl-12 pr-4 py-4 glass-card rounded-xl border-0 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <Button className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {["SEVIS Payments", "Credit Building", "Account Setup", "Security"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center"
                  alt="Customer support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

                {/* Floating Support Elements */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Satisfaction Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the help you need organized by topic and service area
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Category Image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 text-gray-800 text-xs">
                        {category.articleCount} articles
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {category.description}
                    </p>

                    {/* Popular Topics */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Popular topics:</p>
                      {category.topics.slice(0, 3).map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Most read and highest rated articles from our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{article.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {article.views} views
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the best way to reach our support team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="text-center p-6 glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{option.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{option.description}</p>
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                    <div>{option.availability}</div>
                    <div className="font-medium">Response: {option.responseTime}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Didn't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is available 24/7 to help with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Contact Support
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Browse All Articles
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}