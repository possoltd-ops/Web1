import React, { useState } from 'react';
import type { BusinessConfig } from '../types';

interface HeroProps {
  config: BusinessConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <section className="hero-bg bg-cover bg-center text-center py-24 md:py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider font-anton" style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.9)' }}>
          Best In Town
        </h2>
        <p className="mt-2 text-2xl md:text-4xl text-yellow-400 font-bold tracking-wide font-anton" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
          {config.CUISINE_TYPE}
        </p>
        <p className="mt-4 text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
          Served Fresh & Hot in {config.AREA}
        </p>
        <a 
          href={config.ORDER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={`mt-8 inline-flex items-center justify-center bg-red-600 text-white font-bold text-xl uppercase px-12 py-4 rounded-md shadow-lg
                     transform hover:scale-105 hover:bg-red-700 transition-transform duration-300 ease-in-out w-60
                     ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Order Now'}
        </a>
      </div>
    </section>
  );
};

export default Hero;
