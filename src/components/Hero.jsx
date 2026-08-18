import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-bg-primary px-[22px] md:px-[40px] lg:px-[min(max(4vw,40px),120px)] pt-[88px] pb-0 md:pt-[120px] flex flex-col items-center text-center border-b border-border min-h-[70vh] md:min-h-[90vh]"
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

      {/* Large Hero Graphic */}
      <div className="mt-16 w-full max-w-[1400px] mx-auto flex-1 flex items-end justify-center relative translate-y-8 md:translate-y-24">
        <img src="/images/mba_13_15_.jpg" alt="MacBook Air" className="w-[95%] md:w-[85%] h-auto object-contain drop-shadow-2xl" />
        <img src="/images/iphone_17pro.jpg" alt="iPhone 17 Pro" className="w-[30%] md:w-[25%] h-auto object-contain absolute bottom-[-10%] right-[2%] md:right-[5%] drop-shadow-2xl z-10" />
      </div>
    </section>
  );
}
