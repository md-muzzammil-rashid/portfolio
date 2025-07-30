"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, ArrowLeft, Share2, Tag, Heart, MessageCircle, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useParams } from "next/navigation"
import MarkdownRenderer from "@/components/markdown-renderer"

export default function BlogPostPage() {
  const params = useParams()
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [readingProgress, setReadingProgress] = useState(0)

  // Mock blog post data - in real app, fetch from API
  const blogPost = {
    id: 1,
    title: "Building Scalable React Applications: Best Practices for 2025",
    excerpt:
      "Discover the latest patterns and techniques for building maintainable React applications that can scale with your business needs.",
    content: `# Building Scalable React Applications: Best Practices for 2025

## Introduction

Building scalable React applications is more important than ever in 2025. As applications grow in complexity and user base, developers need to adopt patterns and practices that ensure maintainability, performance, and developer experience.

## Component Architecture

The foundation of any scalable React application lies in its component architecture. Here are the key principles to follow:

### 1. Single Responsibility Principle

Each component should have a single, well-defined responsibility. This makes components easier to test, debug, and reuse across your application.

\`\`\`jsx
// Good: Single responsibility
const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <UserAvatar src={user.avatar} />
      <UserInfo name={user.name} email={user.email} />
    </div>
  )
}

// Better: Separate concerns
const UserAvatar = ({ src }) => (
  <img src={src || "/placeholder.svg"} alt="User avatar" className="avatar" />
)

const UserInfo = ({ name, email }) => (
  <div className="user-info">
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
)
\`\`\`

### 2. Composition over Inheritance

React's composition model is powerful. Instead of creating complex inheritance hierarchies, compose smaller components together.

## State Management

Effective state management is crucial for scalable applications. Consider these approaches:

### Local State First

Start with local component state using useState and useReducer. Only lift state up when multiple components need to share it.

### Context for Theme and User Data

Use React Context for data that needs to be accessed by many components, like theme settings or user authentication state.

### External State Management

For complex applications, consider libraries like Zustand, Redux Toolkit, or Jotai for global state management.

## Performance Optimization

Performance is key to user experience. Here are essential optimization techniques:

### Code Splitting

Use React.lazy() and Suspense to split your code and load components only when needed.

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

### Memoization

Use React.memo, useMemo, and useCallback judiciously to prevent unnecessary re-renders.

## Testing Strategy

A comprehensive testing strategy ensures your application remains reliable as it scales:

- **Unit Tests:** Test individual components and functions
- **Integration Tests:** Test component interactions  
- **E2E Tests:** Test complete user workflows

## Conclusion

Building scalable React applications requires careful planning, consistent patterns, and continuous refactoring. By following these best practices, you'll create applications that can grow with your business needs while maintaining code quality and developer productivity.

Remember, scalability isn't just about handling more users—it's about creating a codebase that your team can work with effectively as it grows.`,
    date: "2025-01-15",
    readTime: "8 min read",
    category: "React",
    author: "Md Muzzammil Rashid",
    authorImage: "/placeholder.svg?height=50&width=50&text=MR",
    image: "/placeholder.svg?height=400&width=800&text=React+Best+Practices",
    tags: ["React", "JavaScript", "Performance", "Architecture", "Best Practices"],
    gradient: "from-blue-500 to-cyan-500",
    views: 1234,
    comments: 18,
  }

  const relatedPosts = [
    {
      id: 2,
      title: "The Future of Full-Stack Development with Next.js 15",
      image: "/placeholder.svg?height=200&width=300&text=Next.js+15",
      date: "2025-01-10",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Optimizing Database Performance: MongoDB vs PostgreSQL",
      image: "/placeholder.svg?height=200&width=300&text=Database+Performance",
      date: "2025-01-05",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "Mastering TypeScript: Advanced Types and Patterns",
      image: "/placeholder.svg?height=200&width=300&text=TypeScript+Advanced",
      date: "2024-12-28",
      readTime: "10 min read",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content")
      if (article) {
        const scrollTop = window.scrollY
        const docHeight = article.offsetHeight
        const winHeight = window.innerHeight
        const scrollPercent = scrollTop / (docHeight - winHeight)
        setReadingProgress(Math.min(100, Math.max(0, scrollPercent * 100)))
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLike = () => {
    setLiked(!liked)
    setLikes((prev) => (liked ? prev - 1 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-gray-600 hover:text-purple-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-8">
            <Badge className={`bg-gradient-to-r ${blogPost.gradient} text-white border-0 mb-4`}>
              {blogPost.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">{blogPost.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{blogPost.excerpt}</p>
          </div>

          {/* Author and Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={blogPost.authorImage || "/placeholder.svg"}
                alt={blogPost.author}
                className="w-12 h-12 rounded-full border-2 border-purple-200"
              />
              <div>
                <div className="font-semibold text-gray-900">{blogPost.author}</div>
                <div className="text-sm text-gray-500">Full-Stack Developer</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {blogPost.views.toLocaleString()} views
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLike}
              className={`rounded-full ${liked ? "bg-red-50 border-red-200 text-red-600" : ""}`}
            >
              <Heart className={`mr-2 h-4 w-4 ${liked ? "fill-current" : ""}`} />
              {likes}
            </Button>
            <Button variant="outline" size="sm" className="rounded-full bg-transparent">
              <MessageCircle className="mr-2 h-4 w-4" />
              {blogPost.comments}
            </Button>
            <Button variant="outline" size="sm" className="rounded-full bg-transparent">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
            <img src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} className="w-full h-96 object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${blogPost.gradient} opacity-10`}></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article
                id="article-content"
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 prose-strong:text-gray-900 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
              >
                <MarkdownRenderer content={blogPost.content} />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {blogPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-12 modern-card bg-gradient-to-r from-purple-50 to-blue-50 border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <img
                      src={blogPost.authorImage || "/placeholder.svg"}
                      alt={blogPost.author}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{blogPost.author}</h3>
                      <p className="text-purple-600 font-medium mb-4">Full-Stack Developer & Tech Writer</p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Passionate about building scalable applications and sharing knowledge with the developer
                        community. Currently working on innovative projects that serve thousands of users worldwide.
                      </p>
                      <div className="flex gap-3">
                        <Button size="sm" className="modern-btn">
                          Follow
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-xl bg-transparent">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Table of Contents */}
                <Card className="modern-card bg-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#introduction" className="block text-gray-600 hover:text-purple-600 transition-colors">
                        Introduction
                      </a>
                      <a
                        href="#component-architecture"
                        className="block text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Component Architecture
                      </a>
                      <a
                        href="#state-management"
                        className="block text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        State Management
                      </a>
                      <a
                        href="#performance-optimization"
                        className="block text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Performance Optimization
                      </a>
                      <a
                        href="#testing-strategy"
                        className="block text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Testing Strategy
                      </a>
                      <a href="#conclusion" className="block text-gray-600 hover:text-purple-600 transition-colors">
                        Conclusion
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Share */}
                <Card className="modern-card bg-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Share this article</h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start rounded-xl bg-transparent">
                        <Share2 className="mr-2 h-4 w-4" />
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start rounded-xl bg-transparent">
                        <Share2 className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start rounded-xl bg-transparent">
                        <Share2 className="mr-2 h-4 w-4" />
                        Copy Link
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related <span className="gradient-text">Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="modern-card bg-white border-0 shadow-lg overflow-hidden cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
