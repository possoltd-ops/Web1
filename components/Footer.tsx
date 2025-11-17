import React from 'react';
import type { BusinessConfig } from '../types';

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.607 1.882 2.372 3.256 4.463 3.293-1.776 1.39-4.022 2.216-6.46 2.216-.42 0-.834-.025-1.242-.073 2.283 1.464 5.003 2.316 7.9 2.316 9.475 0 14.656-7.854 14.656-14.656 0-.224-.005-.447-.015-.669.998-.722 1.864-1.623 2.557-2.659z"/></svg>
);


interface FooterProps {
  config: BusinessConfig;
}

const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-10">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <h3 className="text-2xl font-bold text-yellow-400 font-anton tracking-wider">{config.BUSINESS_NAME}</h3>
        <p className="mt-2">{config.ADDRESS_LINE}, {config.AREA}, {config.POSTCODE}</p>
        <p className="mt-1 font-semibold text-lg"><a href={`tel:${config.PHONE}`} className="hover:text-yellow-400">{config.PHONE}</a></p>

        <div className="mt-6 flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><TwitterIcon /></a>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          &copy; {currentYear} {config.BUSINESS_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;