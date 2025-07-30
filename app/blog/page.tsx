"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, BookOpen, Search, Filter, Tag, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices for 2025",
      excerpt:
        "Discover the latest patterns and techniques for building maintainable React applications that can scale with your business needs. Learn about component architecture, state management, and performance optimization.",
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
      image: "/placeholder.svg?height=300&width=500&text=React+Best+Practices",
      tags: ["React", "JavaScript", "Performance", "Architecture"],
      gradient: "from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      id: 2,
      title: "The Future of Full-Stack Development with Next.js 15",
      excerpt:
        "Exploring the new features in Next.js 15 and how they're revolutionizing the way we build full-stack applications. From server components to improved performance.",
      content: `# The Future of Full-Stack Development with Next.js 15

## Introduction

Next.js 15 brings revolutionary changes to full-stack development. This release introduces powerful features that streamline development and improve performance.

## Server Components Revolution

Server Components are changing how we think about React applications:

### Benefits of Server Components

- **Zero JavaScript Bundle:** Server Components don't ship JavaScript to the client
- **Direct Database Access:** Query databases directly in your components
- **Improved Performance:** Faster initial page loads and better SEO

\`\`\`jsx
// Server Component example
async function BlogPost({ id }) {
  const post = await db.post.findUnique({ where: { id } })
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
\`\`\`

## Enhanced App Router

The App Router continues to evolve with new features:

### Parallel Routes

Handle multiple UI states simultaneously:

\`\`\`jsx
// app/dashboard/@analytics/page.js
export default function Analytics() {
  return <AnalyticsChart />
}

// app/dashboard/@team/page.js  
export default function Team() {
  return <TeamOverview />
}
\`\`\`

### Intercepting Routes

Create modal-like experiences without losing URL state.

## Performance Improvements

Next.js 15 includes significant performance enhancements:

- **Faster Build Times:** Up to 40% faster builds
- **Improved Hot Reload:** Near-instant updates during development
- **Better Tree Shaking:** Smaller bundle sizes

## Conclusion

Next.js 15 represents the future of full-stack development, offering developers powerful tools to build fast, scalable applications with excellent developer experience.`,
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Next.js",
      author: "Md Muzzammil Rashid",
      image: "/placeholder.svg?height=300&width=500&text=Next.js+15",
      tags: ["Next.js", "Full-Stack", "Web Development", "Server Components"],
      gradient: "from-purple-500 to-blue-500",
      featured: true,
    },
    {
      id: 3,
      title: "Optimizing Database Performance: MongoDB vs PostgreSQL",
      excerpt:
        "A comprehensive comparison of MongoDB and PostgreSQL performance characteristics and when to choose each database for your project.",
      content: "Full article content here...",
      date: "2025-01-05",
      readTime: "12 min read",
      category: "Database",
      author: "Md Muzzammil Rashid",
      image: "/placeholder.svg?height=300&width=500&text=Database+Performance",
      tags: ["MongoDB", "PostgreSQL", "Performance", "Database Design"],
      gradient: "from-green-500 to-teal-500",
      featured: false,
    },
    {
      id: 4,
      title: "Mastering TypeScript: Advanced Types and Patterns",
      excerpt:
        "Deep dive into TypeScript's advanced type system, utility types, and design patterns that will make your code more robust and maintainable.",
      content: "Full article content here...",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "TypeScript",
      author: "Md Muzzammil Rashid",
      image: "/placeholder.svg?height=300&width=500&text=TypeScript+Advanced",
      tags: ["TypeScript", "JavaScript", "Types", "Patterns"],
      gradient: "from-indigo-500 to-purple-500",
      featured: false,
    },
    {
      id: 5,
      title: "Building Real-time Applications with Socket.IO",
      excerpt:
        "Learn how to create engaging real-time applications using Socket.IO, WebSockets, and modern JavaScript frameworks.",
      content: "Full article content here...",
      date: "2024-12-20",
      readTime: "7 min read",
      category: "Real-time",
      author: "Md Muzzammil Rashid",
      image: "/placeholder.svg?height=300&width=500&text=Socket.IO+Real-time",
      tags: ["Socket.IO", "WebSockets", "Real-time", "Node.js"],
      gradient: "from-orange-500 to-red-500",
      featured: false,
    },
    {
      id: 6,
      title: "Microservices Architecture: Lessons Learned",
      excerpt:
        "Insights from building and scaling microservices in production. Common pitfalls, best practices, and when to use microservices.",
      content: "Full article content here...",
      date: "2024-12-15",
      readTime: "15 min read",
      category: "Architecture",
      author: "Md Muzzammil Rashid",
      image: "/placeholder.svg?height=300&width=500&text=Microservices+Architecture",
      tags: ["Microservices", "Architecture", "Scalability", "DevOps"],
      gradient: "from-teal-500 to-green-500",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", label: "All Posts", count: blogPosts.length },
    { id: "React", label: "React", count: blogPosts.filter((p) => p.category === "React").length },
    { id: "Next.js", label: "Next.js", count: blogPosts.filter((p) => p.category === "Next.js").length },
    { id: "Database", label: "Database", count: blogPosts.filter((p) => p.category === "Database").length },
    { id: "TypeScript", label: "TypeScript", count: blogPosts.filter((p) => p.category === "TypeScript").length },
    { id: "Architecture", label: "Architecture", count: blogPosts.filter((p) => p.category === "Architecture").length },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-6">
              <BookOpen className="w-4 h-4 mr-2 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">Developer Blog</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Insights & <span className="gradient-text">Tutorials</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing knowledge, experiences, and insights from my journey as a full-stack developer
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                />
              </div>
              <Button
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 rounded-xl font-semibold bg-transparent h-12 px-6"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured <span className="gradient-text">Articles</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="modern-card bg-white border-0 shadow-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} text-white border-0`}>
                      Featured
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-black/50 text-white border-0">{post.category}</Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button size="sm" className="modern-btn">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All <span className="gradient-text">Articles</span>
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="modern-card bg-white border-0 shadow-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredPost(post.id)}
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
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
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

                      <Link href={`/blog/${post.id}`}>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            hoveredPost === post.id ? "translate-x-1 text-purple-600" : ""
                          }`}
                        />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Articles</h2>
          <p className="text-purple-100 text-lg mb-8">
            Get notified when I publish new articles about web development, programming, and tech insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white focus:ring-white rounded-xl"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8 rounded-xl font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
