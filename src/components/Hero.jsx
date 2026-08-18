import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-bg-primary px-4 py-20 md:py-32 flex flex-col items-center text-center border-b border-border"
      aria-labelledby="hero-heading"
    >
      {/* Subtle Background Treatment: Ambient Mesh Gradient (Static) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20" 
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Short Tagline */}
        <span className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
          The Aether Ecosystem
        </span>

        {/* Value Prop Headline */}
        <h1 
          id="hero-heading" 
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-tight max-w-3xl"
        >
          Synthesized Power. <br />
          Seamless Flow.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary font-normal max-w-2xl leading-relaxed">
          Aether unites high-performance computing and mobile design into a singular, responsive ecosystem built for creative and engineering workflows.
        </p>

        {/* Primary CTA Button (no animations) */}
        <div className="mt-10">
          <a
            href="#showcase"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-accent rounded-lg shadow-sm hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-bg-primary"
            aria-label="Explore the Aether product lineup"
          >
            Explore the Lineup
          </a>
        </div>
      </div>
    </section>
  );
}
