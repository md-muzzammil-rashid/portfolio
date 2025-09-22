export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Thompson",
      position: "Founder & CEO",
      bio: "Visionary leader with 15+ years in tech innovation",
      image: "/professional-ceo-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Maria Garcia",
      position: "Head of Design",
      bio: "Award-winning designer passionate about user experience",
      image: "/professional-designer-headshot.png",
      social: {
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "David Kim",
      position: "Lead Developer",
      bio: "Full-stack architect building scalable solutions",
      image: "/professional-developer-headshot.png",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sophie Laurent",
      position: "Product Manager",
      bio: "Strategic thinker bridging business and technology",
      image: "/professional-product-manager-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            The brilliant minds behind Tech Lab's innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-black mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3 font-light">{member.position}</p>
                <p className="text-sm text-gray-500 mb-4 font-light">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      <span className="text-xs font-medium">{platform.charAt(0).toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
