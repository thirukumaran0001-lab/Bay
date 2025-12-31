import { ArrowLeft, Beaker, Target, Cog, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CustomAlloys() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light mb-6">Custom Alloys</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Engineered aluminum alloy solutions tailored to your exact specifications and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-light mb-8">Bespoke Metallurgy</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              When standard alloys don't meet your specific performance requirements, Bay Aluminium's custom
              alloy development service provides the solution. Our metallurgical expertise and state-of-the-art
              laboratory facilities enable us to formulate proprietary aluminum alloys optimized for your unique
              application needs.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Whether you need enhanced strength, improved corrosion resistance, specialized thermal properties,
              or unique casting characteristics, we work closely with your engineering team to develop and
              produce custom alloy compositions that exceed standard specifications.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Development Process</h3>
            <div className="space-y-6">
              <div>
                <div className="text-lg font-light mb-2">1. Requirements Analysis</div>
                <p className="text-gray-400 text-sm font-light">
                  Comprehensive evaluation of your application requirements and performance criteria
                </p>
              </div>
              <div>
                <div className="text-lg font-light mb-2">2. Alloy Formulation</div>
                <p className="text-gray-400 text-sm font-light">
                  Metallurgical design and computer modeling of candidate alloy compositions
                </p>
              </div>
              <div>
                <div className="text-lg font-light mb-2">3. Laboratory Testing</div>
                <p className="text-gray-400 text-sm font-light">
                  Small-batch production and rigorous testing of mechanical and chemical properties
                </p>
              </div>
              <div>
                <div className="text-lg font-light mb-2">4. Production Scale-Up</div>
                <p className="text-gray-400 text-sm font-light">
                  Full-scale manufacturing with quality control and certification
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Customization Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Beaker className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Chemical Composition</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Modified silicon content for casting fluidity</li>
                <li>• Adjusted copper levels for strength tuning</li>
                <li>• Magnesium additions for enhanced properties</li>
                <li>• Specialized grain refiners and modifiers</li>
                <li>• Proprietary element combinations</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Target className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Performance Characteristics</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Enhanced tensile and yield strength</li>
                <li>• Improved elongation and ductility</li>
                <li>• Superior corrosion resistance</li>
                <li>• Optimized thermal conductivity</li>
                <li>• Specialized hardness requirements</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <Cog className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Processing Properties</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Tailored fluidity for complex geometries</li>
                <li>• Reduced hot cracking susceptibility</li>
                <li>• Enhanced machinability characteristics</li>
                <li>• Optimized die-filling behavior</li>
                <li>• Controlled solidification patterns</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <MessageSquare className="w-10 h-10 mb-4 text-white/80" />
              <h3 className="text-xl font-light mb-4">Application-Specific</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>• Automotive performance requirements</li>
                <li>• Aerospace-grade specifications</li>
                <li>• Marine environment resistance</li>
                <li>• High-temperature stability</li>
                <li>• Electrical conductivity needs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Industry Applications</h2>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-light mb-4">Automotive Racing & Performance</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Custom alloys engineered for motorsport applications requiring extreme strength-to-weight ratios,
                high-temperature stability, and consistent performance under demanding conditions. Specialized
                compositions for engine components, suspension parts, and structural elements.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-light mb-4">Aerospace & Defense</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Proprietary alloys meeting stringent aerospace specifications for lightweight structural components,
                avionics housings, and critical mechanical parts requiring exceptional reliability and performance
                in extreme environments.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-light mb-4">Medical & Scientific Equipment</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Specialized alloys for medical devices and scientific instrumentation requiring biocompatibility,
                precise dimensional stability, non-magnetic properties, or specialized surface characteristics
                for critical applications.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-light mb-4">Industrial Machinery</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Custom formulations for specialized industrial applications including chemical processing equipment,
                high-wear components, thermal management systems, and machinery operating in aggressive environments.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-light mb-12">Technical Support</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6">Engineering Services</h3>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li>• Materials selection consulting</li>
                  <li>• Casting process optimization</li>
                  <li>• Failure analysis and troubleshooting</li>
                  <li>• Performance testing and validation</li>
                  <li>• Process parameter development</li>
                  <li>• Quality assurance protocols</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6">Testing Capabilities</h3>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li>• Spectroscopic chemical analysis</li>
                  <li>• Tensile and hardness testing</li>
                  <li>• Metallographic examination</li>
                  <li>• Thermal analysis (DSC, TGA)</li>
                  <li>• Corrosion resistance evaluation</li>
                  <li>• Fatigue and fracture testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-12">
          <h2 className="text-3xl font-light mb-6">Get Started</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-3xl">
            Our metallurgical team is ready to discuss your custom alloy requirements. Whether you need minor
            modifications to existing alloys or completely new compositions, we provide comprehensive support
            from initial concept through full-scale production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-2">Minimum Order Quantity</div>
              <div className="text-xl font-light">500 kg</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">Development Timeline</div>
              <div className="text-xl font-light">6-12 weeks</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">Technical Support</div>
              <div className="text-xl font-light">Included</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block px-12 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-sm font-light"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
