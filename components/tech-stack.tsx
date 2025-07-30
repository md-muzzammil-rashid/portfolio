"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const technologies = [
    {
      name: "React",
      category: "frontend",
      level: 95,
      color: "from-blue-400 to-blue-600",
      description: "Building dynamic UIs",
    },
    {
      name: "Next.js",
      category: "frontend",
      level: 90,
      color: "from-gray-700 to-black",
      description: "Full-stack React framework",
    },
    {
      name: "TypeScript",
      category: "language",
      level: 88,
      color: "from-blue-600 to-blue-800",
      description: "Type-safe JavaScript",
    },
    {
      name: "Node.js",
      category: "backend",
      level: 92,
      color: "from-green-500 to-green-700",
      description: "Server-side JavaScript",
    },
    {
      name: "MongoDB",
      category: "database",
      level: 85,
      color: "from-green-400 to-green-600",
      description: "NoSQL database",
    },
    {
      name: "Python",
      category: "language",
      level: 80,
      color: "from-yellow-400 to-blue-500",
      description: "Versatile programming",
    },
    {
      name: "React Native",
      category: "mobile",
      level: 87,
      color: "from-purple-500 to-pink-500",
      description: "Cross-platform mobile",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: 93,
      color: "from-cyan-400 to-blue-500",
      description: "Utility-first CSS",
    },
    {
      name: "Express.js",
      category: "backend",
      level: 89,
      color: "from-gray-600 to-gray-800",
      description: "Web application framework",
    },
    {
      name: "Redis",
      category: "database",
      level: 75,
      color: "from-red-500 to-red-700",
      description: "In-memory data store",
    },
    {
      name: "Docker",
      category: "devops",
      level: 70,
      color: "from-blue-500 to-cyan-500",
      description: "Containerization platform",
    },
    {
      name: "AWS",
      category: "cloud",
      level: 78,
      color: "from-orange-400 to-orange-600",
      description: "Cloud computing services",
    },
  ]

  const categories = [
    { id: "all", label: "All Technologies", count: technologies.length },
    { id: "frontend", label: "Frontend", count: technologies.filter((t) => t.category === "frontend").length },
    { id: "backend", label: "Backend", count: technologies.filter((t) => t.category === "backend").length },
    { id: "language", label: "Languages", count: technologies.filter((t) => t.category === "language").length },
    { id: "database", label: "Database", count: technologies.filter((t) => t.category === "database").length },
    { id: "mobile", label: "Mobile", count: technologies.filter((t) => t.category === "mobile").length },
    { id: "devops", label: "DevOps", count: technologies.filter((t) => t.category === "devops").length },
    { id: "cloud", label: "Cloud", count: technologies.filter((t) => t.category === "cloud").length },
  ]

  const filteredTechnologies =
    selectedCategory === "all" ? technologies : technologies.filter((tech) => tech.category === selectedCategory)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-indigo-600">Technology Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the technologies I use to build amazing digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="modern-card bg-white border-0 shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                  <Badge className={`bg-gradient-to-r ${tech.color} text-white border-0`}>{tech.level}%</Badge>
                </div>

                <p className="text-gray-600 text-sm mb-4">{tech.description}</p>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: hoveredTech === tech.name ? `${tech.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
