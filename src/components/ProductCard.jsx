import React from 'react';

function DeviceSilhouette({ type }) {
  if (type === 'laptop') {
    return (
      <svg viewBox="0 0 120 80" className="w-28 h-20 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-laptop-title">
        <title id="svg-laptop-title">Geometric abstraction of laptop display and base</title>
        {/* Screen */}
        <rect x="20" y="10" width="80" height="46" rx="4" className="stroke-text-primary" />
        {/* Screen inner details */}
        <line x1="24" y1="14" x2="96" y2="14" strokeDasharray="2 2" className="opacity-40" />
        {/* Base */}
        <path d="M12 60 L108 60 L112 66 L8 66 Z" className="fill-accent/10" />
        <line x1="50" y1="60" x2="70" y2="60" strokeWidth="3" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 80 120" className="w-16 h-24 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-phone-title">
        <title id="svg-phone-title">Geometric outline representing a smartphone silhouette</title>
        {/* Phone body */}
        <rect x="15" y="10" width="50" height="100" rx="10" className="stroke-text-primary fill-accent/5" />
        {/* Dynamic Island or camera module placeholder */}
        <rect x="32" y="18" width="16" height="5" rx="2.5" className="fill-text-primary stroke-none" />
        {/* Camera lenses represented as clean circles */}
        <circle cx="28" cy="34" r="4" className="stroke-accent" />
        <circle cx="28" cy="46" r="4" className="stroke-accent" />
        {/* Interface wireframe */}
        <rect x="22" y="65" width="36" height="34" rx="2" className="opacity-30" strokeDasharray="2 2" />
      </svg>
    );
  }

  if (type === 'desktop') { // iMac
    return (
      <svg viewBox="0 0 120 100" className="w-28 h-24 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-imac-title">
        <title id="svg-imac-title">Geometric outline of a desktop computer and stand</title>
        {/* Screen */}
        <rect x="15" y="10" width="90" height="56" rx="4" className="stroke-text-primary fill-accent/5" />
        {/* Bottom bezel line */}
        <line x1="15" y1="56" x2="105" y2="56" />
        {/* Stand */}
        <path d="M50 66 L42 86 L78 86 L70 66 Z" className="fill-accent/10" />
      </svg>
    );
  }

  if (type === 'mini') { // Mac mini
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-16 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-mini-title">
        <title id="svg-mini-title">Minimalist geometric outline of a compact desktop computer</title>
        {/* Body */}
        <rect x="10" y="20" width="80" height="20" rx="4" className="stroke-text-primary fill-accent/5" />
        {/* Status indicator dot */}
        <circle cx="80" cy="30" r="1.5" className="fill-accent stroke-none" />
      </svg>
    );
  }

  if (type === 'studio') { // Mac Studio
    return (
      <svg viewBox="0 0 100 70" className="w-24 h-18 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-studio-title">
        <title id="svg-studio-title">Geometric silhouette of a professional modular workstation</title>
        {/* Body */}
        <rect x="12" y="15" width="76" height="40" rx="6" className="stroke-text-primary fill-accent/5" />
        {/* Subtle horizontal vents line */}
        <line x1="20" y1="23" x2="80" y2="23" strokeDasharray="3 3" className="opacity-40" />
        {/* Front Ports */}
        <rect x="22" y="38" width="2" height="6" rx="0.5" className="fill-text-primary stroke-none" />
        <rect x="28" y="38" width="2" height="6" rx="0.5" className="fill-text-primary stroke-none" />
        {/* Status dot */}
        <circle cx="76" cy="41" r="1.5" className="fill-accent stroke-none" />
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
      className="group relative flex flex-col justify-between items-center p-8 bg-card-bg border border-border rounded-2xl text-center outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
      aria-label={`${name}, powered by ${chip}, starting at ${price}`}
    >
      {/* Geometric Silhouette */}
      <div className="h-32 flex items-center justify-center mb-6">
        <DeviceSilhouette type={silhouetteType} />
      </div>

      {/* Info Group */}
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-xl font-display font-bold text-text-primary mb-2">
          {name}
        </h3>
        
        {/* Chip badge */}
        <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-bg-primary text-accent border border-border mb-4">
          {chip}
        </span>

        {/* Spec highlights */}
        <ul className="text-sm text-text-secondary space-y-1 mb-6">
          <li className="font-medium text-text-primary">{chip} Processing Power</li>
          <li className="text-xs text-text-secondary">{spec2}</li>
        </ul>
      </div>

      {/* Pricing / Call-to-Action */}
      <div className="w-full pt-4 border-t border-border flex flex-col items-center">
        <span className="text-lg font-bold text-text-primary mb-3">
          {price}
        </span>
        <button
          type="button"
          className="w-full py-2.5 px-4 text-xs font-semibold text-text-primary bg-bg-primary hover:bg-bg-secondary border border-border rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          aria-label={`Configure ${name}`}
        >
          Select Model
        </button>
      </div>
    </article>
  );
}
