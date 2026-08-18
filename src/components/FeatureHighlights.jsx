import React from 'react';

export default function FeatureHighlights() {
  return (
    <section className="bg-bg-primary px-[22px] md:px-[40px] lg:px-[min(max(4vw,40px),120px)] py-[20px] md:py-[40px]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[32px]">
        {/* Highlight 1 - Camera */}
        <article className="relative overflow-hidden group bg-white rounded-[24px] md:rounded-[32px] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex flex-col items-center justify-center text-center outline-none focus-visible:ring-2 focus-visible:ring-accent-link">
          <div className="z-10 flex flex-col items-center px-6">
            <h3 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-black drop-shadow-sm">
              Shot on iPhone 17 Pro.
            </h3>
            <p className="mt-2 text-[17px] text-black/80 max-w-sm drop-shadow-sm">
              A camera so good, it's practically a studio.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-block bg-black text-white text-[15px] font-normal px-5 py-2 rounded-full hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black outline-none">
                See the gallery
              </a>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-90">
             <img src="/images/iphone_17pro.jpg" alt="iPhone 17 Pro Camera" className="w-full h-full object-cover object-center" />
          </div>
        </article>

        {/* Highlight 2 - Performance */}
        <article className="relative overflow-hidden group bg-black rounded-[24px] md:rounded-[32px] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex flex-col items-center justify-between pt-[40px] md:pt-[64px] text-center outline-none focus-visible:ring-2 focus-visible:ring-accent-link">
          <div className="z-10 flex flex-col items-center px-6">
            <h3 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-white">
              M4 Max. Mind-blowing.
            </h3>
            <p className="mt-2 text-[17px] text-gray-400 max-w-sm">
              The most advanced chip ever built for a personal computer.
            </p>
            <div className="mt-6 flex gap-6">
              <a href="#" className="text-[19px] md:text-[21px] font-[400] text-accent-link hover:underline focus-visible:ring-2 focus-visible:ring-accent-link rounded px-1 outline-none">
                Learn more &gt;
              </a>
            </div>
          </div>
          <div className="flex-1 w-full flex items-end justify-center pointer-events-none mt-8">
            <img src="/images/mbp_14_.jpg" alt="MacBook Pro M4" className="w-[85%] max-w-[550px] h-auto object-contain object-bottom" />
          </div>
        </article>
      </div>
    </section>
  );
}
