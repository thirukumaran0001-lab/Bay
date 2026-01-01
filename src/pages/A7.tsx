import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function A7() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-20 group font-light">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1]">A7 Alloy</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            Ultra-high purity aluminum for electrical conductors and specialized industrial applications
          </p>
        </div>

        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Overview</h2>
          <div className="max-w-4xl space-y-8 text-lg text-gray-400 font-light leading-relaxed">
            <p>
              A7 is a high-purity aluminum grade containing a minimum of 99.7% aluminum, specifically designated
              for electrical applications where superior conductivity is paramount. This refined aluminum alloy
              offers exceptional electrical and thermal conductivity combined with excellent formability and
              corrosion resistance.
            </p>
            <p>
              Our A7 ingots undergo rigorous refining processes to minimize impurities, ensuring consistent
              electrical properties and optimal performance in demanding electrical conductor applications.
              This grade is the preferred choice for power transmission cables, busbar systems, and other
              critical electrical infrastructure.
            </p>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Chemical Composition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 max-w-4xl">
            <div>
              <div className="text-3xl font-light mb-2">≥ 99.70%</div>
              <div className="text-gray-500 font-light text-sm">Aluminum (Al)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.15%</div>
              <div className="text-gray-500 font-light text-sm">Silicon (Si)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.15%</div>
              <div className="text-gray-500 font-light text-sm">Iron (Fe)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.02%</div>
              <div className="text-gray-500 font-light text-sm">Copper (Cu)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.01%</div>
              <div className="text-gray-500 font-light text-sm">Magnesium (Mg)</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">≤ 0.02%</div>
              <div className="text-gray-500 font-light text-sm">Zinc (Zn)</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Key Properties</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Superior Conductivity</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                62% IACS minimum electrical conductivity ensures minimal power loss in transmission
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Excellent Formability</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                High ductility enables cold working, drawing, and extrusion for complex conductor shapes
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Thermal Performance</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Outstanding thermal conductivity of 230 W/m·K ideal for heat dissipation applications
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Physical Properties</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl">
            <div>
              <div className="text-5xl font-light mb-4">62%</div>
              <div className="text-gray-500 font-light">Conductivity (IACS)</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">230</div>
              <div className="text-gray-500 font-light">Thermal (W/m·K)</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">2.70</div>
              <div className="text-gray-500 font-light">Density (g/cm³)</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">660°C</div>
              <div className="text-gray-500 font-light">Melting Point</div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Electrical Applications</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Power Transmission</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>High-voltage transmission cables</p>
                <p>Overhead power lines</p>
                <p>Underground cable conductors</p>
                <p>Distribution network cabling</p>
                <p>Submarine power cables</p>
                <p>Railway electrification systems</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Busbar Systems</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Electrical panel busbars</p>
                <p>Switchgear connections</p>
                <p>Power distribution centers</p>
                <p>Substation infrastructure</p>
                <p>Industrial power distribution</p>
                <p>Data center power systems</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Wire & Cable</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Electrical wire manufacturing</p>
                <p>Flexible conductor cables</p>
                <p>Welding cables</p>
                <p>Automotive wiring harnesses</p>
                <p>Building wire applications</p>
                <p>Telecommunications cables</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Specialized Uses</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Transformer windings</p>
                <p>Electric motor conductors</p>
                <p>Generator components</p>
                <p>Solar panel interconnects</p>
                <p>Battery terminals and connections</p>
                <p>Electromagnetic coils</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Industrial Applications</h2>
          <div className="space-y-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Heat Exchangers</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-4xl">
                Excellent thermal conductivity makes A7 ideal for heat exchanger components, cooling fins,
                radiators, and thermal management systems requiring efficient heat transfer. Used extensively
                in HVAC systems, automotive cooling, and industrial refrigeration.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Electronic Components</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-4xl">
                High-purity aluminum for semiconductor manufacturing equipment, electronic packaging, circuit
                board substrates, and components requiring minimal contamination and consistent electrical
                properties.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Chemical Processing</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-4xl">
                Superior corrosion resistance and purity make it suitable for chemical storage tanks,
                processing vessels, piping systems, and equipment handling corrosive materials in the
                chemical and pharmaceutical industries.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 tracking-tight">Advantages</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Performance Benefits</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Minimal electrical resistance for energy efficiency</p>
                <p>Lightweight conductors reduce installation costs</p>
                <p>Excellent corrosion resistance in all environments</p>
                <p>Non-magnetic properties for sensitive applications</p>
                <p>Long service life with minimal maintenance</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-light mb-6">Processing Advantages</h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p>Excellent cold working properties</p>
                <p>Easy to draw into fine wires</p>
                <p>Readily extruded into complex profiles</p>
                <p>Accepts welding and joining processes</p>
                <p>Can be anodized for additional protection</p>
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
                <p>15 kg T-bar ingots (standard)</p>
                <p>22.5 kg sow ingots</p>
                <p>680 kg pig ingots</p>
                <p>1000 kg master ingots</p>
                <p>Custom sizes for large orders</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8">Quality Standards</h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                <p>ASTM B230 compliant</p>
                <p>IEC 60889 certified for conductors</p>
                <p>Full chemical analysis certificate</p>
                <p>Conductivity testing for each batch</p>
                <p>ISO 9001:2015 certified production</p>
                <p>Complete traceability documentation</p>
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
