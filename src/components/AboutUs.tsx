import { Users, Award, Target, TrendingUp } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Bay Aluminium
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building excellence through experience and dedication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over 5 years of proven excellence in aluminum smelting and production, Bay Aluminium has established itself as a trusted partner in the global metals industry. Our journey began with a simple commitment: to deliver the highest quality aluminum products through precision engineering and unwavering dedication.
              </p>
              <p>
                Our team of hardworking professionals brings decades of combined experience in metallurgy, production engineering, and quality assurance. Every member of our organization shares a passion for excellence and a deep understanding of the critical role aluminum plays in modern manufacturing.
              </p>
              <p>
                From automotive components to aerospace applications, our products power innovation across industries worldwide. We don't just produce aluminum; we forge partnerships built on reliability, quality, and mutual success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border-l-4 border-red-600 hover:border-red-500 transition-all duration-300 shadow-lg">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Expert Team</h4>
              <p className="text-gray-400">Skilled professionals with years of industry experience</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border-l-4 border-red-600 hover:border-red-500 transition-all duration-300 shadow-lg">
              <Award className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Certified Quality</h4>
              <p className="text-gray-400">ISO standards and industry certifications</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border-l-4 border-red-600 hover:border-red-500 transition-all duration-300 shadow-lg">
              <Target className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Precision Focus</h4>
              <p className="text-gray-400">Meticulous attention to every detail</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border-l-4 border-red-600 hover:border-red-500 transition-all duration-300 shadow-lg">
              <TrendingUp className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Continuous Growth</h4>
              <p className="text-gray-400">Investing in innovation and technology</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 p-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-red-100 font-semibold uppercase tracking-wide">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-red-100 font-semibold uppercase tracking-wide">Global Partners</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100 font-semibold uppercase tracking-wide">Commitment to Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
