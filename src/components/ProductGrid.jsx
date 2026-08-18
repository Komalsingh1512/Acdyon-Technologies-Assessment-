import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <section 
      id="showcase" 
      className="py-16 px-4 bg-bg-secondary"
      aria-label="Product Showcase"
    >
      <div 
        id="product-grid-panel"
        role="tabpanel"
        aria-labelledby={`tab-${products[0]?.category || 'mac'}`}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
