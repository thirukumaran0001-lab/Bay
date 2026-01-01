import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LM25() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">LM25 Alloy</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            Premium aluminum alloy for sand casting and gravity die-casting applications
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Overview</h2>
          <div className="max-w-4xl space-y-8 text-lg text-gray-400 font-light leading-relaxed">
            <p>
              LM25 is a British standard aluminum-silicon-magnesium alloy (BS 1490) specifically engineered for
              sand casting and gravity die-casting processes. This versatile alloy offers exceptional mechanical
              properties combined with excellent castability and machinability, making it ideal for a wide range
              of engineering applications.
            </p>
            <p>
              Also known as A356 (USA) and AC4C (Japan), LM25 is heat-treatable and can achieve outstanding
              strength-to-weight ratios through T6 temper treatment. Our LM25 ingots maintain strict compositional
              control to ensure consistent performance across all casting methods.
            </p>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Chemical Composition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 max-w-4xl">
            <div>
              <div className="text-3xl font-light mb-2">6.5-7.5%</div>
              <div className="text-gray-500 font-light text-sm">Silicon (Si)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">0.2-0.6%</div>
              <div className="text-gray-500 font-light text-sm">Magnesium (Mg)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.2%</div>
              <div className="text-gray-500 font-light text-sm">Copper (Cu)</div>
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
              <div className="text-3xl font-light mb-2">≤ 0.2%</div>
              <div className="text-gray-500 font-light text-sm">Titanium (Ti)</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Key Properties</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Heat Treatable</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                T6 heat treatment yields exceptional strength, with tensile values up to 280 MPa
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Superior Ductility</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Excellent elongation properties provide impact resistance and reliability under stress
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Corrosion Resistant</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Outstanding resistance to atmospheric and marine corrosion for long-term durability
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Mechanical Properties (T6 Condition)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl">
            <div>
              <div className="text-5xl font-light mb-4">280 MPa</div>
              <div className="text-gray-500 font-light">Tensile Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">185 MPa</div>
              <div className="text-gray-500 font-light">Yield Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">6%</div>
              <div className="text-gray-500 font-light">Elongation</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">70 HB</div>
              <div className="text-gray-500 font-light">Hardness</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Casting Methods</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Sand Casting</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Ideal for large, complex components with excellent surface finish and dimensional accuracy.
                Perfect for low to medium volume production and prototyping.
              </p>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Large structural components</p>
                <p>Complex geometric shapes</p>
                <p>Prototype development</p>
                <p>Low volume production runs</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Gravity Die-Casting</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Superior mechanical properties and fine grain structure for high-strength applications.
                Excellent for medium to high volume production with tight tolerances.
              </p>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>High-strength components</p>
                <p>Thin-walled castings</p>
                <p>Precise dimensional control</p>
                <p>Medium to high volume production</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Applications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Automotive & Motorsport</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Wheel rims and hubs</p>
                <p>Suspension components</p>
                <p>Gearbox housings</p>
                <p>Engine mounts and brackets</p>
                <p>Performance racing parts</p>
                <p>Differential housings</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Marine & Aerospace</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Marine propellers and fittings</p>
                <p>Boat and yacht components</p>
                <p>Aircraft structural parts</p>
                <p>Helicopter rotor hubs</p>
                <p>Aerospace brackets and mounts</p>
                <p>Drone and UAV components</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Industrial Equipment</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Pump and valve bodies</p>
                <p>Pneumatic cylinders</p>
                <p>Hydraulic manifolds</p>
                <p>Machine tool components</p>
                <p>Compressor housings</p>
                <p>Industrial robotics parts</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">General Engineering</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Architectural hardware</p>
                <p>Lighting and fixture components</p>
                <p>Medical equipment housings</p>
                <p>Telecommunications equipment</p>
                <p>Sporting goods and equipment</p>
                <p>Precision instrument parts</p>
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
                <p>10 kg ingots (400mm x 100mm x 52mm)</p>
                <p>15 kg ingots (500mm x 120mm x 60mm)</p>
                <p>25 kg sow ingots</p>
                <p>500 kg pig ingots</p>
                <p>Custom dimensions available</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8">Quality Assurance</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>BS 1490:1988 LM25 compliant</p>
                <p>ASTM B26 A356.0 equivalent</p>
                <p>Complete chemical analysis certificates</p>
                <p>Mechanical property verification</p>
                <p>ISO 9001:2015 certified production</p>
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
