import React from 'react';
import type { BusinessConfig } from '../types';

interface MapProps {
    config: BusinessConfig;
}

const Map: React.FC<MapProps> = ({ config }) => {
    const address = `${config.ADDRESS_LINE}, ${config.AREA}, ${config.POSTCODE}`;
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section className="bg-gray-800">
            <div className="container mx-auto text-center py-20 px-4">
                <h2 className="text-4xl md:text-5xl font-bold uppercase font-anton tracking-wider">
                    Find <span className="text-yellow-400">Us</span>
                </h2>
                <div className="mt-8 bg-gray-700 h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-inner">
                   <iframe
                     title="Google Maps Location"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     loading="lazy"
                     allowFullScreen={false}
                     src={mapSrc}
                   ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Map;