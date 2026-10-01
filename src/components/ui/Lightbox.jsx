import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';
import { siteData } from '../../data/site';

export default function Lightbox({ doll, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!doll) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-paper rounded-4xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl relative"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-paper/80 backdrop-blur rounded-full text-ink hover:bg-woodLight/30 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="w-full md:w-1/2 bg-bg">
          <img src={doll.image} alt={doll.title} className="w-full h-full object-cover max-h-[50vh] md:max-h-none" />
        </div>
        
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {doll.tags.map(tag => (
              <span key={tag} className="text-sm font-bold text-muted bg-woodLight/20 px-3 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <h2 id="lightbox-title" className="font-heading text-3xl md:text-4xl text-ink mb-4">{doll.title}</h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">{doll.description}</p>
          <Button href={siteData.instagramUrl} icon className="w-full md:w-auto self-start">
            Order one like this
          </Button>
        </div>
      </div>
    </div>
  );
}