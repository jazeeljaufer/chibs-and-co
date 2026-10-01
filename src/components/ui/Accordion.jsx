import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-paper border border-woodLight/30 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-woodLight/10 hover:bg-bg/50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg text-ink">{item.question}</span>
              <ChevronDown className={`w-5 h-5 text-cherry transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="p-6 pt-0 text-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}