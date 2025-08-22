"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: "Construction Workflow Automation Platform",
      description:
        "A scalable construction streamlining app serving 4 key personas, deployed across 10+ active sites with 50+ daily active users.",
      achievements: [
        "Automated 100+ construction tasks per site, reducing manual planning effort by 70%",
        "Developed real-time task progress workflows, increasing execution speed by 45%",
        "Integrated secure multimedia communication system with 90% uptime",
        "Reduced storage bottlenecks by 60% using MongoDB GridFS",
      ],
      technologies: ["MERN Stack", "React Native", "Socket.IO", "MongoDB", "GridFS"],
      metrics: { users: "50+", sites: "10+", efficiency: "70%" },
      date: "May 2025",
      gradient: "from-purple-500 to-blue-500",
      screenshots: [
        "/placeholder.svg?height=600&width=800&text=Construction+Dashboard",
        "/placeholder.svg?height=600&width=800&text=Task+Management+View",
        "/placeholder.svg?height=600&width=800&text=Real-time+Communication",
        "/placeholder.svg?height=600&width=800&text=Mobile+App+Interface",
      ],
    },
    {
      title: "AI Notes & Video Course Generator",
      description:
        "A web platform that generates structured PDF notes and AI-curated video courses based on subject and topic input.",
      achievements: [
        "Implemented topic-wise PDF generation with ReactPDF and OpenAI",
        "Reduced manual note-taking by 90% for 200+ users",
        "Leveraged AI to script and generate video lectures from notes",
        "Increased user retention by 40% through digestible content formats",
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "OpenAI"],
      metrics: { users: "200+", efficiency: "90%", retention: "40%" },
      date: "May 2025",
      gradient: "from-blue-500 to-cyan-500",
      screenshots: [
        "/placeholder.svg?height=600&width=800&text=AI+Course+Generator",
        "/placeholder.svg?height=600&width=800&text=PDF+Notes+Preview",
        "/placeholder.svg?height=600&width=800&text=Video+Course+Interface",
        "/placeholder.svg?height=600&width=800&text=User+Dashboard",
      ],
    },
    {
      title: "WanderBuddy: Traveling Application",
      description:
        "A collaborative trip planning app with over 500 users, featuring real-time chat, destination management, and group itinerary coordination.",
      achievements: [
        "Architected and launched with over 500 users",
        "Integrated web scraping with Puppeteer for live travel data from 10+ sites",
        "Added support for packing lists, budget tracking, and traveler community",
        "Increased user engagement by 40% through interactive features",
      ],
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Puppeteer", "WebSocket"],
      metrics: { users: "500+", sites: "10+", engagement: "40%" },
      date: "Feb 2025",
      gradient: "from-cyan-500 to-teal-500",
      screenshots: [
        "/placeholder.svg?height=600&width=800&text=Trip+Planning+Dashboard",
        "/placeholder.svg?height=600&width=800&text=Real-time+Chat+Interface",
        "/placeholder.svg?height=600&width=800&text=Destination+Explorer",
        "/placeholder.svg?height=600&width=800&text=Budget+Tracker",
      ],
    },
    {
      title: "Portfolio & Resume Generator",
      description:
        "A SaaS platform that enables users to generate professional portfolios by uploading resumes, serving 300+ users.",
      achievements: [
        "Engineered a SaaS platform serving 300+ users with zero coding required",
        "Created user dashboard with 5+ customizable templates",
        "Integrated AI-powered resume generation and ATS optimization",
        "Achieved 60% faster portfolio setup time",
      ],
      technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "ReactPDF"],
      metrics: { users: "300+", templates: "5+", speed: "60%" },
      date: "Nov 2024",
      gradient: "from-teal-500 to-green-500",
      screenshots: [
        "/placeholder.svg?height=600&width=800&text=Portfolio+Templates",
        "/placeholder.svg?height=600&width=800&text=Resume+Upload+Interface",
        "/placeholder.svg?height=600&width=800&text=AI+Resume+Generator",
        "/placeholder.svg?height=600&width=800&text=Generated+Portfolio",
      ],
    },
    {
      title: "Restaurant Management POS Software",
      description:
        "A comprehensive Restaurant Management Software with Admin-side features, improving operational efficiency by 45%.",
      achievements: [
        "Improved operational efficiency by 45% through centralized management",
        "Implemented real-time Kitchen Display System, reducing order processing time by 35%",
        "Enhanced security through JWT-based authentication and authorization",
        "Boosted managerial decision-making efficiency by 25%",
      ],
      technologies: ["React", "WebSocket", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
      metrics: { efficiency: "45%", processing: "35%", decisions: "25%" },
      date: "Jul 2024",
      gradient: "from-green-500 to-emerald-500",
      screenshots: [
        "/placeholder.svg?height=600&width=800&text=POS+Dashboard",
        "/placeholder.svg?height=600&width=800&text=Kitchen+Display+System",
        "/placeholder.svg?height=600&width=800&text=Order+Management",
        "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard",
      ],
    },
    {
      title: "Personal Expense Tracker",
      description:
        "A comprehensive expense tracking application with real-time analytics, budget management, and financial insights to help users manage their finances effectively.",
      achievements: [
        "Built intuitive expense categorization system with custom categories and tags",
        "Implemented real-time budget tracking with alerts and notifications",
        "Created interactive charts and analytics dashboard for spending insights",
        "Added recurring expense management and automated transaction categorization",
        "Integrated secure data export/import functionality with multiple formats",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "JWT Authentication"],
      metrics: { categories: "15+", insights: "Real-time", security: "100%" },
      date: "Jan 2025",
      gradient: "from-emerald-500 to-teal-500",
      screenshots: [
        "/placeholder.svg?height=600&width=800&text=Expense+Dashboard",
        "/placeholder.svg?height=600&width=800&text=Budget+Analytics",
        "/placeholder.svg?height=600&width=800&text=Category+Management",
        "/placeholder.svg?height=600&width=800&text=Financial+Reports",
      ],
    },
  ]

  const openPreview = (projectIndex: number) => {
    setSelectedProject(projectIndex)
    setCurrentImageIndex(0)
  }

  const closePreview = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev === projects[selectedProject].screenshots.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev === 0 ? projects[selectedProject].screenshots.length - 1 : prev - 1))
    }
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-green-600">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with exceptional user experience
          </p>

          {/* Interactive Project Filter */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Web App", "Mobile", "AI/ML", "SaaS"].map((filter) => (
              <button
                key={filter}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
              >
                {filter}
              </button>
            ))}
          </div> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="modern-card bg-white border-0 shadow-lg overflow-hidden group">
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-3 py-1 rounded-full`}>
                    {project.date}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-2xl">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-xs font-medium text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-semibold flex-1 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openPreview(index)}
                    className="border-2 border-blue-200 text-blue-700 hover:border-blue-400 hover:text-blue-800 hover:bg-blue-50 rounded-xl font-semibold flex-1 bg-transparent"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button size="sm" className="modern-btn flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={closePreview}>
          <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-0">
            {selectedProject !== null && (
              <div className="relative w-full h-full flex flex-col">
                {/* Header - Fixed height */}
                <div className="flex-shrink-0 flex items-center justify-between p-4 md:p-6 bg-black/50 backdrop-blur-sm">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {currentImageIndex + 1} of {projects[selectedProject].screenshots.length}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closePreview}
                    className="text-white hover:bg-white/10 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Main Image Container - Takes remaining space minus thumbnail area */}
                <div className="flex-1 relative flex items-center justify-center p-4 min-h-0">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={projects[selectedProject].screenshots[currentImageIndex] || "/placeholder.svg"}
                      alt={`${projects[selectedProject].title} screenshot ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg md:rounded-2xl shadow-2xl"
                      style={{
                        maxHeight: "calc(100% - 2rem)", // Account for padding
                        maxWidth: "calc(100% - 2rem)", // Account for padding
                      }}
                    />

                    {/* Navigation Arrows */}
                    {projects[selectedProject].screenshots.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={prevImage}
                          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm z-10"
                        >
                          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={nextImage}
                          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm z-10"
                        >
                          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* Thumbnail Navigation - Fixed height at bottom */}
                {projects[selectedProject].screenshots.length > 1 && (
                  <div className="flex-shrink-0 p-3 md:p-6 bg-black/50 backdrop-blur-sm">
                    <div className="flex justify-center gap-2 md:gap-3 overflow-x-auto pb-2">
                      {projects[selectedProject].screenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md md:rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-blue-400 shadow-lg shadow-blue-400/50"
                              : "border-gray-600 hover:border-gray-400"
                          }`}
                        >
                          <img
                            src={screenshot || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
