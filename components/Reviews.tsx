import React from 'react';
import type { BusinessConfig, Review } from '../types';

interface ReviewsProps {
  config: BusinessConfig;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${filled ? 'text-yellow-400' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const ReviewCard: React.FC<{ review: Review, cuisine: string, area: string }> = ({ review, cuisine, area }) => {
    const displayText = review.text
        .replace(/CUISINE_TYPE/g, cuisine)
        .replace(/AREA/g, area);
        
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < review.rating} />
                ))}
            </div>
            <p className="mt-4 text-gray-300 italic">"{displayText}"</p>
        </div>
    );
};


const Reviews: React.FC<ReviewsProps> = ({ config }) => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold uppercase font-anton tracking-wider">
          What Our <span className="text-yellow-400">Customers</span> Say
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {config.REVIEWS.map((review, index) => (
            <ReviewCard key={index} review={review} cuisine={config.CUISINE_TYPE} area={config.AREA} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;