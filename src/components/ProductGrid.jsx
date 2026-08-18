import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="showcase" 
      className="py-[60px] md:py-[100px] bg-bg-primary overflow-hidden"
      aria-label="Product Showcase"
    >
      <div className="max-w-[1400px] mx-auto px-[22px] md:px-[40px] lg:px-[min(max(4vw,40px),120px)] relative">
        {/* Carousel Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-text-primary leading-none">
            Explore the lineup.
          </h2>
          <a href="#" className="text-[17px] text-accent-link hover:underline outline-none focus-visible:ring-2 focus-visible:ring-accent-link rounded">
            Compare all models <span aria-hidden="true">&gt;</span>
          </a>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          id="product-grid-panel"
          role="tabpanel"
          aria-labelledby={`tab-${products[0]?.category || 'mac'}`}
          className="flex overflow-x-auto gap-[20px] md:gap-[32px] pb-12 pt-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-0 right-[22px] md:right-[40px] lg:right-[min(max(4vw,40px),120px)] flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-[#e8e8ed] dark:bg-[#2c2c2e] flex items-center justify-center text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#d2d2d7] dark:hover:bg-[#3a3a3c] transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-[#e8e8ed] dark:bg-[#2c2c2e] flex items-center justify-center text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#d2d2d7] dark:hover:bg-[#3a3a3c] transition-colors focus-visible:ring-2 focus-visible:ring-accent-link outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
