import React from 'react';
import { Apple, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="bg-bg-secondary text-text-secondary px-[22px] md:px-[40px] lg:px-[min(max(4vw,40px),120px)] pt-[88px] pb-12 text-body border-t border-border"
      aria-label="Apple Directory Footer"
    >
      <div className="max-w-[1600px] mx-auto">
        
        {/* Pre-Footer CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[88px] gap-8 pb-16 border-b border-border">
          <div>
            <h2 className="text-[48px] md:text-[64px] font-semibold tracking-tight text-text-primary leading-[1.05] mb-4">
              Stay in the loop.
            </h2>
            <p className="text-[19px] md:text-[21px] text-text-secondary max-w-md">
              Sign up for the latest news, offers, and styles from Apple.
            </p>
          </div>
          <div className="w-full md:w-[400px] flex-shrink-0 relative">
            <input 
              type="email" 
              placeholder="Email address" 
              aria-label="Email address for newsletter"
              className="w-full bg-transparent border-b-2 border-text-primary text-[19px] py-3 pr-12 focus:outline-none focus:border-accent-link transition-colors text-text-primary placeholder:text-text-tertiary"
            />
            <button 
              aria-label="Submit"
              className="absolute right-0 bottom-4 text-text-primary hover:text-accent-link transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-link rounded-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        {/* Apple-style Disclaimers / Footnotes */}
        <div className="space-y-3 pb-8 border-b border-border text-[12px] leading-[1.33]">
          <p>
            1. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max with Siri and device language set to U.S. English, as an iOS 18 update. Some features and additional languages will be coming over the course of the next year.
          </p>
          <p>
            2. Product prices, hardware descriptions, and specifications featured on this page refer to standard, retail models. Prices include VAT and standard shipping where applicable.
          </p>
          <p>
            3. All models are subject to regional storage and carrier configuration availability.
          </p>
        </div>

        {/* Directory Sitemap Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          <div>
            <h4 className="font-semibold text-text-primary text-[14px] mb-4">Shop and Learn</h4>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Store</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Mac</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">iPad</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">iPhone</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Watch</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary text-[14px] mb-4">Account</h4>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Manage Your Apple ID</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Apple Store Account</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary text-[14px] mb-4">Entertainment</h4>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Apple One</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Apple TV+</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Apple Music</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Apple Arcade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary text-[14px] mb-4">Apple Store</h4>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Find a Store</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Genius Bar</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Today at Apple</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Apple Camp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary text-[14px] mb-4">Apple Values</h4>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Accessibility</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Education</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Environment</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Inclusion and Diversity</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Legal & Social Row */}
        <div className="pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-6 text-[12px]">
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto">
            <div className="whitespace-nowrap">
              Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Privacy Policy</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Terms of Use</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Sales and Refunds</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Legal</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded">Site Map</a>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6 text-text-primary">
            <a href="#" className="hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded-full" aria-label="Apple on Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded-full" aria-label="Apple on Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded-full" aria-label="Apple on YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none rounded-full" aria-label="Apple Homepage">
              <Apple size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
