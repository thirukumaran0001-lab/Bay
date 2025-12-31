import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <Link to="/" className="group">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent mb-6 hover:from-cyan-400 hover:via-amber-300 hover:to-orange-400 transition-all duration-300">Bay Aluminium</h3>
            </Link>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Leading provider of premium aluminum ingots and alloys with cutting-edge smelting technology.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-orange-400 font-bold mb-6 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>
                <Link to="/adc12" className="hover:text-orange-300 hover:translate-x-2 inline-block transition-all duration-300">ADC 12 Alloy</Link>
              </li>
              <li>
                <Link to="/lm24" className="hover:text-orange-300 hover:translate-x-2 inline-block transition-all duration-300">LM24 Alloy</Link>
              </li>
              <li>
                <Link to="/a380" className="hover:text-orange-300 hover:translate-x-2 inline-block transition-all duration-300">A380 Alloy</Link>
              </li>
              <li>
                <Link to="/custom-alloys" className="hover:text-orange-300 hover:translate-x-2 inline-block transition-all duration-300">Custom Alloys</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-cyan-400 font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>
                <a href="#about" className="hover:text-cyan-300 hover:translate-x-2 inline-block transition-all duration-300">About Us</a>
              </li>
              <li>
                <Link to="/process" className="hover:text-cyan-300 hover:translate-x-2 inline-block transition-all duration-300">Our Process</Link>
              </li>
              <li className="hover:text-cyan-300 hover:translate-x-2 inline-block transition-all duration-300 cursor-pointer">Quality</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-emerald-400 font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>info@bayaluminium.com</li>
              <li>+60103668054</li>
              <li>Lot 18, Jalan Zurah 5A<br />Selangor, Malaysia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-gray-500 text-sm font-light">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
