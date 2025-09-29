'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, CreditCard, Shield, Users, CheckCircle, Star, Target, BarChart3, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CreditBuildingPage() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Build Credit Fast",
      description: "Start building your US credit history from day one with our secured credit card and reporting services."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Credit Monitoring",
      description: "Track your credit score and receive alerts about changes to your credit report."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Goals",
      description: "Set and achieve credit goals with our AI-powered recommendations and guidance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Safe",
      description: "Bank-level security with fraud protection and identity monitoring included."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Approval",
      description: "Get approved in minutes without SSN history requirements for international students."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no annual fees, foreign transaction fees, or surprise charges."
    }
  ]

  const steps = [
    {
      step: "1",
      title: "Apply Online",
      description: "Complete our simple application with your student visa and school information."
    },
    {
      step: "2",
      title: "Get Approved",
      description: "Receive instant approval decision without requiring US credit history."
    },
    {
      step: "3",
      title: "Make Purchases",
      description: "Use your secured credit card for everyday purchases and bill payments."
    },
    {
      step: "4",
      title: "Build Credit",
      description: "We report your payment history to all three major credit bureaus monthly."
    }
  ]

  const benefits = [
    {
      icon: "📈",
      title: "Increase Credit Score",
      description: "Students see an average 40-point increase in their credit score within 6 months."
    },
    {
      icon: "🏠",
      title: "Qualify for Loans",
      description: "Build credit to qualify for auto loans, apartments, and future mortgages."
    },
    {
      icon: "💳",
      title: "Better Credit Cards",
      description: "Graduate to premium credit cards with rewards and higher limits."
    },
    {
      icon: "💼",
      title: "Employment Benefits",
      description: "Many employers check credit history as part of background verification."
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "India",
      university: "Stanford University",
      score: "720",
      months: "8",
      text: "BPay helped me build my credit from scratch. Now I qualify for student loans and got approved for an apartment!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Chen Wei",
      country: "China",
      university: "MIT",
      score: "690",
      months: "6",
      text: "Amazing service! I went from no credit history to a 690 credit score in just 6 months. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      country: "Mexico",
      university: "UCLA",
      score: "705",
      months: "10",
      text: "The best investment I made as an international student. Now I have excellent credit and financial freedom.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=60&h=60&fit=crop&crop=face"
    }
  ]

  const faqs = [
    {
      question: "Do I need a Social Security Number?",
      answer: "No! You can start building credit with your Individual Taxpayer Identification Number (ITIN) or even without one. We'll help you apply for an ITIN if needed."
    },
    {
      question: "How long does it take to build credit?",
      answer: "Most students see their first credit score within 3 months and significant improvements within 6 months of responsible use."
    },
    {
      question: "What's a secured credit card?",
      answer: "A secured credit card requires a security deposit that becomes your credit limit. It functions like a regular credit card and helps build credit history."
    },
    {
      question: "Will this affect my credit in my home country?",
      answer: "No, building US credit through BPay will not impact your credit history in your home country. These are separate credit systems."
    },
    {
      question: "What credit bureaus do you report to?",
      answer: "We report to all three major credit bureaus: Experian, Equifax, and TransUnion, ensuring comprehensive credit building."
    }
  ]

  return (
    <div className="min-h-screen pattern-light-bg dark:pattern-dark-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-nav backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>

            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BPay</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 transform -rotate-12 animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Credit Building
                  </h1>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-2">
                    Build Your US Credit Score
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Start building your US credit history from day one. Our secured credit card and credit monitoring services help international students establish strong credit scores for their future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  Start Building Credit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 text-lg"
                >
                  Check My Score
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+40</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Score Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Months to Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Annual Fee</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card hover:glass-card-hover rounded-2xl p-8 bg-white/10 dark:bg-gray-900/10 transition-all duration-300">
                <div className="aspect-[3/2] bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute top-4 right-4 text-white font-bold">BPay</div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs opacity-80">CREDIT LIMIT</div>
                    <div className="text-xl font-bold">$1,000</div>
                  </div>

                  <div className="absolute bottom-4 right-4 text-white text-right">
                    <div className="text-xs opacity-80">CREDIT SCORE</div>
                    <div className="text-xl font-bold">720</div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <CreditCard className="w-16 h-16 text-white/30" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Current Balance</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$245.67</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Available Credit</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">$754.33</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Credit Utilization</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">24.6%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Credit Building Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to build excellent credit in the US</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card hover:glass-card-hover rounded-xl p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How Credit Building Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simple steps to establish your US credit history</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Benefits of Good Credit</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Why building credit is essential for your future in the US</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-card hover:glass-card-hover rounded-xl p-6 text-center transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Real results from international students like you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-card hover:glass-card-hover rounded-xl p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.university}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{testimonial.score}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Credit Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{testimonial.months}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Months</div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{testimonial.text}"</p>

                <div className="flex items-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about building credit</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card hover:glass-card-hover rounded-xl p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Credit Score?</h2>
            <p className="text-xl text-white/90 mb-8">Join thousands of international students building excellent credit with BPay</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Apply for Credit Card
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}