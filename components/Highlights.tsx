import React from 'react';

const FastDeliveryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const FreshIngredientsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3.09 3.09a5 5 0 00-7.07 7.07l-2.12 2.12a1 1 0 000 1.41l.71.71a1 1 0 001.41 0l2.12-2.12a5 5 0 007.07-7.07L17 5M15 5h4v4" />
    </svg>
);

const CollectionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const Highlights: React.FC = () => {
    const highlights = [
        { icon: <FastDeliveryIcon />, text: "Speedy Delivery" },
        { icon: <FreshIngredientsIcon />, text: "Fresh Ingredients" },
        { icon: <CollectionIcon />, text: "Easy Collection" },
    ]
    return (
        <section className="bg-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {highlights.map((item, index) => (
                         <div key={index} className="flex flex-col items-center">
                            {item.icon}
                            <h3 className="mt-4 text-xl font-semibold text-white">{item.text}</h3>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Highlights;