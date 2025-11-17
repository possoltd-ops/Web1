import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import About from './components/About';
import Map from './components/Map';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import type { BusinessConfig } from './types';

const App: React.FC = () => {
  const businessConfig: BusinessConfig = {
    BUSINESS_NAME: "Angus Burgers",
    AREA: "Wembley Park, Wembley",
    PHONE: "01384 560831",
    ADDRESS_LINE: "115 Wembley Park Dr",
    POSTCODE: "HA9 8HG",
    CUISINE_TYPE: "Burgers & Kebabs",
    ORDER_LINK: "https://www.restaurantlogin.com/api/fb/z5j_v4",
    REVIEWS: [
        { rating: 5, text: "The Classic Angus burger was unreal! Best burger I've had in ages." },
        { rating: 5, text: "Finally a decent local spot! The doner kebab was packed and delicious. Will be back!" },
        { rating: 5, text: "Fast delivery and the food arrived hot and fresh. 10/10." },
    ]
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header config={businessConfig} />
      <main>
        <Hero config={businessConfig} />
        <Highlights />
        <Menu config={businessConfig} />
        <Reviews config={businessConfig} />
        <About config={businessConfig} />
        <Map config={businessConfig} />
      </main>
      <Footer config={businessConfig} />
      <StickyCTA config={businessConfig} />
    </div>
  );
};

export default App;