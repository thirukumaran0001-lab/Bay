export function AboutUs() {
  return (
    <section id="about" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="mb-32">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-black mb-12 tracking-tight leading-[1.1]">
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
          <div>
            <div className="text-5xl font-light text-black mb-4">5+</div>
            <div className="text-gray-600 font-light">Years of Excellence</div>
          </div>
          <div>
            <div className="text-5xl font-light text-black mb-4">50+</div>
            <div className="text-gray-600 font-light">Global Partners</div>
          </div>
          <div>
            <div className="text-5xl font-light text-black mb-4">99.9%</div>
            <div className="text-gray-600 font-light">Purity Standard</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-light text-black mb-6">Expert Team</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Skilled professionals with years of industry experience in metallurgy and production engineering
            </p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-light text-black mb-6">Certified Quality</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              ISO standards and industry certifications ensuring consistent quality across all products
            </p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-light text-black mb-6">Precision Focus</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Meticulous attention to every detail in production and quality control processes
            </p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-light text-black mb-6">Global Reach</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Serving automotive, aerospace, and industrial applications worldwide with reliable delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
