import React from 'react';
import { Columns, Headphones, ShoppingBag, Smartphone } from 'lucide-react';

const CHAPTER_LINKS = [
  { id: 'iphone-17-pro', name: 'iPhone 17 Pro', image: '/images/iphone_17pro.jpg', isNew: true },
  { id: 'iphone-air', name: 'iPhone Air', image: '/images/iphone_air_.jpg', isNew: true },
  { id: 'iphone-17', name: 'iPhone 17', image: '/images/iphone_17_.jpg', isNew: true },
  { id: 'iphone-17e', name: 'iPhone 17e', image: '/images/iphone_17e.jpg', isNew: true },
  { id: 'iphone-16', name: 'iPhone 16', image: '/images/iphone_16.jpg' },
  { id: 'compare', name: 'Compare', icon: Columns },
  { id: 'accessories', name: 'Accessories', icon: Headphones },
  { id: 'shop', name: 'Shop iPhone', icon: ShoppingBag },
  { id: 'ios', name: 'iOS Preview', icon: Smartphone, highlight: true },
];

export default function ChapterNav() {
  return (
    <section className="bg-bg-primary pt-[40px] pb-[30px] border-b border-border flex flex-col items-center">
      {/* Title */}
      <div className="w-full max-w-[1200px] px-[22px] md:px-[40px] flex justify-between items-end mb-[40px]">
        <h1 className="text-[48px] md:text-[64px] font-semibold tracking-[-0.015em] text-text-primary leading-none">
          iPhone
        </h1>
      </div>

      {/* Horizontal Scrollable Icons */}
      <div className="w-full max-w-[1200px] overflow-hidden">
        <div className="flex gap-[32px] md:gap-[48px] px-[22px] md:px-[40px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden items-start justify-start md:justify-center">
          
          {CHAPTER_LINKS.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className="flex flex-col items-center group flex-shrink-0 w-[80px] md:w-[90px] outline-none focus-visible:ring-2 focus-visible:ring-accent-link rounded-md p-2 transition-transform duration-300 hover:scale-105"
            >
              {/* Icon / Image container */}
              <div className="h-[54px] w-full flex items-center justify-center mb-2">
                {link.image ? (
                  <img src={link.image} alt={link.name} className="h-full w-auto object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300" />
                ) : link.icon ? (
                  <div className="h-[44px] w-[44px] flex items-center justify-center bg-[#f5f5f7] dark:bg-[#2d2d2d] rounded-xl text-text-primary group-hover:text-accent-link transition-colors duration-300">
                     {React.createElement(link.icon, { className: 'w-6 h-6' })}
                  </div>
                ) : null}
              </div>

              {/* Name */}
              <span className="text-[12px] font-medium text-text-primary text-center leading-tight whitespace-nowrap">
                {link.name}
              </span>

              {/* "New" or Highlight Text */}
              {link.isNew && (
                <span className="text-[10px] text-[#bf4800] dark:text-[#ff6b22] mt-1 font-medium">New</span>
              )}
              {link.highlight && (
                <span className="text-[10px] text-[#bf4800] dark:text-[#ff6b22] mt-1 font-medium">Preview</span>
              )}
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
