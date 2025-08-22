import { Code, Users, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+", color: "from-purple-500 to-blue-500" },
    { icon: Users, label: "Users Served", value: "10K+", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "LeetCode Rating", value: "1780+", color: "from-cyan-500 to-teal-500" },
    { icon: TrendingUp, label: "Performance Improvement", value: "40%", color: "from-teal-500 to-green-500" },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-600">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate Software Developer Engineer with a strong foundation in full-stack development.
                Completed my Bachelor's in Computer Science at Sarala Birla University with an impressive 8.33
                CGPA.
              </p>
              <p>
                My journey in software development has been marked by building scalable applications that serve
                thousands of users. I specialize in modern web technologies including React, Node.js, and cloud
                platforms, with a focus on creating efficient, user-centric solutions.
              </p>
              <p>
                Beyond coding, I'm passionate about mentoring fellow developers, leading teams, and contributing to the
                tech community. I've organized workshops for 50+ students and consistently rank in the top 10% globally
                on competitive programming platforms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="modern-card bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
