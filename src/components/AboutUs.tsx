import { Users, Award, Target, TrendingUp } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-600/5"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="text-white text-xs font-medium tracking-[0.15em] uppercase">About Us</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            About Bay Aluminium
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Building excellence through experience and dedication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-4xl font-bold text-white mb-8 tracking-tight">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
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

          <div className="grid grid-cols-2 gap-5">
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <Users className="w-10 h-10 text-red-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">Skilled professionals with years of industry experience</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <Award className="w-10 h-10 text-red-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Certified Quality</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">ISO standards and industry certifications</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <Target className="w-10 h-10 text-red-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Precision Focus</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">Meticulous attention to every detail</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <TrendingUp className="w-10 h-10 text-red-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Continuous Growth</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">Investing in innovation and technology</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-red-600 to-red-500 p-16 rounded-3xl shadow-2xl shadow-red-600/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgOC44NC03LjE2IDE2LTE2IDE2cy0xNi03LjE2LTE2LTE2IDcuMTYtMTYgMTYtMTYgMTYgNy4xNiAxNiAxNnptMCAwYzAgOC44NC03LjE2IDE2LTE2IDE2cy0xNi03LjE2LTE2LTE2IDcuMTYtMTYgMTYtMTYgMTYgNy4xNiAxNiAxNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="grid md:grid-cols-3 gap-12 text-center relative">
            <div className="group">
              <div className="text-6xl font-bold text-white mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">5+</div>
              <div className="text-red-50 font-light text-sm tracking-[0.15em] uppercase">Years of Excellence</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">50+</div>
              <div className="text-red-50 font-light text-sm tracking-[0.15em] uppercase">Global Partners</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">100%</div>
              <div className="text-red-50 font-light text-sm tracking-[0.15em] uppercase">Commitment to Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
