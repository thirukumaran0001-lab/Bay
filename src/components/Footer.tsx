import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-semibold text-white mb-4 transition-all duration-300 hover:text-neutral-100">
                Bay Aluminium
              </h3>
            </Link>
            <p className="text-neutral-400 leading-relaxed font-normal transition-colors duration-300">
              Leading provider of premium aluminum ingots and alloys with cutting-edge smelting technology.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Products</h4>
            <ul className="space-y-2.5 text-neutral-400 font-normal text-sm">
              <li>
                <Link to="/adc12" className="hover:text-white transition-colors duration-300">ADC 12 Alloy</Link>
              </li>
              <li>
                <Link to="/lm24" className="hover:text-white transition-colors duration-300">LM24 Alloy</Link>
              </li>
              <li>
                <Link to="/a380" className="hover:text-white transition-colors duration-300">A380 Alloy</Link>
              </li>
              <li>
                <Link to="/custom-alloys" className="hover:text-white transition-colors duration-300">Custom Alloys</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-neutral-400 font-normal text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors duration-300">Our Process</Link>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-300 cursor-pointer">Quality</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-neutral-400 font-normal text-sm">
              <li className="transition-colors duration-300 hover:text-white">
                <a href="mailto:admin@bayaluminium.com.my">admin@bayaluminium.com.my</a>
              </li>
              <li className="transition-colors duration-300 hover:text-white">
                <a href="tel:+60198765432">+60198765432</a>
              </li>
              <li className="transition-colors duration-300 hover:text-white">Lot 18, Jalan Zurah 5A<br />Selangor, Malaysia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-neutral-500 text-sm font-normal">
            © 2024 Bay Aluminium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500 font-normal">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
