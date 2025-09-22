import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { SolutionsSection } from "@/components/solutions-section"
import { SaasSection } from "@/components/saas-section"
import { CustomDevSection } from "@/components/custom-dev-section"
import { MvpSection } from "@/components/mvp-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TechnologySection } from "@/components/technology-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ClientLogosSection } from "@/components/client-logos-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { PartnersSection } from "@/components/partners-section"
import { PricingSection } from "@/components/pricing-section"
import { BlogSection } from "@/components/blog-section"
import { CareersSection } from "@/components/careers-section"
import { CtaBanner } from "@/components/cta-banner"
import { ProductDemoSection } from "@/components/product-demo-section"
import { FaqSection } from "@/components/faq-section"
import { LiveChat } from "@/components/live-chat"
import { DetailedServicesSection } from "@/components/detailed-services-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Navigation />
      <HeroSection />
      <ClientLogosSection />
      <AboutSection />
      <StatsSection />
      <SolutionsSection />
      <CtaBanner />
      <SaasSection />
      <ProductDemoSection />
      <CustomDevSection />
      <MvpSection />
      <DetailedServicesSection />
      <PricingSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <TechnologySection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PartnersSection />
      <TeamSection />
      <BlogSection />
      <FaqSection />
      <CareersSection />
      <ContactSection />
      <Footer />
      <LiveChat />
    </main>
  )
}
