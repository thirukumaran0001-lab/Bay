import { TrendingUp, TrendingDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MetalPrice {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  unit: string;
}

export function LMEWidget() {
  const [prices, setPrices] = useState<MetalPrice[]>([
    {
      name: 'Aluminum',
      symbol: 'ALU',
      price: 2385.50,
      change: 15.50,
      changePercent: 0.65,
      unit: 'USD/MT'
    }
  ]);

  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white rounded-lg p-6 shadow-2xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-light text-white/90">LME Prices</h3>
          <p className="text-xs text-white/50 mt-1">
            Updated: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
        <div className="text-xs text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          Live Market
        </div>
      </div>

      <div className="space-y-4">
        {prices.map((metal, index) => (
          <div
            key={index}
            className="group hover:bg-white/5 rounded-lg p-4 transition-all duration-300 border border-transparent hover:border-red-500/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-light text-white/70">{metal.symbol}</span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs text-white/50">{metal.name}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-light text-white">
                    ${metal.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-sm text-white/50">{metal.unit}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className={`flex items-center gap-1 ${metal.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metal.change >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-light">
                    {metal.change >= 0 ? '+' : ''}{metal.change.toFixed(2)}
                  </span>
                </div>
                <span className={`text-xs mt-1 ${metal.change >= 0 ? 'text-green-400/70' : 'text-red-400/70'}`}>
                  {metal.change >= 0 ? '+' : ''}{metal.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-xs text-white/40 text-center">
          Prices are indicative and subject to market conditions
        </p>
      </div>
    </div>
  );
}
