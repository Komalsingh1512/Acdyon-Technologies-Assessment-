import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import PromoGrid from './components/PromoGrid';
import FeatureHighlights from './components/FeatureHighlights';
import CategorySwitcher from './components/CategorySwitcher';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const IPHONE_PRODUCTS = [
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    description: 'Innovative design for ultimate\nperformance and battery life.',
    pricingDetails: 'From $1099 or $45.79/mo. for 24 mo.**\nLease from $31.99 for 24 mo.\nwith Apple Upgrade³',
    colors: ['#3e3c39', '#a09c91', '#f3f2eb', '#2c2e35'],
    imageBg: 'bg-black',
    category: 'iphone',
    image: '/images/iphone_17pro.jpg'
  },
  {
    id: 'iphone-air',
    name: 'iPhone Air',
    description: 'The thinnest iPhone ever.\nWith the power of pro inside.',
    pricingDetails: 'From $999 or $41.62/mo. for 24 mo.**\nLease from $28.99 for 24 mo.\nwith Apple Upgrade³',
    colors: ['#d1e1eb', '#e6e8eb', '#383a3f', '#f3e8d9'],
    imageBg: 'bg-[#e2e6ea]',
    category: 'iphone',
    image: '/images/iphone_air_.jpg'
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    description: 'Even more delightful.\nEven more durable.',
    pricingDetails: 'From $799 or $33.29/mo. for 24 mo.**\nLease from $22.99 for 24 mo.\nwith Apple Upgrade³',
    colors: ['#d2cbed', '#c7dfc9', '#fbe08e', '#f3e8d9', '#383a3f'],
    imageBg: 'bg-[#e4dfef]',
    category: 'iphone',
    image: '/images/iphone_17_.jpg'
  },
  {
    id: 'iphone-17e',
    name: 'iPhone 17e',
    description: 'Feature stacked.\nValue packed.',
    pricingDetails: 'From $599 or $24.95/mo. for 24 mo.**\nLease from $17.99 for 24 mo.\nwith Apple Upgrade³',
    colors: ['#fad7d9', '#e8e8e8', '#383a3f'],
    imageBg: 'bg-[#f7e0e2]',
    category: 'iphone',
    image: '/images/iphone_17e.jpg'
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    description: 'Amazing performance.\nDurable design.',
    pricingDetails: 'From $699 or $29.12/mo. for 24 mo.**',
    colors: ['#b4c6eb', '#f1cfdb', '#e2e7b8', '#e8e8e8', '#383a3f'],
    imageBg: 'bg-[#c5d3f0]',
    category: 'iphone',
    image: '/images/iphone_16.jpg'
  }
];

const MAC_PRODUCTS = [
  {
    id: 'macbook-neo',
    name: 'MacBook Neo',
    description: 'The magic of Mac at a surprising price.',
    pricingDetails: 'From $699 or $58.25/mo.\nfor 12 mo.**',
    colors: ['#e3e4e5', '#d4d5d6', '#f3e8d9', '#5b5d66'],
    imageBg: 'bg-white',
    category: 'mac',
    image: '/images/mbn.jpg'
  },
  {
    id: 'macbook-air',
    name: 'MacBook Air 13” and 15”',
    description: 'Thin. Fast. Powerful and portable.',
    pricingDetails: 'From $1299 or $108.25/mo. for 12 mo.**\nLease from $24.99/mo. for 36 mo. with\nApple Upgrade³',
    colors: ['#d1e1eb', '#f3e8d9', '#d4d5d6', '#2b2d35'],
    imageBg: 'bg-white',
    category: 'mac',
    image: '/images/mba_13_15_.jpg'
  },
  {
    id: 'macbook-pro',
    name: 'MacBook Pro 14” and 16”',
    description: 'The most advanced Mac laptops for\ndemanding tasks.',
    pricingDetails: 'From $1999 or $166.58/mo. for 12 mo.**\nLease from $38.99/mo. for 36 mo. with\nApple Upgrade³',
    colors: ['#e3e4e5', '#2b2d35'],
    imageBg: 'bg-white',
    category: 'mac',
    image: '/images/mbp_14_.jpg'
  },
  {
    id: 'imac',
    name: 'iMac',
    description: 'An all-in-one desktop for creativity\nand productivity.',
    pricingDetails: 'From $1499 or $124.91/mo. for 12 mo.**\nLease from $28.99/mo. for 36 mo. with\nApple Upgrade³',
    colors: ['#4b6cc2', '#41a868', '#f26284', '#e28846', '#f8d052', '#d4d5d6', '#e3e4e5'],
    imageBg: 'bg-white',
    category: 'mac',
    image: '/images/imac_24_.jpg'
  },
  {
    id: 'mac-studio',
    name: 'Mac Studio',
    description: 'Empowering professionals everywhere.',
    pricingDetails: 'From $1999 or $166.58/mo. for 12 mo.**',
    colors: ['#e3e4e5'],
    imageBg: 'bg-white',
    category: 'mac',
    image: '/images/studio_display.jpg'
  },
  {
    id: 'mac-studio-drx',
    name: 'Mac Studio DRX',
    description: 'Unprecedented power for the\nmost extreme workflows.',
    pricingDetails: 'From $3999 or $333.25/mo. for 12 mo.**',
    colors: ['#2b2d35', '#e3e4e5'],
    imageBg: 'bg-white',
    category: 'mac',
    image: '/images/studio_display_xdr.jpg'
  }
];

//function that calls/run whole app ! 
export default function App() {
  const [activeCategory, setActiveCategory] = useState('mac');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  //product show in grid  based on category selected !
  const activeProducts = activeCategory === 'mac' ? MAC_PRODUCTS : IPHONE_PRODUCTS;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      {/* Premium Navigation Header */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Main Layout Content */}
      <main className="flex-1">
        <Hero />
        <PromoGrid />
        <CategorySwitcher activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ProductGrid products={activeProducts} />
        <FeatureHighlights />
      </main>

      <Footer />
    </div>
  );
}
