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
  Users,
  MessageCircle,
  Heart,
  Share2,
  Globe,
  Star,
  Calendar,
  ArrowRight,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";

export default function CommunityPage() {
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-pink-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6">
                <Users className="w-4 h-4 mr-2" />
                Student Community
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connect with <span className="text-gradient-neon">Fellow Students</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Join thousands of international students sharing experiences, tips, and support.
                Build meaningful connections and navigate your educational journey together.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Members</div>
                </div>
                <div className="text-center glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
                <div className="text-center glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-3">
                  Join Community
                  <Users className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 px-8 py-3">
                  Explore Posts
                  <BookOpen className="w-4 h-4 ml-2" />
                </Button>
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
                  alt="Student community"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>

                {/* Floating Community Elements */}
                <motion.div
                  className="absolute top-6 right-6 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">1.2k Online</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">Global</div>
                    <div className="text-sm opacity-90">Community</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Features */}
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
              What Makes Our Community Special
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A supportive environment where international students thrive together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Discussion Forums",
                description: "Join topic-based discussions on academics, visas, and student life",
                image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop&crop=center",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe,
                title: "Country Groups",
                description: "Connect with students from your home country or study destination",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: BookOpen,
                title: "Study Groups",
                description: "Form study groups with peers in your field or university",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: Calendar,
                title: "Events & Meetups",
                description: "Join virtual and local events to network and learn",
                image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop&crop=center",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Award,
                title: "Mentorship Program",
                description: "Get guidance from senior students and alumni",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
                color: "from-teal-500 to-cyan-500",
              },
              {
                icon: TrendingUp,
                title: "Success Stories",
                description: "Share achievements and inspire others in your journey",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=center",
                color: "from-pink-500 to-rose-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
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
              Recent Community Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what the community is talking about
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                author: "Maria Rodriguez",
                country: "Mexico → USA",
                title: "Tips for F-1 Visa Interview Success",
                preview: "Just got my visa approved! Here are the key things that helped me during my interview...",
                likes: 127,
                comments: 23,
                time: "2 hours ago",
                category: "Visa Tips",
              },
              {
                author: "Chen Wei",
                country: "China → Canada",
                title: "Building Credit as an International Student",
                preview: "After 2 years in Canada, I've learned so much about building credit. Here's what worked for me...",
                likes: 89,
                comments: 15,
                time: "5 hours ago",
                category: "Financial Tips",
              },
              {
                author: "Ahmed Hassan",
                country: "Egypt → UK",
                title: "Best Apps for Student Discounts",
                preview: "Compiled a list of apps that have saved me hundreds of pounds during my studies...",
                likes: 203,
                comments: 41,
                time: "1 day ago",
                category: "Student Life",
              },
            ].map((post, index) => (
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
                    <Badge variant="outline" className="text-purple-600 border-purple-200">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.time}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.country}</div>
                    </div>
                  </div>

                  <h3 className="font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.preview}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      Share
                    </div>
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
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-3">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow international students, share experiences, and get the support you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
                Join Community
                <Users className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}