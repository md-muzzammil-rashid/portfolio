"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    title: "The Future of Enterprise Software Development",
    excerpt: "Exploring how AI and cloud-native technologies are reshaping enterprise software development practices.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "/blog-enterprise-software.png",
  },
  {
    title: "Building Scalable Microservices Architecture",
    excerpt:
      "A comprehensive guide to designing and implementing microservices that can handle enterprise-scale traffic.",
    author: "Michael Rodriguez",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "Architecture",
    image: "/blog-microservices.png",
  },
  {
    title: "Security Best Practices for Modern Applications",
    excerpt: "Essential security measures every enterprise should implement to protect their applications and data.",
    author: "Emily Johnson",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Security",
    image: "/blog-security.png",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our engineering team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Article Image</span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-black bg-gray-100 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="outline" className="group bg-transparent">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest insights and updates</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button className="bg-black text-white hover:bg-gray-800">Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
