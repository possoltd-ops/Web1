import React, { useState } from 'react';
import type { BusinessConfig } from '../types';

interface StickyCTAProps {
  config: BusinessConfig;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ config }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm p-4 border-t border-gray-700 z-50">
      <a 
        href={config.ORDER_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`w-full flex items-center justify-center text-center bg-red-600 text-white font-bold text-lg uppercase px-8 py-3 rounded-md shadow-lg
                   transform hover:scale-105 hover:bg-red-700 transition-transform duration-300 ease-in-out
                   ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : 'Order Now'}
      </a>
    </div>
  );
};

export default StickyCTA;
