import { Code, Database, Cloud, Smartphone, Globe, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "GoLang", "SQL"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Redux", "React Query"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "Spring Boot", "MongoDB", "MySQL", "Redis", "RESTful APIs"],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "NativeWind CSS", "Mobile UI/UX", "Cross-platform Development"],
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Firebase", "Git", "GitHub", "WebSocket", "RabbitMQ", "Microservices"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["VS Code", "Eclipse", "Spring Tool Suite", "Git Bash", "Puppeteer", "JWT"],
      gradient: "from-emerald-500 to-purple-500",
    },
  ]

  const achievements = [
    {
      label: "LeetCode Rating",
      value: "1780+",
      description: "Top 10% globally",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      label: "Problems Solved",
      value: "650+",
      description: "90%+ success rate",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Code Reviews",
      value: "50+",
      description: "Best practices enforced",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      label: "Workshop Attendees",
      value: "50+",
      description: "Students mentored",
      gradient: "from-teal-500 to-green-500",
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-600">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build exceptional digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className="modern-card bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-3 py-1 rounded-full font-medium transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="modern-card bg-white border-0 shadow-lg">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Achievements & <span className="gradient-text">Recognition</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-3xl font-bold text-white">{achievement.value}</div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
