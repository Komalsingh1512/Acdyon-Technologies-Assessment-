import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import CategorySwitcher from './components/CategorySwitcher';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const IPHONE_PRODUCTS = [
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

  const activeProducts = activeCategory === 'mac' ? MAC_PRODUCTS : IPHONE_PRODUCTS;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      {/* Sticky Premium Header (no transitions) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg-primary/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-black tracking-widest text-text-primary select-none">
              AETHER
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-text-secondary">
            <a href="#showcase" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded p-1">Products</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded p-1">Ecosystem</a>
            <a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent outline-none rounded p-1">Design Ethics</a>
          </nav>

          {/* Dark Mode Switch (A11y Compliant) */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-bg-secondary border border-border text-text-primary hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
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
