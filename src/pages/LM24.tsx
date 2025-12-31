import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LM24() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">LM24 Alloy</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            British standard aluminum alloy for high-performance die-casting applications
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Overview</h2>
          <div className="max-w-4xl space-y-8 text-lg text-gray-400 font-light leading-relaxed">
            <p>
              LM24 is a premium British standard aluminum alloy (BS 1490) specifically designed for pressure
              die-casting. It offers an excellent balance of mechanical properties, corrosion resistance, and
              castability, making it one of the most versatile alloys in the industry.
            </p>
            <p>
              This alloy is equivalent to A380 (USA) and ADC 10 (Japan), providing global compatibility for
              international manufacturing operations. Our LM24 ingots meet strict quality standards and are
              perfect for producing components requiring high strength and dimensional accuracy.
            </p>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Chemical Composition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 max-w-4xl">
            <div>
              <div className="text-3xl font-light mb-2">7.5-9.5%</div>
              <div className="text-gray-500 font-light text-sm">Silicon (Si)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">3.0-4.0%</div>
              <div className="text-gray-500 font-light text-sm">Copper (Cu)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.1%</div>
              <div className="text-gray-500 font-light text-sm">Magnesium (Mg)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 1.3%</div>
              <div className="text-gray-500 font-light text-sm">Iron (Fe)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 3.0%</div>
              <div className="text-gray-500 font-light text-sm">Zinc (Zn)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.5%</div>
              <div className="text-gray-500 font-light text-sm">Nickel (Ni)</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Key Properties</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Superior Strength</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Tensile strength of 300-320 MPa with excellent resistance to wear and fatigue
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Corrosion Resistance</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Good resistance to atmospheric corrosion, suitable for outdoor applications
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Thermal Conductivity</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Excellent heat dissipation properties, ideal for thermal management applications
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Mechanical Properties</h2>
          <div className="grid grid-cols-3 gap-16 max-w-4xl">
            <div>
              <div className="text-5xl font-light mb-4">310 MPa</div>
              <div className="text-gray-500 font-light">Tensile Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">160 MPa</div>
              <div className="text-gray-500 font-light">Yield Strength</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">2.5%</div>
              <div className="text-gray-500 font-light">Elongation</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Applications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Automotive Industry</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Gearbox housings and components</p>
                <p>Steering system parts</p>
                <p>Suspension components</p>
                <p>Water pump housings</p>
                <p>Carburetor and fuel system parts</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">General Engineering</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Marine hardware and fittings</p>
                <p>Electronic enclosures</p>
                <p>Pneumatic and hydraulic components</p>
                <p>Industrial machinery parts</p>
                <p>Lighting fixtures and housings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 mb-32">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Ingot Specifications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Available Formats</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>7.5 kg ingots (320mm x 95mm x 48mm)</p>
                <p>12 kg ingots (450mm x 105mm x 55mm)</p>
                <p>22 kg sow ingots</p>
                <p>Bespoke sizes for large orders</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8">Quality Standards</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>BS 1490:1988 LM24 compliant</p>
                <p>Full material certificates provided</p>
                <p>Spectroscopic analysis for each batch</p>
                <p>Clean, oxide-free surface finish</p>
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
