"use client"

import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"

export function Terminal() {
  const [copied, setCopied] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

const developerInfo = `{
  "developer": {
    "name": "Md. Muzzammil Rashid",
    "role": "Full Stack Developer",
    "location": "Bangalore, Karnataka",
    "experience": "1+ Year",
    "status": "actively_looking_for_full_time_role",
    "specialties": [
      "React.js",
      "Node.js",
      "Spring Boot",
      "React Native",
      "MongoDB",
      "GoLang"
    ],
    "contact": {
      "email": "mdmuzzammilrashid@gmail.com",
      "linkedin": "linkedin.com/in/md-muzzammil-rashid",
      "github": "github.com/md-muzzammil-rashid",
      "leetcode": "leetcode.com/u/md-muzzammil-rashid"
    },
    "current_focus": [
      "System Design & DSA Revision",
      "MERN & Spring Boot Projects",
      "Interview Preparation"
    ],
    "languages": {
      "Java": "advanced",
      "GoLang": "advanced",
      "JavaScript": "advanced",
      "TypeScript": "intermediate",
      "Python": "intermediate",
      "C/C++": "intermediate",
      "SQL": "intermediate"
    },
    "tools": [
      "VS Code",
      "Git",
      "Spring Tool Suite",
      "Postman",
      "MongoDB Compass",
      "Figma"
    ],
    "last_updated": "2025-08-07T21:00:00+05:30"
  }
}`


  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < developerInfo.length) {
        setDisplayedText(developerInfo.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 20)

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(developerInfo)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  // Function to colorize JSON syntax
  const colorizeJSON = (text: string) => {
    return text
      .replace(/"([^"]+)":/g, '<span class="text-blue-400">"$1"</span>:') // Keys in blue
      .replace(/: "([^"]+)"/g, ': <span class="text-yellow-300">"$1"</span>') // String values in yellow
      .replace(/: (\d+)/g, ': <span class="text-purple-400">$1</span>') // Numbers in purple
      .replace(/: (true|false)/g, ': <span class="text-red-400">$1</span>') // Booleans in red
      .replace(/\[/g, '<span class="text-cyan-400">[</span>') // Arrays in cyan
      .replace(/\]/g, '<span class="text-cyan-400">]</span>')
      .replace(/{/g, '<span class="text-green-400">{</span>') // Objects in green
      .replace(/}/g, '<span class="text-green-400">}</span>')
      .replace(/,/g, '<span class="text-gray-400">,</span>') // Commas in gray
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Developer Profile</h2>
          <p className="text-lg text-gray-600">A JSON representation of my technical profile</p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono">developer-profile.json</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Content - Fixed Height */}
          <div className="h-96 p-6 bg-gray-900 font-mono text-sm leading-relaxed overflow-y-auto">
            <div className="flex items-start mb-4">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-blue-400">cat developer-profile.json</span>
            </div>
            <div className="whitespace-pre-wrap">
              <div
                className="text-white"
                dangerouslySetInnerHTML={{
                  __html: colorizeJSON(displayedText),
                }}
              />
              {isTyping && <span className="animate-pulse bg-green-400 text-green-400 ml-1">|</span>}
            </div>
            {!isTyping && (
              <div className="mt-4 flex items-center">
                <span className="text-gray-500 mr-2">$</span>
                <span className="animate-pulse bg-green-400 text-green-400">|</span>
              </div>
            )}
          </div>
        </div>

        {/* Terminal Stats */}
        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Lines of Code</p>
                <p className="text-2xl font-bold text-gray-900">847</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-mono text-lg">{"{}"}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">File Size</p>
                <p className="text-2xl font-bold text-gray-900">2.1 KB</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-mono text-lg">📄</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Last Modified</p>
                <p className="text-2xl font-bold text-gray-900">Today</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-mono text-lg">⏰</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
