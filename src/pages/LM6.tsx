import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LM6() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">LM6 Alloy</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            High-purity aluminum-silicon alloy for general purpose casting applications
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Overview</h2>
          <div className="max-w-4xl space-y-8 text-lg text-gray-400 font-light leading-relaxed">
            <p>
              LM6 is a British standard aluminum-silicon alloy (BS 1490) renowned for its excellent casting
              characteristics and versatility across multiple casting processes. With high silicon content, this
              alloy delivers exceptional fluidity, making it ideal for intricate castings with complex geometries
              and thin sections.
            </p>
            <p>
              Equivalent to A413 (USA) and AC3A (Japan), LM6 is non-heat-treatable but offers good corrosion
              resistance and machinability. Our LM6 ingots are produced to strict quality standards, ensuring
              consistent performance for sand casting, gravity die-casting, and pressure die-casting applications.
            </p>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Chemical Composition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 max-w-4xl">
            <div>
              <div className="text-3xl font-light mb-2">10-13%</div>
              <div className="text-gray-500 font-light text-sm">Silicon (Si)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.1%</div>
              <div className="text-gray-500 font-light text-sm">Copper (Cu)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.1%</div>
              <div className="text-gray-500 font-light text-sm">Magnesium (Mg)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.6%</div>
              <div className="text-gray-500 font-light text-sm">Iron (Fe)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.1%</div>
              <div className="text-gray-500 font-light text-sm">Zinc (Zn)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">Balance</div>
              <div className="text-gray-500 font-light text-sm">Aluminum (Al)</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Key Properties</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Exceptional Fluidity</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Superior flow characteristics enable casting of complex shapes with intricate details and thin walls
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Good Corrosion Resistance</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Natural resistance to atmospheric corrosion makes it suitable for outdoor and marine environments
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Excellent Machinability</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Easy to machine and finish, reducing post-casting processing time and costs
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Mechanical Properties (As Cast)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl">
            <div>
              <div className="text-5xl font-light mb-4">160 MPa</div>
              <div className="text-gray-500 font-light">Tensile Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">80 MPa</div>
              <div className="text-gray-500 font-light">Yield Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">3%</div>
              <div className="text-gray-500 font-light">Elongation</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">50 HB</div>
              <div className="text-gray-500 font-light">Hardness</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Applications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Automotive Components</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Decorative trim and badges</p>
                <p>Carburetor bodies</p>
                <p>Air intake manifolds</p>
                <p>Instrument panel housings</p>
                <p>Light weight brackets</p>
                <p>Ornamental fittings</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">General Engineering</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Food processing equipment</p>
                <p>Irrigation system components</p>
                <p>Agricultural machinery parts</p>
                <p>Water pump housings</p>
                <p>Valve bodies and fittings</p>
                <p>Decorative architectural hardware</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Consumer Products</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Cookware and kitchenware</p>
                <p>Appliance housings</p>
                <p>Garden equipment</p>
                <p>Tools and hardware</p>
                <p>Lighting fixtures</p>
                <p>Furniture components</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Marine & Outdoor</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Marine fittings and hardware</p>
                <p>Boat cleats and rails</p>
                <p>Outdoor furniture frames</p>
                <p>Irrigation components</p>
                <p>Playground equipment</p>
                <p>Street furniture</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 mb-32">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Ingot Specifications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Standard Sizes</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>5 kg ingots (300mm x 80mm x 40mm)</p>
                <p>10 kg ingots (400mm x 100mm x 50mm)</p>
                <p>20 kg T-bar ingots</p>
                <p>250 kg sow ingots</p>
                <p>Custom sizes available upon request</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8">Quality Assurance</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>BS 1490:1988 LM6 compliant</p>
                <p>ASTM B26 A413.0 equivalent</p>
                <p>Complete chemical analysis certificates</p>
                <p>ISO 9001:2015 certified production</p>
                <p>Third-party testing available</p>
                <p>Full batch traceability</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-12 py-5 border border-white/30 text-white font-medium text-lg hover:border-white transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
