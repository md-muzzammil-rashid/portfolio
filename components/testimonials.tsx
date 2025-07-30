"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      rating: 5,
      text: "Muzzammil delivered exceptional work on our construction management platform. His attention to detail and technical expertise helped us streamline operations for over 10 sites. Highly recommended!",
      project: "Construction Workflow Platform",
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "EduTech Solutions",
      image: "/placeholder.svg?height=80&width=80&text=DC",
      rating: 5,
      text: "The AI-powered course generator that Muzzammil built exceeded our expectations. The platform now serves 200+ users and has significantly improved our content creation process.",
      project: "AI Course Generator",
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      company: "WanderBuddy",
      image: "/placeholder.svg?height=80&width=80&text=ER",
      rating: 5,
      text: "Working with Muzzammil was a game-changer for our travel app. His full-stack expertise helped us launch successfully and now we have over 500 active users. Amazing developer!",
      project: "Travel Planning App",
    },
    {
      name: "Michael Thompson",
      role: "Restaurant Owner",
      company: "Bella Vista Restaurant",
      image: "/placeholder.svg?height=80&width=80&text=MT",
      rating: 5,
      text: "The POS system Muzzammil developed transformed our restaurant operations. Order processing time reduced by 35% and our staff loves the intuitive interface.",
      project: "Restaurant POS System",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-600">Client Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="modern-card bg-white border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-purple-500 mx-auto mb-6" />

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center gap-4 mb-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-purple-200"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-purple-600 font-medium">{testimonials[currentTestimonial].role}</div>
                    <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>

                <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full">
                  <span className="text-sm font-medium text-purple-700">
                    Project: {testimonials[currentTestimonial].project}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-purple-500 w-8" : "bg-purple-200 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
