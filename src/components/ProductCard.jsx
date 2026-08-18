import React from 'react';

function DeviceSilhouette({ type }) {
  if (type === 'laptop') {
    return (
      <svg viewBox="0 0 120 80" className="w-28 h-20 text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-laptop-title">
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
      <svg viewBox="0 0 80 120" className="w-16 h-24 text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-phone-title">
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
      <svg viewBox="0 0 120 100" className="w-28 h-24 text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-imac-title">
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
      <svg viewBox="0 0 100 60" className="w-24 h-16 text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-mini-title">
        <title id="svg-mini-title">Minimalist outline of a Mac mini</title>
        {/* Body */}
        <rect x="12" y="22" width="76" height="16" rx="3.5" className="stroke-text-primary fill-text-primary/5" />
        {/* Indicator Dot */}
        <circle cx="78" cy="30" r="1.2" fill="currentColor" className="text-accent-link stroke-none" />
      </svg>
    );
  }

  if (type === 'studio') { // Mac Studio
    return (
      <svg viewBox="0 0 100 70" className="w-24 h-18 text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-studio-title">
        <title id="svg-studio-title">Geometric silhouette of a Mac Studio workstation</title>
        {/* Body */}
        <rect x="12" y="12" width="76" height="44" rx="5" className="stroke-text-primary fill-text-primary/5" />
        {/* Front SD Slot */}
        <rect x="22" y="38" width="1" height="6" fill="currentColor" className="text-text-primary stroke-none" />
        {/* Front USB-C Ports */}
        <rect x="28" y="38" width="1.5" height="5" rx="0.5" className="stroke-text-primary" />
        <rect x="34" y="38" width="1.5" height="5" rx="0.5" className="stroke-text-primary" />
        {/* Power LED */}
        <circle cx="78" cy="41" r="1" fill="currentColor" className="text-accent-link stroke-none" />
      </svg>
    );
  }

  return null;
}

export default function ProductCard({ product }) {
  const { name, description, pricingDetails, colors, imageBg, image, category } = product;

  // Differentiate layout proportions based on category
  const isMac = category === 'mac';
  const cardWidth = isMac ? 'w-[320px] md:w-[380px]' : 'w-[260px] md:w-[300px]';
  const imageAspect = isMac ? 'aspect-[4/3]' : 'aspect-[4/5] md:aspect-square';

  return (
    <article 
      className={`group relative flex flex-col items-center text-center ${cardWidth} flex-shrink-0 snap-center outline-none focus-visible:ring-2 focus-visible:ring-accent-link focus-visible:ring-offset-4 focus-visible:ring-offset-bg-primary rounded-xl`}
      aria-label={name}
      tabIndex="0"
    >
      {/* Image Container */}
      <div className={`w-full ${imageAspect} ${imageBg || 'bg-white'} rounded-[32px] flex items-center justify-center p-6 mb-6 overflow-hidden transition-transform duration-300 ease-[var(--apple-ease)] group-hover:scale-[1.02]`}>
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-contain drop-shadow-sm" />
        ) : (
          <div className="w-24 h-32 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">No Image</div>
        )}
      </div>

      {/* Color Swatches */}
      {colors && colors.length > 0 && (
        <div className="flex gap-2 justify-center mb-6" aria-label="Available colors">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="w-3 h-3 rounded-full border border-black/10 dark:border-white/20 shadow-inner"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}

      {/* Title & Description */}
      <div className="flex flex-col items-center flex-1 w-full px-2">
        <h3 className="text-[24px] font-semibold tracking-tight text-text-primary mb-2">
          {name}
        </h3>
        <p className="text-[15px] leading-tight text-text-primary whitespace-pre-line mb-8 min-h-[40px]">
          {description}
        </p>

        {/* Pricing */}
        <p className="text-[12px] leading-[1.4] text-text-secondary whitespace-pre-line mb-8 min-h-[60px]">
          {pricingDetails}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex items-center justify-center gap-6 mt-auto">
        <a 
          href="#" 
          className="bg-accent-link text-white text-[15px] font-normal px-5 py-2 rounded-full hover:bg-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-link outline-none"
        >
          Learn more
        </a>
        <a 
          href="#" 
          className="text-accent-link text-[15px] font-normal hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-link rounded outline-none"
        >
          Buy <span aria-hidden="true">&gt;</span>
        </a>
      </div>
    </article>
  );
}
