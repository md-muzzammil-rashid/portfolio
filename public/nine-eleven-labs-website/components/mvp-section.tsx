"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  Clock,
  DollarSign,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Users,
  TrendingUp,
} from "lucide-react"

const mvpBenefits = [
  {
    icon: Clock,
    title: "Faster Time to Market",
    description: "Launch in 4-8 weeks instead of 6+ months",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Save 60-80% on initial development costs",
  },
  {
    icon: Target,
    title: "Validate Ideas",
    description: "Test market demand before full investment",
  },
  {
    icon: Users,
    title: "User Feedback",
    description: "Get real user insights early in development",
  },
]

const mvpProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Define core features and user stories",
    duration: "1 week",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Create wireframes and interactive prototypes",
    duration: "1-2 weeks",
  },
  {
    step: "03",
    title: "Development",
    description: "Build core functionality with clean code",
    duration: "3-4 weeks",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Quality assurance and deployment",
    duration: "1 week",
  },
]

const mvpPackages = [
  {
    name: "Starter MVP",
    price: "$5,000",
    duration: "4 weeks",
    features: [
      "Up to 5 core features",
      "Responsive web app",
      "Basic user authentication",
      "Database integration",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Professional MVP",
    price: "$8,500",
    duration: "6 weeks",
    features: [
      "Up to 10 core features",
      "Web + mobile responsive",
      "Advanced authentication",
      "Payment integration",
      "Analytics setup",
      "2 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise MVP",
    price: "$15,000",
    duration: "8 weeks",
    features: [
      "Unlimited core features",
      "Multi-platform support",
      "Custom integrations",
      "Advanced security",
      "Performance optimization",
      "3 months support",
    ],
    popular: false,
  },
]

export function MvpSection() {
  const [activeTab, setActiveTab] = useState<"benefits" | "process" | "packages">("benefits")

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-8 h-8 text-black" />
            <Badge variant="outline" className="text-sm font-medium">
              MVP Development
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Launch Your Idea in
            <span className="block text-gray-600">Record Time</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your concept into a market-ready product with our proven MVP development process. Get to market
            faster, validate your ideas, and start generating revenue sooner.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            {[
              { key: "benefits", label: "Benefits", icon: Lightbulb },
              { key: "process", label: "Process", icon: Zap },
              { key: "packages", label: "Packages", icon: TrendingUp },
            ].map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={activeTab === key ? "default" : "ghost"}
                onClick={() => setActiveTab(key as any)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeTab === key ? "bg-black text-white shadow-md" : "text-gray-600 hover:text-black"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "benefits" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mvpBenefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "process" && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {mvpProcess.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-black">{step.title}</h3>
                            <Badge variant="outline" className="text-sm">
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "packages" && (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mvpPackages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                    pkg.popular ? "ring-2 ring-black scale-105" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-black text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold text-black mb-2">{pkg.price}</div>
                      <p className="text-gray-600">{pkg.duration} delivery</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-black text-white hover:bg-gray-800"
                          : "bg-white text-black border border-black hover:bg-black hover:text-white"
                      } transition-all duration-300`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-black text-white rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your MVP?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ startups who launched successfully with our MVP development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
