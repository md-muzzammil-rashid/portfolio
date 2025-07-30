"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogSection() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      title: "Building Scalable React Applications: Best Practices for 2025",
      excerpt:
        "Discover the latest patterns and techniques for building maintainable React applications that can scale with your business needs.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg?height=200&width=300&text=React+Best+Practices",
      tags: ["React", "JavaScript", "Performance"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "The Future of Full-Stack Development with Next.js 15",
      excerpt:
        "Exploring the new features in Next.js 15 and how they're revolutionizing the way we build full-stack applications.",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Next.js",
      image: "/placeholder.svg?height=200&width=300&text=Next.js+15",
      tags: ["Next.js", "Full-Stack", "Web Development"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Optimizing Database Performance: MongoDB vs PostgreSQL",
      excerpt:
        "A comprehensive comparison of MongoDB and PostgreSQL performance characteristics and when to choose each database.",
      date: "2025-01-05",
      readTime: "12 min read",
      category: "Database",
      image: "/placeholder.svg?height=200&width=300&text=Database+Performance",
      tags: ["MongoDB", "PostgreSQL", "Performance"],
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <BookOpen className="w-4 h-4 mr-2 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600">Latest Insights</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From My <span className="gradient-text">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and insights from my development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="modern-card bg-white border-0 shadow-lg overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredPost(index)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} text-white border-0`}>
                  {post.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredPost === index ? "translate-x-1 text-purple-600" : ""
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button className="modern-btn group">
              <TrendingUp className="mr-2 h-5 w-5" />
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
