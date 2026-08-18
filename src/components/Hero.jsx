import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-bg-primary px-4 py-20 md:py-28 flex flex-col items-center text-center border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Ecosystem Headline */}
        <h1 
          id="hero-heading" 
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-text-primary tracking-tight leading-none"
        >
          Mac and iPhone.
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-text-secondary font-normal tracking-tight max-w-2xl">
          Designed to connect. Built to perform.
        </p>

        {/* Primary CTA (Apple-style blue link with chevron) */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#showcase"
            className="inline-flex items-center text-accent hover:underline text-sm md:text-base font-semibold focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-1"
            aria-label="Explore the Apple lineup"
          >
            Explore all models <span className="ml-1" aria-hidden="true">&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
