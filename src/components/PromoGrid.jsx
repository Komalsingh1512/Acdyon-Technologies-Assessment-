import React from 'react';

export default function PromoGrid() {
  return (
    <section className="bg-bg-primary px-[22px] md:px-[40px] lg:px-[min(max(4vw,40px),120px)] py-[20px] md:py-[40px]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[32px]">
        {/* Promo 1 - Apple Intelligence */}
        <article className="group bg-[#fbfbfd] dark:bg-[#1d1d1f] rounded-[24px] overflow-hidden h-[580px] md:h-[650px] flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-accent-link">
          
          {/* TextZone */}
          <div className="w-full pt-[56px] flex flex-col items-center text-center px-6 shrink-0 z-10">
            <h2 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.015em] text-[#1d1d1f] dark:text-[#f5f5f7]">
              Apple Intelligence.
            </h2>
            <p className="mt-2 text-[21px] leading-[1.19] text-[#6e6e73] dark:text-[#a1a1a6]">
              AI for the rest of us.
            </p>
            <div className="mt-[8px] flex justify-center gap-[24px]">
              <a href="#" className="flex items-center text-[12px] font-medium text-[#0066cc] dark:text-[#2997ff] hover:underline focus-visible:ring-2 focus-visible:ring-accent-link rounded outline-none">
                Learn more <span className="ml-[4px]" aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>
          
          {/* ImageZone */}
          <div className="w-full flex-1 flex items-end justify-center overflow-hidden">
            <img 
              src="/images/iphone_17_.jpg" 
              alt="iPhone 17" 
              className="w-full h-full object-contain object-bottom mix-blend-multiply dark:mix-blend-screen" 
            />
          </div>
        </article>

        {/* Promo 2 - iMac */}
        <article className="group bg-[#fbfbfd] dark:bg-[#1d1d1f] rounded-[24px] overflow-hidden h-[580px] md:h-[650px] flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-accent-link">
          
          {/* TextZone */}
          <div className="w-full pt-[56px] flex flex-col items-center text-center px-6 shrink-0 z-10">
            <h2 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.015em] text-[#1d1d1f] dark:text-[#f5f5f7]">
              iMac.
            </h2>
            <p className="mt-2 text-[21px] leading-[1.19] text-[#6e6e73] dark:text-[#a1a1a6]">
              Packed with more juice.
            </p>
            <div className="mt-[8px] flex justify-center gap-[24px]">
              <a href="#" className="flex items-center text-[12px] font-medium text-[#0066cc] dark:text-[#2997ff] hover:underline focus-visible:ring-2 focus-visible:ring-accent-link rounded outline-none">
                Learn more <span className="ml-[4px]" aria-hidden="true">&gt;</span>
              </a>
              <a href="#" className="flex items-center text-[12px] font-medium text-[#0066cc] dark:text-[#2997ff] hover:underline focus-visible:ring-2 focus-visible:ring-accent-link rounded outline-none">
                Buy <span className="ml-[4px]" aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>
          
          {/* ImageZone */}
          <div className="w-full flex-1 flex items-end justify-center overflow-hidden">
             <img 
               src="/images/imac_24_.jpg" 
               alt="iMac 24-inch" 
               className="w-[90%] max-w-[550px] h-full object-contain object-bottom mix-blend-multiply dark:mix-blend-screen" 
             />
          </div>
        </article>
      </div>
    </section>
  );
}
