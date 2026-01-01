import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 group">
            <Link to="/" className="inline-block">
              <h3 className="text-3xl font-light text-white mb-6 transition-all duration-300 group-hover:scale-105 group-hover:text-gray-300">
                Bay Aluminium
              </h3>
            </Link>
            <p className="text-gray-400 leading-relaxed font-light text-lg transition-colors duration-300 group-hover:text-gray-300">
              Leading provider of premium aluminum ingots and alloys with cutting-edge smelting technology.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-light mb-6 text-sm tracking-wider uppercase">Products</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li className="transition-transform duration-300 hover:translate-x-2">
                <Link to="/adc12" className="hover:text-white transition-colors duration-300">ADC 12 Alloy</Link>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <Link to="/lm24" className="hover:text-white transition-colors duration-300">LM24 Alloy</Link>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <Link to="/a380" className="hover:text-white transition-colors duration-300">A380 Alloy</Link>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <Link to="/custom-alloys" className="hover:text-white transition-colors duration-300">Custom Alloys</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-light mb-6 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li className="transition-transform duration-300 hover:translate-x-2">
                <a href="#about" className="hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <Link to="/process" className="hover:text-white transition-colors duration-300">Our Process</Link>
              </li>
              <li className="hover:text-white transition-all duration-300 hover:translate-x-2 cursor-pointer">Quality</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-light mb-6 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="transition-colors duration-300 hover:text-white cursor-pointer">info@bayaluminium.com</li>
              <li className="transition-colors duration-300 hover:text-white cursor-pointer">+60103668054</li>
              <li className="transition-colors duration-300 hover:text-white">Lot 18, Jalan Zurah 5A<br />Selangor, Malaysia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-gray-500 text-sm font-light">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-white transition-all duration-300 hover:scale-110">Privacy</a>
            <a href="#" className="hover:text-white transition-all duration-300 hover:scale-110">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
