"use client"

import { Button } from "@/components/ui/button"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How do you ensure security and compliance?",
    answer:
      "We implement enterprise-grade security measures including SOC 2 Type II compliance, end-to-end encryption, regular security audits, and GDPR compliance. Our infrastructure is hosted on secure cloud platforms with 99.99% uptime SLA.",
  },
  {
    question: "Can your solutions scale with our growing business?",
    answer:
      "Absolutely. Our cloud-native architecture is designed to scale automatically based on demand. We've successfully scaled applications from thousands to millions of users without performance degradation.",
  },
  {
    question: "What kind of custom integrations do you support?",
    answer:
      "We support integrations with virtually any system through REST APIs, GraphQL, webhooks, and custom connectors. Common integrations include CRM systems, payment processors, analytics platforms, and legacy enterprise software.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. MVP development typically takes 8-12 weeks, while full enterprise solutions can take 3-6 months. We provide detailed project roadmaps and regular progress updates.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, performance optimization, and dedicated support channels with guaranteed response times.",
  },
  {
    question: "How do you handle data migration from existing systems?",
    answer:
      "We have extensive experience with data migration projects. Our process includes data assessment, migration planning, testing phases, and zero-downtime deployment strategies to ensure smooth transitions.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Node.js, Python, Go, cloud platforms (AWS, GCP, Azure), databases (PostgreSQL, MongoDB), and emerging technologies like AI/ML integration.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Absolutely. We offer flexible engagement models including staff augmentation, collaborative development, and knowledge transfer programs to work seamlessly with your internal teams.",
  },
]

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about our services and processes</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <Button className="bg-black text-white hover:bg-gray-800">Contact Support</Button>
        </motion.div>
      </div>
    </section>
  )
}
