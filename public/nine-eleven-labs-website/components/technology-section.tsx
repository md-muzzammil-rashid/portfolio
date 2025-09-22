export function TechnologySection() {
  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      category: "AI & ML",
      techs: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn", "Pandas"],
    },
    {
      category: "Design & Tools",
      techs: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow", "Notion"],
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-6">Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We work with cutting-edge technologies to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-500 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-medium mb-6 group-hover:text-white">{category.category}</h3>
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ animationDelay: `${techIndex * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gray-400 group-hover:bg-white rounded-full"></div>
                    <span className="font-light">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
