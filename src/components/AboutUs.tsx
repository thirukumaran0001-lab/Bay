export function AboutUs() {
  return (
    <section id="about" className="py-40 bg-gradient-to-b from-orange-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="mb-32">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent mb-12 tracking-tight leading-[1.1]">
            About Bay Aluminium
          </h2>
          <div className="max-w-4xl">
            <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed mb-8">
              With over 5 years of proven excellence in aluminum smelting and production, Bay Aluminium has established itself as a trusted partner in the global metals industry.
            </p>
            <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed">
              Our team brings decades of combined experience in metallurgy, production engineering, and quality assurance, delivering superior quality aluminum products through precision engineering and unwavering dedication.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-24 mb-32">
          <div className="group cursor-default p-8 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-110">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-orange-800 font-semibold">Years of Excellence</div>
          </div>
          <div className="group cursor-default p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-blue-800 font-semibold">Global Partners</div>
          </div>
          <div className="group cursor-default p-8 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110">
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">99.9%</div>
            <div className="text-emerald-800 font-semibold">Purity Standard</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="group p-8 rounded-2xl border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent hover:from-orange-100 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 group-hover:scale-105 transition-transform duration-300">Expert Team</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skilled professionals with years of industry experience in metallurgy and production engineering
            </p>
          </div>
          <div className="group p-8 rounded-2xl border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent hover:from-blue-100 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 group-hover:scale-105 transition-transform duration-300">Certified Quality</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              ISO standards and industry certifications ensuring consistent quality across all products
            </p>
          </div>
          <div className="group p-8 rounded-2xl border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50 to-transparent hover:from-emerald-100 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6 group-hover:scale-105 transition-transform duration-300">Precision Focus</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Meticulous attention to every detail in production and quality control processes
            </p>
          </div>
          <div className="group p-8 rounded-2xl border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50 to-transparent hover:from-cyan-100 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-cyan-600 mb-6 group-hover:scale-105 transition-transform duration-300">Global Reach</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Serving automotive, aerospace, and industrial applications worldwide with reliable delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
