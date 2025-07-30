import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Md Muzzammil Rashid - Software Developer Engineer",
  description:
    "Full-stack developer specializing in React, Node.js, and modern web technologies. Building scalable applications that serve thousands of users.",
  keywords: "software developer, full-stack developer, react, nodejs, javascript, typescript, web development",
  authors: [{ name: "Md Muzzammil Rashid" }],
  openGraph: {
    title: "Md Muzzammil Rashid - Software Developer Engineer",
    description: "Full-stack developer specializing in React, Node.js, and modern web technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
