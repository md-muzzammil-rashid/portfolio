import { Card, CardContent } from "@/components/ui/card"
import { Building2, ShoppingCart, Heart, TrendingUp } from "lucide-react"

export function CustomDevSection() {
  const useCases = [
    {
      icon: Building2,
      title: "Finance",
      description: "Trading platforms, risk management systems, and regulatory compliance solutions",
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "E-commerce platforms, inventory management, and customer experience solutions",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient management systems, telemedicine platforms, and healthcare analytics",
    },
    {
      icon: TrendingUp,
      title: "Manufacturing",
      description: "Supply chain optimization, IoT integration, and production management systems",
    },
  ]

  return (
    <section id="custom-development" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Your Vision, Our Code.</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
            We specialize in creating tailored software solutions that perfectly align with your business objectives.
            Our custom development approach ensures every line of code serves your unique requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 text-sm text-pretty">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8 text-pretty">
            From concept to deployment, we handle every aspect of your custom software development journey.
          </p>
        </div>
      </div>
    </section>
  )
}
