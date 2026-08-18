import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import PromoGrid from './components/PromoGrid';
import FeatureHighlights from './components/FeatureHighlights';
import CategorySwitcher from './components/CategorySwitcher';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

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
      {/* Apple-style Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-[20px] backdrop-saturate-[180%] bg-white/80 dark:bg-black/80 border-b border-border transition-colors duration-0">
        <div className="max-w-5xl mx-auto px-4 h-[44px] flex items-center justify-between">
          {/* Apple Logo SVG */}
          <a href="#" className="text-text-primary hover:opacity-80 outline-none focus-visible:ring-2 focus-visible:ring-accent-link rounded p-1" aria-label="Apple Home">
            <svg viewBox="0 0 18 18" className="h-[14px] w-auto fill-current" role="img" aria-hidden="true">
              <path d="M15.56 10.1c-.04-2.23 1.82-3.3 1.9-3.35-1.04-1.52-2.66-1.73-3.23-1.78-1.37-.14-2.68.8-3.38.8-.7 0-1.78-.79-2.93-.77-1.5.02-2.9.88-3.67 2.22-1.56 2.72-.4 6.74 1.12 8.93.74 1.07 1.62 2.27 2.78 2.23 1.12-.05 1.55-.72 2.83-.72 1.27 0 1.67.67 2.84.65 1.19-.02 1.96-1.08 2.69-2.15.85-1.24 1.2-2.44 1.22-2.5-.03-.02-2.35-.9-2.37-3.58zM12.03 3.25c.61-.74 1.02-1.76.9-2.78-.88.04-1.95.59-2.58 1.33-.56.65-1.05 1.69-.92 2.7.98.08 1.99-.51 2.6-1.25z" />
            </svg>
          </a>

          {/* Navigation Directory links */}
          <nav className="hidden md:flex items-center gap-6 text-[12px] font-[400] tracking-tight text-text-secondary select-none">
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">Store</a>
            <a href="#showcase" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">Mac</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">iPad</a>
            <a href="#showcase" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">iPhone</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">Watch</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">Vision</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">AirPods</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded px-1">Support</a>
          </nav>

          {/* Dark Mode Switcher button */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="p-1 rounded-md text-text-secondary hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-link focus-visible:outline-none"
            aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

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
