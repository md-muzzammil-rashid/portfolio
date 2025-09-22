"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Microsoft", logo: "/microsoft-logo.svg" },
  { name: "Google", logo: "/google-logo.svg" },
  { name: "Amazon", logo: "/amazon-logo.svg" },
  { name: "Meta", logo: "/meta-logo.svg" },
  { name: "Netflix", logo: "/netflix-logo.svg" },
  { name: "Spotify", logo: "/spotify-logo.svg" },
  { name: "Uber", logo: "/uber-logo.svg" },
  { name: "Airbnb", logo: "/airbnb-logo.svg" },
]

export function ClientLogosSection() {
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
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
