import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="bg-bg-secondary text-text-secondary px-4 py-12 text-xs border-t border-border"
      aria-label="Apple Directory Footer"
    >
      <div className="max-w-5xl mx-auto">
        {/* Apple-style Disclaimers / Footnotes */}
        <div className="space-y-3 pb-8 border-b border-border text-[11px] leading-normal">
          <p>
            1. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max with Siri and device language set to U.S. English, as an iOS 18 update. Some features and additional languages will be coming over the course of the next year.
          </p>
          <p>
            2. Product prices, hardware descriptions, and specifications featured on this page refer to standard, retail models. [VERIFY: Local regional sales tax terms]
          </p>
          <p>
            3. All models are subject to regional storage and carrier configuration availability.
          </p>
        </div>

        {/* Directory Sitemap Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8">
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Shop and Learn</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Store</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Mac</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">iPad</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">iPhone</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Watch</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Manage Your Apple ID</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Apple Store Account</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Entertainment</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Apple One</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Apple TV+</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Apple Music</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Apple Arcade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Apple Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Find a Store</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Genius Bar</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Today at Apple</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Apple Camp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Apple Values</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Accessibility</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Education</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Environment</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Inclusion and Diversity</a></li>
              <li><a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
          <div>
            Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Privacy Policy</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Terms of Use</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Sales and Refunds</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Legal</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:underline focus-visible:ring-2 focus-visible:ring-accent outline-none rounded">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
