import React from 'react';
import Button from './Button';
import { siteData } from '../../data/site';

export default function DollCard({ doll, onClick }) {
  return (
    <div className="group bg-paper rounded-4xl p-3 shadow-warm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-woodLight/20">
      <div 
        className="relative overflow-hidden rounded-3xl aspect-square cursor-pointer mb-3 bg-bg"
        onClick={() => onClick(doll)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick(doll)}
        aria-label={`View ${doll.title} details`}
      >
        <img 
          src={doll.image} 
          alt={doll.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
      </div>
      <div className="flex-grow flex flex-col px-2 pb-2">
        <div className="flex flex-wrap gap-2 mb-3">
          {doll.tags.map(tag => (
            <span key={tag} className="text-xs font-bold text-muted bg-woodLight/20 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-lg text-ink mb-1">{doll.title}</h3>
        <p className="text-muted text-sm flex-grow mb-3">{doll.description}</p>
        <div className="mt-auto">
          <Button href={siteData.instagramUrl} variant="small" className="w-full">
            Ask about this one
          </Button>
        </div>
      </div>
    </div>
  );
}