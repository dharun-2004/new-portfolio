
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => {
  return (
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-black mb-2">
        {children}
      </h2>
      {subtitle && <p className="text-gray-500 uppercase tracking-tighter text-sm font-medium">{subtitle}</p>}
      <div className="w-16 h-1 bg-black mt-4 mx-auto md:mx-0"></div>
    </div>
  );
};
