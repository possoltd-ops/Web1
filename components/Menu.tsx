import React, { useState } from 'react';
import type { BusinessConfig } from '../types';

interface MenuProps {
  config: BusinessConfig;
}

const Menu: React.FC<MenuProps> = ({ config }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  const menuItems = [
    {
      name: 'Burgers',
      imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    },
    {
      name: 'Kebabs',
      imageUrl: 'https://images.pexels.com/photos/32796208/pexels-photo-32796208.jpeg',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold uppercase font-anton tracking-wider">
          Our <span className="text-yellow-400">Menu</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          From juicy burgers to authentic kebabs, we've got your cravings covered. All made with the freshest ingredients.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <div key={item.name} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={item.imageUrl} 
                alt={item.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
                  <h3 className="text-white text-3xl font-bold font-anton uppercase tracking-wider text-center px-2">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
            <a 
              href={config.ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className={`inline-flex items-center justify-center bg-red-600 text-white font-bold text-lg uppercase px-10 py-3 rounded-md shadow-lg
                         transform hover:scale-105 hover:bg-red-700 transition-transform duration-300 ease-in-out min-h-[52px]
                         ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'View Full Menu & Order'}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;