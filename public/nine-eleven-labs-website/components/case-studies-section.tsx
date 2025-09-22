"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "Global E-commerce Platform",
    client: "Fortune 500 Retailer",
    challenge: "Legacy system couldn't handle Black Friday traffic spikes",
    solution: "Migrated to cloud-native microservices architecture",
    results: [
      { metric: "99.99%", label: "Uptime achieved" },
      { metric: "10x", label: "Traffic capacity increase" },
      { metric: "40%", label: "Server costs reduced" },
    ],
    icon: TrendingUp,
    image: "/case-study-ecommerce.png",
  },
  {
    title: "Healthcare Data Platform",
    client: "Leading Medical Group",
    challenge: "Needed HIPAA-compliant patient data management",
    solution: "Built secure, scalable healthcare analytics platform",
    results: [
      { metric: "1M+", label: "Patient records managed" },
      { metric: "50%", label: "Faster diagnosis times" },
      { metric: "100%", label: "HIPAA compliance" },
    ],
    icon: Users,
    image: "/case-study-healthcare.png",
  },
  {
    title: "FinTech Trading Platform",
    client: "Investment Firm",
    challenge: "Real-time trading required sub-millisecond latency",
    solution: "Optimized high-frequency trading infrastructure",
    results: [
      { metric: "<1ms", label: "Average latency" },
      { metric: "1M+", label: "Trades per second" },
      { metric: "99.9%", label: "System reliability" },
    ],
    icon: Zap,
    image: "/case-study-fintech.png",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped enterprises transform their technology and achieve remarkable results
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <study.icon className="w-8 h-8 text-black" />
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{study.client}</span>
                </div>

                <h3 className="text-3xl font-bold text-black mb-4">{study.title}</h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-black mb-1">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="group bg-transparent">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500">Case Study Visual</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
