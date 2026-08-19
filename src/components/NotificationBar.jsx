import React from 'react';

export default function NotificationBar() {
  return (
    <div className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] py-3 px-4 text-center border-b border-border mt-16 md:mt-20">
      <p className="text-[13px] md:text-[14px] leading-tight text-text-primary max-w-4xl mx-auto">
        Get up to ₹5000 instant cashback on selected iPhone models with eligible cards. 
        Plus up to 6 months of No Cost EMI.^{" "}
        <a href="#" className="text-[#0066cc] dark:text-[#2997ff] hover:underline focus-visible:ring-2 focus-visible:ring-accent-link rounded outline-none ml-1">
          Shop iPhone &gt;
        </a>
      </p>
    </div>
  );
}
