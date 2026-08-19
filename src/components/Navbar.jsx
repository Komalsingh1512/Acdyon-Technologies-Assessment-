import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ isDark, setIsDark }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event for transparent to glass transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#showcase' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#showcase' },
    { name: 'Watch', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <header
        className={`w-full h-[44px] transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[rgba(255,255,255,0.72)] dark:bg-[rgba(29,29,31,0.72)] backdrop-blur-[20px] backdrop-saturate-[180%] border-black/10 dark:border-white/10'
            : 'bg-transparent border-black/5 dark:border-white/5'
        }`}
      >
        <div className="max-w-5xl mx-auto h-full px-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-text-primary hover:opacity-80 outline-none focus-visible:ring-2 focus-visible:ring-accent-link rounded p-1 transition-opacity z-50 flex items-center"
            aria-label="Apple Home"
          >
            <svg viewBox="0 0 18 18" className="h-[16px] w-auto fill-current" role="img" aria-hidden="true">
              <path d="M15.56 10.1c-.04-2.23 1.82-3.3 1.9-3.35-1.04-1.52-2.66-1.73-3.23-1.78-1.37-.14-2.68.8-3.38.8-.7 0-1.78-.79-2.93-.77-1.5.02-2.9.88-3.67 2.22-1.56 2.72-.4 6.74 1.12 8.93.74 1.07 1.62 2.27 2.78 2.23 1.12-.05 1.55-.72 2.83-.72 1.27 0 1.67.67 2.84.65 1.19-.02 1.96-1.08 2.69-2.15.85-1.24 1.2-2.44 1.22-2.5-.03-.02-2.35-.9-2.37-3.58zM12.03 3.25c.61-.74 1.02-1.76.9-2.78-.88.04-1.95.59-2.58 1.33-.56.65-1.05 1.69-.92 2.7.98.08 1.99-.51 2.6-1.25z" />
            </svg>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-between flex-1 mx-8 max-w-3xl text-[12px] font-[400] tracking-[-0.01em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-text-primary hover:opacity-80 transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded-sm px-1 py-1 group"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right section: Theme toggle & Mobile menu button */}
          <div className="flex items-center gap-2 z-50">
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-text-primary hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-accent-link focus-visible:outline-none"
              aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
              style={{ color: 'currentColor' }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-[32px] h-[32px] flex items-center justify-center rounded-full text-text-primary hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-accent-link focus-visible:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              style={{ color: 'currentColor' }}
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white/95 dark:bg-[#1d1d1f]/95 backdrop-blur-md ${
            isMobileMenuOpen ? 'max-h-[calc(100vh-44px)] opacity-100 border-t border-black/5 dark:border-white/5' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col px-6 pb-6 space-y-4 pt-4 h-[calc(100vh-44px)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-text-primary hover:opacity-80 transition-opacity py-2 border-b border-black/5 dark:border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
