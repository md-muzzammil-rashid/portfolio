import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  const education = {
    degree: "Bachelor of Technology in Computer Science",
    university: "Sarala Birla University",
    location: "Ranchi, Jharkhand",
    period: "Aug. 2021 – May 2025",
    cgpa: "8.33/10.00",
    highlights: [
      "Maintained consistent academic excellence with 8.33 CGPA",
      "Active member of Google Developer Student Club",
      "Led web development workshops and mentored fellow students",
      "Participated in various coding competitions and hackathons",
    ],
  }

  const certifications = [
    {
      title: "Spring and MicroServices",
      provider: "Telusko",
      description: "Leveraged knowledge to improve server response time by 30%",
      skills: ["Spring Boot", "Microservices Architecture", "RESTful APIs"],
    },
    {
      title: "Complete Data Science & Machine Learning",
      provider: "GeeksforGeeks",
      description: "Built strong foundations in data preprocessing, model building, and evaluation using real-world datasets",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization", "Machine Learning Algorithms"]
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintained 8.15/10.00 CGPA throughout the program",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Leadership Role",
      description: "Web Development Lead Executive at Google Developer Student Club",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-teal-600">Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Academic <span className="gradient-text">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Card - Full Width */}
        <div className="mb-16">
          <Card className="modern-card bg-white border-0 shadow-lg max-w-4xl mx-auto">
            <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl text-gray-900 mb-3">{education.degree}</CardTitle>
                  <div className="text-xl font-semibold gradient-text mb-4">{education.university}</div>
                  <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-sm text-gray-500 mb-2">CGPA</div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl px-6 py-3 rounded-2xl border-0">
                    {education.cgpa}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Academic Highlights</h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {education.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements within the same card */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="modern-card bg-white border-0 shadow-lg">
                <div className="h-1 bg-gradient-to-r from-teal-500 to-green-500"></div>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="space-y-3">
                      <CardTitle className="text-2xl text-gray-900">{cert.title}</CardTitle>
                      <div className="text-lg font-semibold gradient-text">{cert.provider}</div>
                    </div>
                    <Badge className="bg-gradient-to-r from-teal-500 to-green-500 text-white border-0 px-4 py-2 rounded-full w-fit">
                      Certified
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* <p className="text-gray-600 text-lg leading-relaxed">{cert.description}</p> */}
                  <div className="flex flex-wrap gap-3">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
