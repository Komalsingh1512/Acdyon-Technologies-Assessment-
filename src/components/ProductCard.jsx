import React from 'react';

function DeviceSilhouette({ type }) {
  if (type === 'laptop') {
    return (
      <svg viewBox="0 0 120 80" className="w-28 h-20 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-laptop-title">
        <title id="svg-laptop-title">Geometric representation of MacBook display with notch and keyboard base</title>
        {/* Screen Bezel */}
        <rect x="18" y="8" width="84" height="50" rx="3" className="stroke-text-primary" />
        {/* Display Screen Area with notch */}
        <path d="M54 8 L54 11 A 1 1 0 0 0 55 12 L65 12 A 1 1 0 0 0 66 11 L66 8" fill="currentColor" className="text-text-primary stroke-none" />
        {/* Base */}
        <path d="M10 58 L110 58 L114 65 L6 65 Z" className="fill-text-primary/5 stroke-text-primary" />
        {/* Trackpad */}
        <rect x="50" y="60" width="20" height="4" rx="0.5" className="stroke-text-primary" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 80 120" className="w-16 h-24 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-phone-title">
        <title id="svg-phone-title">Geometric outline representing an iPhone silhouette with Dynamic Island</title>
        {/* Phone body */}
        <rect x="16" y="8" width="48" height="104" rx="9" className="stroke-text-primary fill-text-primary/5" />
        {/* Dynamic Island */}
        <rect x="30" y="14" width="20" height="4.5" rx="2.25" fill="currentColor" className="text-text-primary stroke-none" />
        {/* Pro Camera system lenses */}
        <circle cx="26" cy="28" r="3.5" className="stroke-text-primary" />
        <circle cx="26" cy="38" r="3.5" className="stroke-text-primary" />
        <circle cx="36" cy="33" r="3.5" className="stroke-text-primary" />
      </svg>
    );
  }

  if (type === 'desktop') { // iMac
    return (
      <svg viewBox="0 0 120 100" className="w-28 h-24 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-imac-title">
        <title id="svg-imac-title">Geometric outline of an iMac screen and stand</title>
        {/* Screen */}
        <rect x="12" y="8" width="96" height="58" rx="2.5" className="stroke-text-primary fill-text-primary/5" />
        {/* Lower Chin */}
        <rect x="12" y="54" width="96" height="12" fill="currentColor" className="text-text-primary/10 stroke-text-primary" />
        {/* Stand */}
        <path d="M52 66 L44 88 L76 88 L68 66 Z" className="fill-text-primary/5 stroke-text-primary" />
      </svg>
    );
  }

  if (type === 'mini') { // Mac mini
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-16 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-mini-title">
        <title id="svg-mini-title">Minimalist outline of a Mac mini</title>
        {/* Body */}
        <rect x="12" y="22" width="76" height="16" rx="3.5" className="stroke-text-primary fill-text-primary/5" />
        {/* Indicator Dot */}
        <circle cx="78" cy="30" r="1.2" fill="currentColor" className="text-accent stroke-none" />
      </svg>
    );
  }

  if (type === 'studio') { // Mac Studio
    return (
      <svg viewBox="0 0 100 70" className="w-24 h-18 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-studio-title">
        <title id="svg-studio-title">Geometric silhouette of a Mac Studio workstation</title>
        {/* Body */}
        <rect x="12" y="12" width="76" height="44" rx="5" className="stroke-text-primary fill-text-primary/5" />
        {/* Front SD Slot */}
        <rect x="22" y="38" width="1" height="6" fill="currentColor" className="text-text-primary stroke-none" />
        {/* Front USB-C Ports */}
        <rect x="28" y="38" width="1.5" height="5" rx="0.5" className="stroke-text-primary" />
        <rect x="34" y="38" width="1.5" height="5" rx="0.5" className="stroke-text-primary" />
        {/* Power LED */}
        <circle cx="78" cy="41" r="1" fill="currentColor" className="text-accent stroke-none" />
      </svg>
    );
  }

  return null;
}

export default function ProductCard({ product }) {
  const { name, chip, price, spec2, silhouetteType } = product;

  return (
    <article 
      tabIndex="0"
      className="group relative flex flex-col justify-between items-center p-8 bg-card-bg border border-border rounded-3xl text-center outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
      aria-label={`${name}, featuring ${chip}, priced from ${price}`}
    >
      {/* Device Silhouette */}
      <div className="h-32 flex items-center justify-center mb-6">
        <DeviceSilhouette type={silhouetteType} />
      </div>

      {/* Info Group */}
      <div className="flex-1 flex flex-col items-center">
        {/* Chip badge (Apple-style pill tag) */}
        <span className="text-[10px] uppercase font-bold tracking-wider text-accent mb-2">
          {chip}
        </span>

        <h3 className="text-xl font-display font-semibold text-text-primary mb-1">
          {name}
        </h3>

        {/* Pricing */}
        <span className="text-sm font-normal text-text-primary mb-4">
          {price}
        </span>

        {/* Specifications */}
        <ul className="text-xs text-text-secondary space-y-1.5 mb-6 max-w-[200px]">
          <li>{chip} Processor</li>
          <li className="opacity-80">{spec2}</li>
        </ul>
      </div>

      {/* Pricing / Call-to-Action (Apple-style links and pills) */}
      <div className="w-full pt-4 border-t border-border flex flex-col items-center gap-3">
        <button
          type="button"
          className="px-4 py-1.5 text-xs font-semibold text-white bg-accent rounded-full hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Buy ${name}`}
        >
          Buy
        </button>
        <a 
          href="#" 
          className="text-xs font-medium text-accent hover:underline inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          aria-label={`Learn more about ${name}`}
        >
          Learn more <span className="ml-0.5" aria-hidden="true">&gt;</span>
        </a>
      </div>
    </article>
  );
}
