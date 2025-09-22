export function AboutSection() {
  return (
    <section id="about-us" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Building the Future of Enterprise Technology
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-pretty leading-relaxed">
              At Tech Labs, we're not just developers—we're architects of digital transformation. Our mission is to
              create scalable, secure, and innovative software solutions that drive business growth and operational
              excellence.
            </p>
            <p className="text-lg text-gray-400 text-pretty leading-relaxed">
              What sets us apart is our commitment to understanding your unique challenges and delivering solutions that
              don't just meet today's needs, but anticipate tomorrow's opportunities.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-white/20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
