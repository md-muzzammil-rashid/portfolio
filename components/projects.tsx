"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function isMobile() {
    console.log(window.innerWidth)
  return window.innerWidth <= 768; // you can adjust breakpoint
}
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
        "/projects/C0.png",
        "/projects/C1.png",
        "/projects/C2.png",
        "/projects/C3.png",
        "/projects/C4.png",
        "/projects/C5.png",
        "/projects/C6.png",
        "/projects/C7.png",
        "/projects/C8.png",
        "/projects/C9.png",
        "/projects/C10.png",
        "/projects/C11.png",
        "/projects/C12.png",
        "/projects/C13.png",
        "/projects/C14.png",
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
        "/projects/CB1.jpg",
        "/projects/CB2.jpg",
        "/projects/CB3.jpg",
        "/projects/CB4.jpg",
        "/projects/CB5.jpg",
        "/projects/CB6.jpg",
        "/projects/CB7.jpg",
        "/projects/CB8.jpg",
      ],
      github: "https://github.com/md-muzzammil-rashid/career-builder-backend",
      
      
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
        "/projects/WB1.png",
        "/projects/WB2.png",
        "/projects/WB3.png",
        "/projects/WB4.png",
        "/projects/WB5.png",
        "/projects/WB6.png",
        "/projects/WB7.png",
        "/projects/WB8.png",
        "/projects/WB9.png",
        "/projects/WB10.png",
        "/projects/WB11.png",
        "/projects/WB12.png",
        "/projects/WB13.png",
      ],
      github: "https://github.com/md-muzzammil-rashid/wanderbuddy-backend"
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
        "/projects/ResumeBuilder1.png",
        "/projects/ResumeBuilder2.png",
        "/projects/ResumeBuilder3.png",
        "/projects/ResumeBuilder4.png",
        "/projects/ResumeBuilder5.png",
        "/projects/ResumeBuilder6.png",
        "/projects/ResumeBuilder7.jpg",
        "/projects/ResumeBuilder8.jpg",
      ],
      github:"https://github.com/md-muzzammil-rashid/career-builder-frontend"
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
        "/projects/RMS1.png",
        "/projects/RMS2.png",
        "/projects/RMS3.png",
        "/projects/RMS4.png",
        "/projects/RMS5.png",
        "/projects/RMS6.png",
        "/projects/RMS7.png",
        "/projects/RMS8.png",
        "/projects/RMS9.png",
        "/projects/RMS10.png",
      ],
      github: "https://github.com/md-muzzammil-rashid/RMS",
      live: "https://dynebytes.mdmuzzammilrashid.com/"
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
        "/projects/ET1.png",
        "/projects/ET2.png",
        "/projects/ET3.png",
        "/projects/ET4.png",
        "/projects/ET5.png",
        "/projects/ET6.png",
        "/projects/ET7.png",
      ],
      github:"https://github.com/md-muzzammil-rashid/exprense-tracker-backend"
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
                  {project.github && <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-semibold flex-1 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {isMobile() && "Code"}
                  </Button>}
                  {project.screenshots?.length > 0 && <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openPreview(index)}
                    className="border-2 border-blue-200 text-blue-700 hover:border-blue-400 hover:text-blue-800 hover:bg-blue-50 rounded-xl font-semibold flex-1 bg-transparent"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {isMobile()&& "Preview"}
                  </Button>}
                  {project.live && <Button size="sm" className="modern-btn flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {isMobile() && "Live Demo"}
                  </Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Dialog */}

              <Dialog open={selectedProject != null} onOpenChange={closePreview}>
<DialogContent
  className="w-[90vw] h-[90vh] max-w-none p-0 bg-black/80 backdrop-blur-md border-0 flex flex-col"
  style={{
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-sm" />

  {/* Close button */}
  <Button
    variant="ghost"
    size="icon"
    className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
    onClick={closePreview}
  >
    <X className="h-6 w-6" />
  </Button>

  {/* Navigation arrows */}
  <Button
    variant="ghost"
    size="icon"
    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
    onClick={prevImage}
  >
    <ChevronLeft className="h-8 w-8" />
  </Button>

  <Button
    variant="ghost"
    size="icon"
    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
    onClick={nextImage}
  >
    <ChevronRight className="h-8 w-8" />
  </Button>

  {/* Image area */}
<div className="flex-1 flex items-center justify-center p-8 pb-[7rem] overflow-hidden relative">
  {selectedProject != null && (
    <Image
      src={projects[selectedProject].screenshots[currentImageIndex] || "/placeholder.svg"}
      alt={projects[selectedProject].title || "/placeholder.svg"}
      fill
      className="object-contain"
      sizes="(max-width: 90vw) 100vw, 90vw"
    />
  )}
</div>

  {/* Thumbnails */}
  <div className="h-28 bg-black/40 backdrop-blur-md p-4 flex-shrink-0">
    <div className="flex justify-center gap-2 overflow-x-auto max-w-full">
      {selectedProject != null && projects[selectedProject].screenshots.map((image, index) => (
        <div
          key={image+index}
          className={`flex-shrink-0 w-16 h-16 cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 ${
            currentImageIndex === index
              ? "border-white shadow-lg scale-110"
              : "border-transparent hover:border-white/50"
          }`}
          onClick={() => goToImage(index)}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={image}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</DialogContent>

      </Dialog>




      </div>
    </section>
  )
}
