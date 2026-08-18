import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="bg-bg-primary border-t border-border px-4 py-16"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Honest CTA Section */}
        <div className="text-center max-w-xl mb-16">
          <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
            Build Your Creative Station
          </h2>
          <p className="text-sm text-text-secondary mb-6 leading-relaxed">
            Review specifications, choose standard configurations, or customize performance setups built to handle complex design, engineering, and coding workflows.
          </p>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-accent rounded-lg hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-bg-primary"
            aria-label="Configure your Aether systems"
          >
            Configure Custom System
          </a>
        </div>

        {/* Footer Links & Footnote */}
        <div className="w-full pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-secondary">
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#" 
              className="hover:text-text-primary outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1"
              aria-label="Aether Environmental goals information"
            >
              Environmental Impact
            </a>
            <a 
              href="#" 
              className="hover:text-text-primary outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1"
              aria-label="Aether system hardware support portal"
            >
              Hardware Support
            </a>
            <a 
              href="#" 
              className="hover:text-text-primary outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1"
              aria-label="Find an authorized Aether distributor"
            >
              Authorized Distributors
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Aether Inc. All rights reserved.
            </p>
            <p className="text-[10px] opacity-70">
              Pricing subject to selected component specifications. [VERIFY: Local regional sales tax terms]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
