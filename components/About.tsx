import React from 'react';
import type { BusinessConfig } from '../types';

interface AboutProps {
  config: BusinessConfig;
}

const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold uppercase font-anton tracking-wider">
                Serving {config.AREA} The <span className="text-yellow-400">Best {config.CUISINE_TYPE}</span>
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
                Welcome to {config.BUSINESS_NAME}, the home of the best burgers and kebabs in town. Our mission is simple: to serve up delicious, high-quality fast food that hits the spot every time. From our 100% fresh meat Angus burgers to our succulent doner kebabs and flavour-packed wraps, we use only the finest ingredients. Our passionate chefs prepare every meal to order, ensuring it's hot, fresh, and full of flavour when it reaches you.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;