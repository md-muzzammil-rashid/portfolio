"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "mobile", label: "Mobile Apps" },
  ]

  const projects = [
    {
      id: 1,
      title: "CloudSync Pro",
      category: "saas",
      description: "Enterprise cloud synchronization platform",
      image: "/modern-cloud-dashboard-interface.png",
      tech: ["React", "Node.js", "AWS"],
    },
    {
      id: 2,
      title: "ShopFlow",
      category: "ecommerce",
      description: "Next-generation e-commerce solution",
      image: "/sleek-ecommerce-website-interface.png",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      id: 3,
      title: "TaskMaster Mobile",
      category: "mobile",
      description: "AI-powered productivity app",
      image: "/mobile-app-interface.png",
      tech: ["React Native", "AI/ML", "Firebase"],
    },
    {
      id: 4,
      title: "DataViz Analytics",
      category: "saas",
      description: "Real-time data visualization platform",
      image: "/data-analytics-dashboard.png",
      tech: ["Vue.js", "D3.js", "Python"],
    },
    {
      id: 5,
      title: "FoodieMarket",
      category: "ecommerce",
      description: "Local food delivery marketplace",
      image: "/food-delivery-app-interface.png",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      id: 6,
      title: "FitTracker Pro",
      category: "mobile",
      description: "Comprehensive fitness tracking app",
      image: "/fitness-tracking-app.png",
      tech: ["Flutter", "HealthKit", "GraphQL"],
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Showcasing our latest projects and success stories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
