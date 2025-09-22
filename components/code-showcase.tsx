"use client"

import { useState, useEffect } from "react"
import { Code, Terminal, Smartphone, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [typedCode, setTypedCode] = useState("")

  const codeExamples = [
    {
      title: "Developer Profile",
      icon: Code,
      language: "javascript",
      gradient: "from-purple-500 to-blue-500",
      code: `const developer = {
  name: 'Md Muzzammil Rashid',
  role: 'Software Developer Engineer',
  location: 'Bangalore, Karnataka',
  experience: '2+ years',
  skills: [
    'React', 'Next.js', 'Node.js', 
    'MongoDB', 'TypeScript', 'Python'
  ],
  currentFocus: 'Building scalable applications',
  passion: 'Creating amazing user experiences',
  available: true,
  contact: 'mdmuzzammilrashid@gmail.com'
}

console.log(\`Hello! I'm \${developer.name}\`)
console.log(\`I specialize in \${developer.currentFocus}\`)`,
    },
    {
      title: "React Component",
      icon: Globe,
      language: "jsx",
      gradient: "from-blue-500 to-cyan-500",
      code: `import React, { useState, useEffect } from 'react'

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={\`project-card \${isVisible ? 'animate-in' : ''}\`}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.technologies.map(tech => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}`,
    },
    {
      title: "React Hook",
      icon: Globe,
      language: "jsx",
      gradient: "from-green-500 to-teal-500",
      code: `import React, { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  return [storedValue, setValue]
}

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleTheme = () => {
    setIsAnimating(true)
    setTheme(theme === 'light' ? 'dark' : 'light')
    
    setTimeout(() => setIsAnimating(false), 300)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className={\`theme-toggle \${isAnimating ? 'animating' : ''}\`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}`,
    },
    {
      title: "React Form",
      icon: Code,
      language: "jsx",
      gradient: "from-orange-500 to-red-500",
      code: `import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={\`form-input \${errors.name ? 'error' : ''}\`}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>
      
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={\`form-input \${errors.email ? 'error' : ''}\`}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className={\`form-input \${errors.message ? 'error' : ''}\`}
        />
        {errors.message && <span className="error-text">{errors.message}</span>}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="submit-button"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}`,
    },
    {
      title: "TypeScript Utilities",
      icon: Smartphone,
      language: "typescript",
      gradient: "from-pink-500 to-purple-500",
      code: `// Advanced TypeScript utility types and functions
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  preferences: {
    theme: 'light' | 'dark'
    notifications: boolean
    language: string
  }
}

type UserUpdate = Partial<Pick<User, 'name' | 'email' | 'preferences'>>

class UserService {
  private users: Map<string, User> = new Map()

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      ...userData
    }
    
    this.users.set(user.id, user)
    return user
  }

  async updateUser(id: string, updates: UserUpdate): Promise<User | null> {
    const existingUser = this.users.get(id)
    
    if (!existingUser) {
      throw new Error(\`User with id \${id} not found\`)
    }

    const updatedUser: User = {
      ...existingUser,
      ...updates,
      preferences: {
        ...existingUser.preferences,
        ...updates.preferences
      }
    }

    this.users.set(id, updatedUser)
    return updatedUser
  }

  async getUsersByRole<T extends User['role']>(
    role: T
  ): Promise<User[]> {
    return Array.from(this.users.values())
      .filter(user => user.role === role)
  }
}

// Usage example
const userService = new UserService()
const newUser = await userService.createUser({
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  preferences: {
    theme: 'dark',
    notifications: true,
    language: 'en'
  }
})`,
    },
    {
      title: "DevOps Config",
      icon: Terminal,
      language: "yaml",
      gradient: "from-indigo-500 to-purple-500",
      code: `# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mongodb://mongo:27017/portfolio
    depends_on:
      - mongo
      - redis
    volumes:
      - ./uploads:/app/uploads
    restart: unless-stopped

  mongo:
    image: mongo:5.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=secure_password

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app

volumes:
  mongo_data:
  redis_data:`,
    },
  ]

  useEffect(() => {
    const currentCode = codeExamples[activeTab].code
    setTypedCode("")

    const typeCode = () => {
      let index = 0
      const timer = setInterval(() => {
        if (index < currentCode.length) {
          setTypedCode(currentCode.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
        }
      }, 20)

      return timer
    }

    const timer = setTimeout(typeCode, 300)
    return () => clearTimeout(timer)
  }, [activeTab])

  // Function to add syntax highlighting
  const renderCodeWithHighlighting = (code: string) => {
    return code
      .replace(/const|let|var/g, '<span style="color: #c792ea;">$&</span>')
      .replace(/('([^']*)'|"([^"]*)")/g, '<span style="color: #c3e88d;">$1</span>')
      .replace(/(\d+)/g, '<span style="color: #f78c6c;">$1</span>')
      .replace(/(true|false|null|undefined)/g, '<span style="color: #ff5370;">$1</span>')
      .replace(/(console\.log)/g, '<span style="color: #82aaff;">$1</span>')
      .replace(/(\$\{[^}]*\})/g, '<span style="color: #ffcb6b;">$1</span>')
      .replace(/(\w+):/g, '<span style="color: #82aaff;">$1</span>:')
      .replace(/\/\/(.*)/g, '<span style="color: #546e7a;">// $1</span>')
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-700 rounded-full mb-6">
            <Terminal className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm font-semibold text-green-400">Code Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            See My Code{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">In Action</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">A glimpse into my developer profile through code</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Code Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {codeExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${example.gradient} text-white shadow-lg`
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <example.icon className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">{example.title}</div>
                      <div className="text-xs opacity-75">{example.language}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:col-span-3">
            <Card className="bg-gray-900 border-gray-700 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 p-4 bg-gray-800 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">
                  {codeExamples[activeTab].title.toLowerCase().replace(/\s+/g, "-")}.{codeExamples[activeTab].language}
                </span>
              </div>
              <CardContent className="p-0">
                <div className="relative">
                  <pre className="p-6 text-sm overflow-x-auto bg-gray-900 text-gray-100 min-h-[400px]">
                    <code
                      className={`language-${codeExamples[activeTab].language}`}
                      dangerouslySetInnerHTML={{
                        __html:
                          renderCodeWithHighlighting(codeExamples[activeTab].code) +
                          '<span class="animate-pulse text-green-400">|</span>',
                      }}
                    />
                  </pre>

                  {/* Line numbers */}
                  <div className="absolute left-0 top-0 p-6 text-gray-500 text-sm select-none pointer-events-none">
                    {codeExamples[activeTab].code.split("\n").map((_, index) => (
                      <div key={index} className="leading-6">
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies Featured</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "React Native",
              "TypeScript",
              "Docker",
              "Nginx",
              "Redis",
              "Authentication",
              "REST APIs",
              "Mongoose",
              "Git",
              "Linux",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
