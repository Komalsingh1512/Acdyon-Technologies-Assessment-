import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import CategorySwitcher from './components/CategorySwitcher';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const IPHONE_PRODUCTS = [
  //product listing form here ! 
  {
    id: 'iphone-17e',
    name: 'iPhone 17e',
    chip: 'A18 chip',
    price: 'From $599',
    spec2: '[VERIFY: iPhone 17e camera/battery]',
    silhouetteType: 'phone',
    category: 'iphone'
  },
  {
    id: 'iphone-air',
    name: 'iPhone Air',
    chip: 'A19 chip',
    price: 'From $999',
    spec2: '[VERIFY: iPhone Air camera/battery]',
    silhouetteType: 'phone',
    category: 'iphone'
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    chip: 'A19 Pro chip',
    price: 'From $1,099',
    spec2: '[VERIFY: iPhone 17 Pro camera/battery]',
    silhouetteType: 'phone',
    category: 'iphone'
  },
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    chip: 'A19 Pro chip',
    price: 'From $1,199',
    spec2: '[VERIFY: iPhone 17 Pro Max camera/battery]',
    silhouetteType: 'phone',
    category: 'iphone'
  }
];

const MAC_PRODUCTS = [
  //Mac product object starts from here 
  {
    id: 'macbook-air',
    name: 'MacBook Air',
    chip: 'M5 chip',
    price: 'From $1,099',
    spec2: '[VERIFY: MacBook Air battery/display]',
    silhouetteType: 'laptop',
    category: 'mac'
  },
  {
    id: 'macbook-neo',
    name: 'MacBook Neo',
    chip: 'A18 Pro chip',
    price: 'From $599',
    spec2: '[VERIFY: MacBook Neo battery/display]',
    silhouetteType: 'laptop',
    category: 'mac'
  },
  {
    id: 'macbook-pro',
    name: 'MacBook Pro',
    chip: '[VERIFY: MacBook Pro chip]',
    price: '[VERIFY: MacBook Pro price]',
    spec2: '[VERIFY: MacBook Pro battery/display]',
    silhouetteType: 'laptop',
    category: 'mac'
  },
  {
    id: 'imac',
    name: 'iMac',
    chip: '[VERIFY: iMac chip]',
    price: '[VERIFY: iMac price]',
    spec2: '[VERIFY: iMac display]',
    silhouetteType: 'desktop',
    category: 'mac'
  },
  {
    id: 'mac-mini',
    name: 'Mac mini',
    chip: '[VERIFY: Mac mini chip]',
    price: '[VERIFY: Mac mini price]',
    spec2: '[VERIFY: Mac mini ports]',
    silhouetteType: 'mini',
    category: 'mac'
  },
  {
    id: 'mac-studio',
    name: 'Mac Studio',
    chip: '[VERIFY: Mac Studio chip]',
    price: '[VERIFY: Mac Studio price]',
    spec2: '[VERIFY: Mac Studio ports]',
    silhouetteType: 'studio',
    category: 'mac'
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
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg-primary/80 border-b border-border transition-colors duration-0">
        <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
          {/* Apple Logo SVG */}
          <a href="#" className="text-text-primary hover:opacity-80 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1" aria-label="Apple Home">
            <svg viewBox="0 0 18 18" className="w-4 h-4 fill-current" role="img" aria-hidden="true">
              <path d="M15.56 10.1c-.04-2.23 1.82-3.3 1.9-3.35-1.04-1.52-2.66-1.73-3.23-1.78-1.37-.14-2.68.8-3.38.8-.7 0-1.78-.79-2.93-.77-1.5.02-2.9.88-3.67 2.22-1.56 2.72-.4 6.74 1.12 8.93.74 1.07 1.62 2.27 2.78 2.23 1.12-.05 1.55-.72 2.83-.72 1.27 0 1.67.67 2.84.65 1.19-.02 1.96-1.08 2.69-2.15.85-1.24 1.2-2.44 1.22-2.5-.03-.02-2.35-.9-2.37-3.58zM12.03 3.25c.61-.74 1.02-1.76.9-2.78-.88.04-1.95.59-2.58 1.33-.56.65-1.05 1.69-.92 2.7.98.08 1.99-.51 2.6-1.25z" />
            </svg>
          </a>

          {/* Navigation Directory links */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-normal text-text-secondary select-none">
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">Store</a>
            <a href="#showcase" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">Mac</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">iPad</a>
            <a href="#showcase" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">iPhone</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">Watch</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">Vision</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">AirPods</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded px-1">Support</a>
          </nav>

          {/* Dark Mode Switcher button */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="p-1 rounded-md text-text-secondary hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* Main Layout Content */}
      <main className="flex-1">
        <Hero />
        <CategorySwitcher activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ProductGrid products={activeProducts} />
      </main>

      <Footer />
    </div>
  );
}
