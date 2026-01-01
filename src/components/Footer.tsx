import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 group relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-red-500 via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Link to="/" className="inline-block">
              <h3 className="text-3xl font-light text-white mb-6 transition-all duration-300 group-hover:scale-105 group-hover:text-red-100">
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
              <li className="group transition-transform duration-300 hover:translate-x-2 relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-300"></span>
                <Link to="/adc12" className="hover:text-red-300 transition-colors duration-300">ADC 12 Alloy</Link>
              </li>
              <li className="group transition-transform duration-300 hover:translate-x-2 relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-300"></span>
                <Link to="/lm24" className="hover:text-red-300 transition-colors duration-300">LM24 Alloy</Link>
              </li>
              <li className="group transition-transform duration-300 hover:translate-x-2 relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-300"></span>
                <Link to="/a380" className="hover:text-red-300 transition-colors duration-300">A380 Alloy</Link>
              </li>
              <li className="group transition-transform duration-300 hover:translate-x-2 relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-300"></span>
                <Link to="/custom-alloys" className="hover:text-red-300 transition-colors duration-300">Custom Alloys</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-light mb-6 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li className="group transition-transform duration-300 hover:translate-x-2 relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-300"></span>
                <a href="#about" className="hover:text-red-300 transition-colors duration-300">About Us</a>
              </li>
              <li className="group transition-transform duration-300 hover:translate-x-2 relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-300"></span>
                <Link to="/process" className="hover:text-red-300 transition-colors duration-300">Our Process</Link>
              </li>
              <li className="group hover:text-red-300 transition-all duration-300 hover:translate-x-2 cursor-pointer relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-300"></span>
                Quality
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-light mb-6 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="transition-colors duration-300 hover:text-red-300 cursor-pointer">info@bayaluminium.com</li>
              <li className="transition-colors duration-300 hover:text-red-300 cursor-pointer">+60103668054</li>
              <li className="transition-colors duration-300 hover:text-red-300">Lot 18, Jalan Zurah 5A<br />Selangor, Malaysia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
          <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-red-500 to-transparent"></div>
          <p className="text-gray-500 text-sm font-light">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-red-400 transition-all duration-300 hover:scale-110">Privacy</a>
            <a href="#" className="hover:text-red-400 transition-all duration-300 hover:scale-110">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
