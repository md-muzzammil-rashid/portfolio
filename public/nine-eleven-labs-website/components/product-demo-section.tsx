"use client"

import { motion } from "framer-motion"
import { Play, Monitor, Smartphone, Tablet, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProductDemoSection() {
  const [activeDevice, setActiveDevice] = useState("desktop")

  const devices = [
    { id: "desktop", name: "Desktop", icon: Monitor },
    { id: "tablet", name: "Tablet", icon: Tablet },
    { id: "mobile", name: "Mobile", icon: Smartphone },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">See It In Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our platform across all devices with our interactive demo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {devices.map((device) => {
                const Icon = device.icon
                return (
                  <button
                    key={device.id}
                    onClick={() => setActiveDevice(device.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      activeDevice === device.id ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{device.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div
              className={`mx-auto bg-gray-900 rounded-2xl overflow-hidden ${
                activeDevice === "desktop"
                  ? "max-w-4xl aspect-video"
                  : activeDevice === "tablet"
                    ? "max-w-2xl aspect-[4/3]"
                    : "max-w-sm aspect-[9/16]"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 group">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>

                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <div className="text-sm font-medium mb-2">Interactive Demo</div>
                    <div className="text-xs text-gray-300">Click to explore our platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Get a personalized demo tailored to your business needs</p>
            <Button variant="outline" className="group bg-transparent">
              Schedule Live Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
