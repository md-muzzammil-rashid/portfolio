"use client"

import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, InnovateCorp",
      content:
        "Tech Lab transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
      avatar: "/professional-woman-ceo.png",
    },
    {
      name: "Michael Chen",
      position: "CTO, DataFlow Systems",
      content:
        "Working with Tech Lab was a game-changer. They delivered a robust, scalable solution that perfectly matched our technical requirements.",
      avatar: "/professional-cto-headshot.png",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, GreenTech Solutions",
      content:
        "The team's expertise in both design and development is remarkable. They created something that truly represents our brand vision.",
      avatar: "/professional-woman-founder-headshot.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-16">What Our Clients Say</h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentTestimonial
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
                <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 max-w-3xl">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="text-xl font-medium">{testimonial.name}</div>
                  <div className="text-gray-400 font-light">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
