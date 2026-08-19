import React from 'react';

export default function DeviceSilhouette({ type }) {
  if (type === 'laptop') {
    return (
      <svg viewBox="0 0 120 80" className="w-full h-full text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-laptop-title">
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
      <svg viewBox="0 0 80 120" className="w-full h-full text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-phone-title">
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
      <svg viewBox="0 0 120 100" className="w-full h-full text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-imac-title">
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
      <svg viewBox="0 0 100 60" className="w-full h-full text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-mini-title">
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
      <svg viewBox="0 0 100 70" className="w-full h-full text-accent-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="svg-studio-title">
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
