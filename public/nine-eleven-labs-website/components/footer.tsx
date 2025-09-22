import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Company: ["About", "Careers", "News", "Contact"],
    Services: ["Enterprise Software", "SaaS Products", "Custom Development", "Consulting"],
    Resources: ["Documentation", "Support", "Blog", "Case Studies"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Tech Labs</h3>
            <p className="text-gray-400 text-pretty leading-relaxed mb-6">
              Building the future of enterprise technology with scalable software solutions and innovative SaaS
              products.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Tech Labs. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Built with precision and passion for innovation.</p>
        </div>
      </div>
    </footer>
  )
}
