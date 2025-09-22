import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SaasSection() {
  const products = [
    {
      name: "DataFlow Pro",
      tagline: "Enterprise data management made simple",
      description: "Streamline your data workflows with our comprehensive analytics and reporting platform.",
      image: "/modern-data-dashboard-interface.png",
    },
    {
      name: "CloudSync Enterprise",
      tagline: "Seamless cloud integration platform",
      description: "Connect all your business systems with our powerful integration and automation tools.",
      image: "/cloud-integration-dashboard.png",
    },
    {
      name: "SecureVault",
      tagline: "Next-generation security management",
      description: "Protect your digital assets with our advanced security monitoring and compliance platform.",
      image: "/security-monitoring-interface.png",
    },
  ]

  return (
    <section id="saas-products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-balance">Our SaaS Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Powerful software solutions ready to transform your business operations
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 text-balance">{product.name}</h3>
                <p className="text-xl text-gray-500 mb-6 text-pretty">{product.tagline}</p>
                <p className="text-lg text-gray-600 mb-8 text-pretty leading-relaxed">{product.description}</p>
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="aspect-[3/2] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
