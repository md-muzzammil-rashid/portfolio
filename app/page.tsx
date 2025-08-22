import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Terminal } from "@/components/terminal"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { InteractiveStats } from "@/components/interactive-stats"
import { TechStack } from "@/components/tech-stack"
import { Testimonials } from "@/components/testimonials"
import { BlogSection } from "@/components/blog-section"
import { Contact } from "@/components/contact"
import Freelancing from "@/components/freelance"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Terminal />
      <About />
      <Experience />
      <Freelancing/>
      <Projects />
      <Skills />
      <Education />
      <InteractiveStats />
      <TechStack />
      <Testimonials />
      {/* <BlogSection /> */}
      <Contact />
    </main>
  )
}
