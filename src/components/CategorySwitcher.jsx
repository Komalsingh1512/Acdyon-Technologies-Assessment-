import React from 'react';

export default function CategorySwitcher({ activeCategory, setActiveCategory }) {
  return (
    <div className="bg-bg-secondary border-b border-border flex justify-center">
      <div 
        className="flex gap-8 px-4" 
        role="tablist" 
        aria-label="Product categories"
      >
        <button
          role="tab"
          aria-selected={activeCategory === 'mac'}
          aria-controls="product-grid-panel"
          id="tab-mac"
          onClick={() => setActiveCategory('mac')}
          className={`py-4 text-sm font-normal border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            activeCategory === 'mac'
              ? 'border-text-primary text-text-primary font-semibold'
              : 'border-transparent text-text-secondary hover:text-text-primary'
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
          className={`py-4 text-sm font-normal border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            activeCategory === 'iphone'
              ? 'border-text-primary text-text-primary font-semibold'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          iPhone
        </button>
      </div>
    </div>
  );
}
