import { Card, CardContent } from "@/components/ui/card"
import { Server, Cloud, Code, Layers } from "lucide-react"

export function SolutionsSection() {
  const solutions = [
    {
      icon: Server,
      title: "Enterprise Software Development",
      description:
        "Robust, scalable enterprise applications built to handle complex business processes and high-volume operations.",
    },
    {
      icon: Layers,
      title: "SaaS Products",
      description:
        "Cloud-native software-as-a-service solutions designed for rapid deployment and seamless user experiences.",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions crafted specifically for your unique business requirements and workflows.",
    },
    {
      icon: Cloud,
      title: "Cloud & Integration Services",
      description:
        "Comprehensive cloud migration, API development, and system integration services for modern businesses.",
    },
  ]

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-balance">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-black cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 text-balance">{solution.title}</h3>
                <p className="text-gray-600 text-pretty leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
