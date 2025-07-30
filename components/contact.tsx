"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mdmuzzammilrashid@gmail.com",
      href: "mailto:mdmuzzammilrashid@gmail.com",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6200546409",
      href: "tel:+916200546409",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ranchi, Jharkhand, India",
      href: "#",
      gradient: "from-cyan-500 to-teal-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/md-muzzammil-rashid",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/md-muzzammil-rashid",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/u/md-muzzammil-rashid",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 mr-2 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="modern-card bg-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center`}
                        >
                          <info.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">{info.label}</div>
                          <a
                            href={info.href}
                            className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                    title={social.label}
                  >
                    <social.icon className="h-7 w-7" />
                  </a>
                ))}
              </div>
            </div>

            <Card className="modern-card bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h4>
                <p className="text-gray-600 leading-relaxed">
                  I'm currently open to new opportunities and exciting projects. Whether you're looking for a full-stack
                  developer, need help with a specific project, or just want to connect, I'd love to hear from you.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="modern-card bg-white border-0 shadow-lg">
            <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-gray-900">Send Me a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 bg-gray-50 border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 bg-gray-50 border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-12 bg-gray-50 border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500 rounded-xl resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 modern-btn text-lg font-semibold">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-lg">
            © {new Date().getFullYear()} Md Muzzammil Rashid. Crafted with passion using Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
