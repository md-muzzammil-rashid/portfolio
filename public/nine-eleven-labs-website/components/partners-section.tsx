"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Y Combinator", type: "Accelerator", logo: "/yc-logo.svg" },
  { name: "Techstars", type: "Accelerator", logo: "/techstars-logo.svg" },
  { name: "AWS Partner", type: "Cloud Partner", logo: "/aws-partner-logo.svg" },
  { name: "Google Cloud", type: "Cloud Partner", logo: "/gcp-partner-logo.svg" },
  { name: "Microsoft Partner", type: "Technology Partner", logo: "/ms-partner-logo.svg" },
  { name: "Stripe Partner", type: "Payment Partner", logo: "/stripe-partner-logo.svg" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-black mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600">Backed by leading accelerators and partnered with industry giants</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 mx-auto">
                <span className="text-xs font-medium text-gray-600">{partner.name}</span>
              </div>
              <div className="text-xs text-gray-500">{partner.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
