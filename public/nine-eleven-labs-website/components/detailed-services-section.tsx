"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Code, Smartphone, Brain, Server } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Complete web applications using MERN stack, Next.js, and modern frameworks",
    price: "$200/₹15000",
    duration: "2-4 weeks",
    icon: Code,
    included: [
      "Responsive web applications",
      "RESTful API development",
      "Database design & optimization",
      "Authentication & security",
      "Performance optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express.js"],
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with React Native for iOS and Android",
    price: "$350/₹30000",
    duration: "3-6 weeks",
    icon: Smartphone,
    included: [
      "Cross-platform compatibility",
      "Native performance",
      "Push notifications",
      "Offline functionality",
      "App store deployment",
    ],
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
  },
  {
    id: 3,
    title: "Backend & API Development",
    description: "Scalable backend systems with robust APIs and database architecture",
    price: "$100/₹8000",
    duration: "1-3 weeks",
    icon: Server,
    included: [
      "RESTful API design",
      "Database optimization",
      "Real-time features",
      "Third-party integrations",
      "Cloud deployment",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "WebSocket", "Spring", "GoLang"],
  },
  {
    id: 4,
    title: "AI Integration & Automation",
    description: "AI-powered features and workflow automation to enhance your applications",
    price: "$200/₹15000",
    duration: "2-5 weeks",
    icon: Brain,
    included: [
      "OpenAI API integration",
      "Automated workflows",
      "Data processing pipelines",
      "Smart recommendations",
      "Process optimization",
    ],
    technologies: ["OpenAI", "Python", "RabbitMQ", "AI APIs"],
  },
]

export function DetailedServicesSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Development Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            Comprehensive development solutions with transparent pricing and clear deliverables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">Starting from</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">{service.title}</CardTitle>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.included.map((item, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <Button className="bg-white text-black hover:bg-gray-100 font-semibold">Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Need a custom solution? We offer flexible pricing for unique requirements.
          </p>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
          >
            Discuss Custom Project
          </Button>
        </div>
      </div>
    </section>
  )
}
