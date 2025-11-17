import React, { useState } from 'react';
import type { BusinessConfig } from '../types';

interface HeaderProps {
  config: BusinessConfig;
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Browser navigates via href, no need to reset state
  };

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm p-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wider font-anton">
          {config.BUSINESS_NAME}
        </h1>
        <div className="flex items-center space-x-4">
            <a href={`tel:${config.PHONE}`} className="hidden sm:inline-block text-lg font-semibold hover:text-yellow-400 transition-colors">
              Call: {config.PHONE}
            </a>
            <a 
              href={config.ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className={`flex items-center justify-center bg-red-600 text-white font-bold uppercase px-4 py-2 text-sm rounded-md shadow-lg
                         transform hover:scale-105 hover:bg-red-700 transition-transform duration-300 ease-in-out w-28
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
      </div>
    </header>
  );
};

export default Header;
