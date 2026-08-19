import React from 'react';
import DeviceSilhouette from './DeviceSilhouette';

export default function Hero() {
  return (
    <section 
      className="relative bg-bg-primary px-[20px] md:px-[40px] pt-[88px] pb-[32px] md:pt-[120px] md:pb-[64px] flex flex-col items-center text-center border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center z-10">
        {/* Ecosystem Headline */}
        <h1 
          id="hero-heading" 
          className="text-hero text-text-primary text-balance"
        >
          Mac and iPhone.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-subhead max-w-3xl text-balance">
          Designed to connect. Built to perform.
        </p>

        {/* Primary CTA (Apple-style blue link with chevron) */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#showcase"
            className="inline-flex items-center text-accent-link hover:underline text-[19px] md:text-[21px] font-normal focus-visible:ring-2 focus-visible:ring-accent-link focus-visible:outline-none rounded px-1"
            aria-label="Explore the Apple lineup"
          >
            Explore all models <span className="ml-1" aria-hidden="true">&gt;</span>
          </a>
        </div>
      </div>

      {/* Large Hero Graphic Composition */}
      <div className="mt-12 md:mt-16 relative w-[90%] md:w-[80%] max-w-[900px] mx-auto flex items-end justify-center rounded-[24px] md:rounded-[32px] overflow-hidden drop-shadow-2xl bg-white/5 dark:bg-black/5">
        <img 
          src="/images/hero_composite.png" 
          alt="MacBook and iPhone" 
          className="w-[110%] max-w-[110%] h-auto object-cover object-center scale-[1.05] md:scale-[1.1] translate-y-2"
        />
      </div>
    </section>
  );
}
