import { Shield, Zap, Lightbulb } from "lucide-react"

export function WhyChooseSection() {
  const values = [
    {
      icon: Zap,
      title: "Scalability",
      description:
        "Built to grow with your business, our solutions handle increasing demands without compromising performance.",
    },
    {
      icon: Shield,
      title: "Security",
      description:
        "Enterprise-grade security measures protect your data and ensure compliance with industry standards.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technologies and methodologies keep you ahead of the competition.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-balance">Why Choose Tech Labs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Three core principles that drive everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
              <p className="text-gray-600 text-lg text-pretty leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
