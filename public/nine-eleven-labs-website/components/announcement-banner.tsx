"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-black text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-50" />
      <div className="container mx-auto flex items-center justify-center relative z-10">
        <div className="flex items-center gap-3 text-sm md:text-base">
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span className="font-medium">
            🚀 <strong>Limited Time:</strong> Get 30% off MVP development packages -
            <Button variant="link" className="text-white underline p-0 ml-1 h-auto font-semibold hover:text-gray-200">
              Claim Now
            </Button>
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white hover:bg-white/10 p-1"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
