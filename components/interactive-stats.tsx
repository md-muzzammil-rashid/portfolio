"use client"

import { useState, useEffect } from "react"
import { Code, Users, Award, TrendingUp, Coffee, Clock, Star, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function InteractiveStats() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0])

  const stats = [
    {
      icon: Code,
      label: "Lines of Code",
      value: 50000,
      suffix: "+",
      color: "from-purple-500 to-blue-500",
      description: "Written across all projects",
    },
    {
      icon: Users,
      label: "Happy Users",
      value: 10000,
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
      description: "Served by my applications",
    },
    {
      icon: Award,
      label: "LeetCode Rating",
      value: 1780,
      suffix: "+",
      color: "from-cyan-500 to-teal-500",
      description: "Top 10% globally",
    },
    {
      icon: TrendingUp,
      label: "Performance Boost",
      value: 40,
      suffix: "%",
      color: "from-teal-500 to-green-500",
      description: "Average improvement",
    },
    {
      icon: Coffee,
      label: "Cups of Coffee",
      value: 2500,
      suffix: "+",
      color: "from-green-500 to-emerald-500",
      description: "Fuel for coding sessions",
    },
    {
      icon: Clock,
      label: "Hours Coded",
      value: 3000,
      suffix: "+",
      color: "from-emerald-500 to-teal-500",
      description: "Dedicated to development",
    },
    {
      icon: Star,
      label: "GitHub Stars",
      value: 150,
      suffix: "+",
      color: "from-orange-500 to-red-500",
      description: "Across all repositories",
    },
    {
      icon: Zap,
      label: "Projects Deployed",
      value: 25,
      suffix: "+",
      color: "from-pink-500 to-purple-500",
      description: "Live and running",
    },
  ]

  useEffect(() => {
    const animateValues = () => {
      stats.forEach((stat, index) => {
        let current = 0
        const increment = stat.value / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = Math.floor(current)
            return newValues
          })
        }, 30)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValues()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("interactive-stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="interactive-stats" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Zap className="w-4 h-4 mr-2 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Live Stats</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Numbers That <span className="gradient-text">Matter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`modern-card bg-white border-0 shadow-lg cursor-pointer transition-all duration-500 ${
                hoveredStat === index ? "scale-110 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 transition-opacity duration-300 ${
                    hoveredStat === index ? "opacity-10" : ""
                  }`}
                ></div>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ${
                    hoveredStat === index ? "rotate-12 scale-110" : ""
                  }`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {animatedValues[index].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">{stat.label}</div>
                <div
                  className={`text-xs text-gray-500 transition-all duration-300 ${
                    hoveredStat === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
                  }`}
                >
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
