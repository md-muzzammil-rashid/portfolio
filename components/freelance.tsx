"use client"

import {
  Smartphone,
  Database,
  Zap,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Star,
  Globe,
  Briefcase,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Freelancing() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description: "Complete web applications using MERN stack, Next.js, and modern frameworks",
      features: [
        "Responsive web applications",
        "RESTful API development",
        "Database design & optimization",
        "Authentication & security",
        "Performance optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express.js"],
      startingPrice: "$200/₹15000",
      deliveryTime: "2-4 weeks",
      color: "blue",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with React Native for iOS and Android",
      features: [
        "Cross-platform compatibility",
        "Native performance",
        "Push notifications",
        "Offline functionality",
        "App store deployment",
      ],
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      startingPrice: "$350/₹30000",
      deliveryTime: "3-6 weeks",
      color: "purple",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & API Development",
      description: "Scalable backend systems with robust APIs and database architecture",
      features: [
        "RESTful API design",
        "Database optimization",
        "Real-time features",
        "Third-party integrations",
        "Cloud deployment",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "WebSocket", "Spring", "GoLang"],
      startingPrice: "$100/₹8000",
      deliveryTime: "1-3 weeks",
      color: "green",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Integration & Automation",
      description: "AI-powered features and workflow automation to enhance your applications",
      features: [
        "OpenAI API integration",
        "Automated workflows",
        "Data processing pipelines",
        "Smart recommendations",
        "Process optimization",
      ],
      technologies: ["OpenAI", "Python", "RabbitMQ", "AI APIs"],
      startingPrice: "$200/₹15000",
      deliveryTime: "2-5 weeks",
      color: "orange",
    },
  ]

  const freelanceStats = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: "15+",
      label: "Projects Completed",
      description: "Successfully delivered projects",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "12+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "4.9/5",
      label: "Client Rating",
      description: "Average project rating",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "98%",
      label: "On-Time Delivery",
      description: "Projects delivered on schedule",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text: "Muzzammil delivered an exceptional course management portal that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      project: "Course Management Portal",
    },
    {
      name: "Rajesh Kumar",
      company: "BuildPro Solutions",
      rating: 5,
      text: "The construction workflow app has revolutionized our site management. Muzzammil's solution reduced our manual work by 70% and improved efficiency significantly.",
      project: "Construction Workflow App",
    },
    {
      name: "Emily Chen",
      company: "EduTech Solutions",
      rating: 5,
      text: "Professional, reliable, and incredibly skilled. The AI-powered features he integrated have transformed how our users interact with our platform.",
      project: "AI Notes Generator",
    },
  ]

  const proofOfWorkProjects = {
    courseManagement: {
      id: "course-management-portal",
      title: "Course Management Portal",
      subtitle: "Full-Stack MERN Application",
      client: "Hello Growing",
      status: "Completed",
      badges: ["Completed", "3 Portals"],
      description:
        "Developed a comprehensive course management system with three separate portals: admin, student, and public landing pages with dynamic subdomain support.",
      liveUrl: "https://crypto.hellogrowing.com", // Add your actual project URL
      githubUrl: "https://github.com/md-muzzammil-rashid/course-management-portal", // Add your GitHub URL
      metrics: [
        { value: "100%", label: "Dynamic Content" },
        { value: "80%", label: "Reduced Manual Work" },
      ],
      features: [
        "Admin portal for course creation and management",
        "Student portal with Razorpay payment integration",
        "Dynamic subdomain system (course.client.com)",
        "SEO-optimized landing pages with Next.js",
        "Secure authentication and user management",
      ],
      technologies: ["Next.js", "MERN Stack", "Razorpay", "SEO"],
      gradient: "from-blue-50 to-purple-50",
      iconGradient: "from-blue-500 to-purple-600",
      icon: "CMP",
    },
    khanAcademyRanchi: {
id: "khan-academy-ranchi",
title: "Khan Academy Ranchi",
subtitle: "Coaching Institute Website",
client: "Khan Academy Ranchi",
status: "Completed",
badges: ["Completed", "SEO Top-10", "Lead Gen"],
description:
"Built a fast, SEO-focused coaching website with dedicated pages for institute overview, mentors, gallery, courses, admissions, FAQs, and contact. Implemented lead capture forms with validation and spam protection, and optimized on-page SEO (meta tags, OG/Twitter, sitemap, robots, schema.org).",
liveUrl: "https://www.khanacademyranchi.com", // Add your actual live URL
githubUrl: "https://github.com/md-muzzammil-rashid/khan-academy-ranchi", // Add your GitHub URL or mark as private
metrics: [
{ value: "1st Page", label: "Google for target queries" },
{ value: "45%+", label: "Form submit rate on paid traffic" },
{ value: ">90", label: "Lighthouse SEO Score" },
],
features: [
"Hero with clear CTA and inquiry form",
"Mentor/Faculty profiles with experience & subjects",
"Courses page with syllabus, batches, and fee inquiry",
"Admissions + downloadable brochure",
"Image gallery and student testimonials",
"Blog/updates for results & announcements",
"On-page SEO + schema for LocalBusiness, Course, and FAQ",
"Analytics + events for form submissions",
],
technologies: ["HTML", "CSS", "JavaScript", "Schema.org", "On‑page SEO"],
gradient: "from-amber-50 to-rose-50",
iconGradient: "from-red-500 to-black",
icon: "KA"
},
OMAMedia:{
id: "oma-media-website",
title: "OMA Media — Digital Marketing Agency",
subtitle: "Next.js Marketing Site",
client: "OMA Media",
status: "Completed",
badges: ["Completed", "Lead Gen", "Case Studies"],
description:
"Designed and developed a conversion‑optimized agency website with service pages, dynamic case‑study portfolio, pricing/packaging sections, and multiple lead capture points. Built with Next.js for performance, ISR for fast updates, and API routes for secure form handling.",
liveUrl: "https://oma-media.vercel.app/", // Add your actual live URL
githubUrl: "https://github.com/md-muzzammil-rashid/oma-media-website", // Add your GitHub URL
metrics: [
{ value: ">95", label: "Lighthouse Performance" },
{ value: "~3x", label: "Increase in inbound leads" },
{ value: "<1s", label: "TTFB on Vercel (average)" },
],
features: [
"Service pages with comparison tables and FAQs",
"Portfolio/case studies with results and process",
"Sticky contact bar + multi‑step lead forms",
"Testimonials, partners, and awards sections",
"Blog for SEO with category/tag filters",
"Calendar/CTA integration for discovery calls",
"API routes for form submissions + email/webhook",
"Image optimization and ISR for content updates",
],
technologies: ["Next.js", "React", "Tailwind CSS", "API Routes", "Vercel"],
gradient: "from-indigo-50 to-cyan-50",
iconGradient: "from-indigo-500 to-cyan-600",
icon: "OMA",
},
CECFeel:{
id: "cec-feel-fmcg",
title: "CEC Feel — FMCG Website",
subtitle: "Next.js Product & Recipes Platform",
client: "CEC Feel",
status: "Completed",
badges: ["Completed", "Catalog", "Recipes"],
description:
"A modern FMCG brand site featuring a structured product catalog, recipe hub, and brand story pages. Emphasis on product discovery, rich media, and SEO (Product/Recipe schema) with lead/contact capture for distributors and retailers.",
liveUrl: "https://feel-final.vercel.app", // Use your live domain or subdomain
githubUrl: "https://github.com/md-muzzammil-rashid/cec-feel", // Add your GitHub URL or mark as private
metrics: [
{ value: "2x", label: "Time on recipe pages" },
{ value: ">90", label: "SEO & Accessibility scores" },
{ value: "<100ms", label: "Image LCP with Next/Image" },
],
features: [
"Product catalog with categories, filters, and detail pages",
"Recipe hub with ingredients, steps, and product tags",
"Nutrition facts and allergen info blocks",
"Distributor/Retailer inquiry forms (spam‑safe)",
"Brand story, quality standards, and certifications",
"Store/where‑to‑buy section with external links",
"Structured data for Product and Recipe schema",
"Sitemap, robots, and dynamic OG for sharing",
],
technologies: ["Next.js", "React", "Tailwind CSS", "Next/Image", "SEO"],
gradient: "from-emerald-50 to-teal-50",
iconGradient: "from-emerald-500 to-teal-600",
icon: "CEC",
},



    // constructionWorkflow: {
    //   id: "construction-workflow-app",
    //   title: "Construction Workflow",
    //   subtitle: "Automation Platform",
    //   client: "BuildPro Solutions",
    //   status: "Live",
    //   badges: ["Live", "Multi-Platform"],
    //   description:
    //     "Built a comprehensive construction workflow automation platform serving multiple personas across 10+ active construction sites.",
    //   liveUrl: "https://buildpro-workflow.com", // Add your actual project URL
    //   githubUrl: "https://github.com/md-muzzammil-rashid/construction-workflow", // Add your GitHub URL
    //   metrics: [
    //     { value: "10+", label: "Active Sites" },
    //     { value: "50+", label: "Daily Users" },
    //     { value: "70%", label: "Efficiency Gain" },
    //   ],
    //   features: [
    //     "Real-time task workflows with Socket.IO",
    //     "MongoDB GridFS for multimedia storage",
    //     "Automated task chains based on construction logic",
    //     "90% uptime across unstable network conditions",
    //     "Real-time inventory tracking and management",
    //   ],
    //   technologies: ["React Native", "MERN Stack", "Socket.IO", "GridFS", "MongoDB"],
    //   gradient: "from-orange-50 to-red-50",
    //   iconGradient: "from-orange-500 to-red-600",
    //   icon: "CWA",
    // },
    // aiNotesGenerator: {
    //   id: "ai-notes-generator",
    //   title: "AI Notes Generator",
    //   subtitle: "Educational Platform",
    //   client: "EduTech Solutions",
    //   status: "Active",
    //   badges: ["Active", "AI-Powered"],
    //   description:
    //     "Created an AI-powered platform that generates structured PDF notes and video courses, serving 200+ students with automated content creation.",
    //   liveUrl: "https://ai-notes-generator.com", // Add your actual project URL
    //   githubUrl: "https://github.com/md-muzzammil-rashid/ai-notes-generator", // Add your GitHub URL
    //   metrics: [
    //     { value: "200+", label: "Active Users" },
    //     { value: "90%", label: "Time Saved" },
    //   ],
    //   features: [
    //     "OpenAI-powered content generation",
    //     "Automated PDF creation with ReactPDF",
    //     "AI-scripted video lecture generation",
    //     "Topic-wise content organization",
    //     "40% increase in user retention",
    //   ],
    //   technologies: ["React", "OpenAI", "ReactPDF", "Node.js", "MongoDB"],
    //   gradient: "from-purple-50 to-pink-50",
    //   iconGradient: "from-purple-500 to-pink-600",
    //   icon: "AI",
    // },
    // restaurantPOS: {
    //   id: "restaurant-pos-system",
    //   title: "Restaurant POS",
    //   subtitle: "Management System",
    //   client: "FoodChain Restaurants",
    //   status: "Deployed",
    //   badges: ["Deployed", "Real-time"],
    //   description:
    //     "Developed a comprehensive restaurant management POS system with real-time kitchen display and business analytics.",
    //   liveUrl: "https://restaurant-pos-demo.com", // Add your actual project URL
    //   githubUrl: "https://github.com/md-muzzammil-rashid/restaurant-pos", // Add your GitHub URL
    //   metrics: [
    //     { value: "45%", label: "Efficiency Up" },
    //     { value: "35%", label: "Faster Orders" },
    //     { value: "100%", label: "Secure" },
    //   ],
    //   features: [
    //     "Real-time kitchen display system",
    //     "JWT-based authentication & authorization",
    //     "Receipt printing and order tracking",
    //     "Business insights and analytics",
    //     "Category and product management",
    //   ],
    //   technologies: ["React", "WebSocket", "MongoDB", "Express.js", "JWT"],
    //   gradient: "from-green-50 to-teal-50",
    //   iconGradient: "from-green-500 to-teal-600",
    //   icon: "POS",
    // },
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconBg = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="freelancing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Freelancing Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            I offer comprehensive freelancing services to help businesses build scalable, modern applications. From
            concept to deployment, I deliver high-quality solutions tailored to your needs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {freelanceStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-center"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center bg-blue-100 text-blue-600`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center ${getIconBg(service.color)} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{service.startingPrice}</div>
                    <div className="text-sm text-gray-600">Starting from</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What's Included:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <Button
                    onClick={scrollToContact}
                    className={`bg-gradient-to-r ${getColorClasses(service.color)} hover:shadow-lg transition-all duration-300`}
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        {/* <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Here's what my clients say about working with me</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="text-xs text-blue-600 mt-1">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Proof of Work Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Proof of Work</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real projects, real results. Here are detailed case studies of my recent freelance work.
            </p>
          </div>

          <div className="space-y-12">
            {Object.values(proofOfWorkProjects).map((project, index) => (
              <Card key={project.id} className="bg-white shadow-xl border-0 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div
                    className={`bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-24 h-24 bg-gradient-to-br ${project.iconGradient} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto`}
                      >
                        {project.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                      <p className="text-gray-600">{project.subtitle}</p>
                      <div className="flex justify-center space-x-4 mt-4">
                        {project.badges.map((badge, badgeIndex) => (
                          <Badge
                            key={badgeIndex}
                            className={badgeIndex === 0 ? "bg-green-100 text-green-700" : ""}
                            variant={badgeIndex === 0 ? "default" : "outline"}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      {/* Project Links */}
                      <div className="flex justify-center space-x-2 mt-4">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/80 hover:bg-white"
                            onClick={() => window.open(project.liveUrl, "_blank")}
                          >
                            <Globe className="h-4 w-4 mr-1" />
                            Live
                          </Button>
                        )}
                        {/* {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/80 hover:bg-white"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                          >
                            <ArrowRight className="h-4 w-4 mr-1" />
                            Code
                          </Button>
                        )} */}
                      </div>
                    </div>
                  </div>
                  <CardContent className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Client: {project.client}</h5>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>

                      <div
                        className={`grid ${project.metrics.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"} gap-4`}
                      >
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h6 className="font-semibold text-gray-900 mb-2">Key Features Delivered:</h6>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Proof Section */}
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-12">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold mb-4">Verified Results & Client Satisfaction</h4>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  All projects include detailed documentation, source code delivery, deployment assistance, and 30-day
                  post-launch support.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Code Ownership</div>
                  <div className="text-xs text-gray-400">Full source code delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">30 Days</div>
                  <div className="text-sm text-gray-300">Free Support</div>
                  <div className="text-xs text-gray-400">Post-launch assistance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Communication</div>
                  <div className="text-xs text-gray-400">Regular updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">NDA</div>
                  <div className="text-sm text-gray-300">Confidentiality</div>
                  <div className="text-xs text-gray-400">Project security</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your requirements and bring your ideas to life with cutting-edge technology and proven
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <DollarSign className="h-5 w-5 mr-2" />
                Get Free Quote
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
              >
                View Portfolio
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
