import React from 'react';

export default function CategorySwitcher({ activeCategory, setActiveCategory }) {
  return (
    <div className="bg-bg-secondary border-b border-border flex justify-center">
      <div 
        className="flex gap-8 px-[22px] md:px-[40px] max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" 
        role="tablist" 
        aria-label="Product categories"
      >
        <button
          role="tab"
          aria-selected={activeCategory === 'mac'}
          aria-controls="product-grid-panel"
          id="tab-mac"
          onClick={() => setActiveCategory('mac')}
          className={`py-4 text-[17px] whitespace-nowrap border-b-[2px] outline-none focus-visible:ring-2 focus-visible:ring-accent-link transition-all duration-150 ease-[var(--apple-ease)] ${
            activeCategory === 'mac'
              ? 'border-accent-link text-text-primary font-[400]'
              : 'border-transparent text-text-secondary hover:text-text-primary font-[400]'
          }`}
        >
          Mac
        </button>
        <button
          role="tab"
          aria-selected={activeCategory === 'iphone'}
          aria-controls="product-grid-panel"
          id="tab-iphone"
          onClick={() => setActiveCategory('iphone')}
          className={`py-4 text-[17px] whitespace-nowrap border-b-[2px] outline-none focus-visible:ring-2 focus-visible:ring-accent-link transition-all duration-150 ease-[var(--apple-ease)] ${
            activeCategory === 'iphone'
              ? 'border-accent-link text-text-primary font-[400]'
              : 'border-transparent text-text-secondary hover:text-text-primary font-[400]'
          }`}
        >
          iPhone
        </button>
      </div>
    </div>
  );
}
