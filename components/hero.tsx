"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import avatar from '@/avatar3.png'
import Image from "next/image"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer Engineer"

    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Md_Muzzammil_Rashid__916200546409 (1).pdf"; // file in public/docs
    link.download = "Md_Muzzammil_Rashid__916200546409.pdf"; // custom file name
    link.click();
  };

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200/50 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Available for new opportunities</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Hi, I'm </span>
                <span className="gradient-text block lg:inline">Md Muzzammil Rashid</span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 h-12 flex items-center justify-center lg:justify-start">
                <span className="font-light">{text}</span>
                <span className="animate-pulse text-purple-500 ml-1">|</span>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Passionate full-stack developer crafting exceptional digital experiences with modern technologies.
              Currently building scalable applications that serve thousands of users worldwide.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="modern-btn group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-semibold bg-transparent"
                // onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                onClick={handleDownload}
                
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              {[
                { icon: Github, href: "https://github.com/md-muzzammil-rashid", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/md-muzzammil-rashid", label: "LinkedIn" },
                { icon: ExternalLink, href: "https://leetcode.com/u/md-muzzammil-rashid", label: "LeetCode" },
                { icon: Mail, href: "mailto:mdmuzzammilrashid@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+916200546409", label: "Phone" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-200/50 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative float">
              <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-purple-100 to-blue-100">
                <Image
                  src={avatar}
                  alt="Md Muzzammil Rashid"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-80 rotate-12 pulse-slow"></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl opacity-80 -rotate-12 pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 pulse-slow"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
