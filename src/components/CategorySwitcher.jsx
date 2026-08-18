import React from 'react';

export default function CategorySwitcher({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex justify-center py-8 bg-bg-primary border-b border-border">
      <div 
        className="inline-flex p-1 rounded-xl bg-bg-secondary border border-border" 
        role="tablist" 
        aria-label="Product categories"
      >
        <button
          role="tab"
          aria-selected={activeCategory === 'mac'}
          aria-controls="product-grid-panel"
          id="tab-mac"
          onClick={() => setActiveCategory('mac')}
          className={`px-6 py-2.5 text-sm font-semibold rounded-lg select-none outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            activeCategory === 'mac'
              ? 'bg-accent text-white'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Mac Lineup
        </button>
        <button
          role="tab"
          aria-selected={activeCategory === 'iphone'}
          aria-controls="product-grid-panel"
          id="tab-iphone"
          onClick={() => setActiveCategory('iphone')}
          className={`px-6 py-2.5 text-sm font-semibold rounded-lg select-none outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            activeCategory === 'iphone'
              ? 'bg-accent text-white'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          iPhone Lineup
        </button>
      </div>
    </div>
  );
}
