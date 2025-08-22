import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "Cnear (YoursThatSenior Pvt. Ltd.)",
      location: "Remote, Delhi",
      period: "November 2024 – Present",
      achievements: [
        "Spearheaded development of a Placement Management Portal from scratch, now used by 8 colleges, streamlining campus placement workflows for 10K+ students",
        "Engineered and optimized scalable full-stack applications using Next.js, MERN stack, and React Native, improving load times by 40% and increasing user retention by 25%",
        "Led frontend development for a mobile app, achieving a 99.9% crash-free rate and enhancing user satisfaction",
        "Integrated AI-powered features and optimized task processing with RabbitMQ, reducing server response time by 50%",
        "Boosted system efficiency by 35% through database query optimization and caching mechanisms using Redis",
        "Conducted over 50 code reviews, enforcing best practices and maintaining documentation for scalable codebases",
      ],
      technologies: ["Next.js", "React Native", "MERN Stack", "RabbitMQ", "Redis", "AI Integration"],
      color: "from-purple-500 to-blue-500",
      status: "current",
    },
    {
      title: "Software Engineer (Freelancer)",
      company: "Hello Growing Pvt. Ltd.",
      location: "Ranchi, Jharkhand",
      period: "February 2025 – May 2025",
      achievements: [
        "Developed a full-fledged Course Management Portal using MERN stack and Next.js, deployed across three separate portals",
        "Built an admin portal for creating and managing courses, uploading video/content assets, and handling user access dynamically",
        "Engineered a student portal with secure authentication, course purchase system, Razorpay integration, and payment history",
        "Implemented a dynamic course landing page system with subdomain support, leveraging Next.js for SEO",
        "Achieved 100% dynamic content delivery, reducing manual work and maintenance by 80%",
      ],
      technologies: ["MERN Stack", "Next.js", "Razorpay", "SEO Optimization", "Subdomain Management"],
      color: "from-blue-500 to-cyan-500",
      status: "completed",
    },
    {
      title: "Software Developer Engineer Intern",
      company: "Feedants Pvt. Ltd.",
      location: "Remote",
      period: "June 2024 – September 2024",
      achievements: [
        "Contributed to a skill-sharing social media app enabling 500+ users to showcase talents via short-form videos, enhancing user engagement through real-time features",
        "Designed and refined 10+ React Native screens, improving video feed load times and reducing crashes by 20%",
        "Created scalable backend APIs using Node.js and Express.js, and streamlined MongoDB schema for efficiency",
        "Integrated AWS S3 for secure video storage, reducing server load and resulting in 25% faster API responses"
      ],
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "AWS S3"],
      color: "from-purple-500 to-indigo-500",
      status: "completed"
    },
    {
      title: "Web Development Lead Executive",
      company: "Google Developer Student Club",
      location: "Ranchi, Jharkhand",
      period: "August 2023 – July 2024",
      achievements: [
        "Directed a team of 8 developers to build and maintain web applications, delivering 100% of milestones on schedule",
        "Organized workshops for 50+ students on React, Node.js, and MongoDB, enhancing their technical skills by 70%",
        "Led multiple web development projects with minimal bugs reported post-deployment",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Team Leadership", "Workshop Organization"],
      color: "from-cyan-500 to-teal-500",
      status: "completed",
    },
  ]

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-600">Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="modern-card bg-white border-0 shadow-lg overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${exp.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl text-gray-900">{exp.title}</CardTitle>
                      {exp.status === "current" && (
                        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Current
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-4">
                      <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-3 flex-shrink-0`}></div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
