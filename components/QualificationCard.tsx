
import React from 'react';
import { Qualification } from '../types';

export const QualificationCard: React.FC<{ item: Qualification }> = ({ item }) => {
  return (
    <div className="group relative p-8 border border-gray-200 bg-white hover:bg-black transition-all duration-300">
      <div className="flex flex-col h-full">
        <span className="text-xs font-bold text-gray-400 group-hover:text-gray-500 transition-colors mb-2">
          {item.period}
        </span>
        <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors mb-4 uppercase tracking-tight leading-tight">
          {item.title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-300 transition-colors font-medium">
          {item.institution}
        </p>
        {item.university && (
          <p className="text-gray-400 group-hover:text-gray-500 transition-colors text-sm mt-1">
            {item.university}
          </p>
        )}
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  );
};
