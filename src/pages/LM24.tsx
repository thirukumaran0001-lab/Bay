import { ArrowLeft, CheckCircle2, Gauge, Shield, Zap, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LM24() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light mb-6">LM24 Alloy</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            British standard aluminum alloy for high-performance die-casting applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-light mb-8">Overview</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              LM24 is a premium British standard aluminum alloy (BS 1490) specifically designed for pressure
              die-casting. It offers an excellent balance of mechanical properties, corrosion resistance, and
              castability, making it one of the most versatile alloys in the industry.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              This alloy is equivalent to A380 (USA) and ADC 10 (Japan), providing global compatibility for
              international manufacturing operations. Our LM24 ingots meet strict quality standards and are
              perfect for producing components requiring high strength and dimensional accuracy.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Chemical Composition</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Silicon (Si)</span>
                <span className="font-light">7.5 - 9.5%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Copper (Cu)</span>
                <span className="font-light">3.0 - 4.0%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Magnesium (Mg)</span>
                <span className="font-light">≤ 0.1%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Iron (Fe)</span>
                <span className="font-light">≤ 1.3%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Zinc (Zn)</span>
                <span className="font-light">≤ 3.0%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Nickel (Ni)</span>
                <span className="font-light">≤ 0.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Aluminum (Al)</span>
                <span className="font-light">Balance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Key Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Gauge className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Superior Strength</h3>
              <p className="text-gray-400 font-light">
                Tensile strength of 300-320 MPa with excellent resistance to wear and fatigue
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Shield className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Corrosion Resistance</h3>
              <p className="text-gray-400 font-light">
                Good resistance to atmospheric corrosion, suitable for outdoor applications
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Zap className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-3">Thermal Conductivity</h3>
              <p className="text-gray-400 font-light">
                Excellent heat dissipation properties, ideal for thermal management applications
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Package className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Automotive Industry</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Gearbox housings and components</li>
                <li>• Steering system parts</li>
                <li>• Suspension components</li>
                <li>• Water pump housings</li>
                <li>• Carburetor and fuel system parts</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <CheckCircle2 className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">General Engineering</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Marine hardware and fittings</li>
                <li>• Electronic enclosures</li>
                <li>• Pneumatic and hydraulic components</li>
                <li>• Industrial machinery parts</li>
                <li>• Lighting fixtures and housings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Mechanical Properties</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-light mb-2">310 MPa</div>
                <div className="text-gray-400 font-light">Tensile Strength</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">160 MPa</div>
                <div className="text-gray-400 font-light">Yield Strength</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">2.5%</div>
                <div className="text-gray-400 font-light">Elongation</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-12">
          <h2 className="text-3xl font-light mb-8">Ingot Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-6 text-white/80">Available Formats</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• 7.5 kg ingots (320mm x 95mm x 48mm)</li>
                <li>• 12 kg ingots (450mm x 105mm x 55mm)</li>
                <li>• 22 kg sow ingots</li>
                <li>• Bespoke sizes for large orders</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6 text-white/80">Quality Standards</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• BS 1490:1988 LM24 compliant</li>
                <li>• Full material certificates provided</li>
                <li>• Spectroscopic analysis for each batch</li>
                <li>• Clean, oxide-free surface finish</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block px-12 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-sm font-light"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
