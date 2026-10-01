import React from 'react';

export default function SectionHeading({ children, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center flex flex-col items-center' : ''}`}>
      <h2 className="font-heading text-4xl md:text-5xl text-ink mb-4">{children}</h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl font-body">
          {subtitle}
        </p>
      )}
      {center && <div className="w-24 h-1.5 bg-wood rounded-full mt-6" />}
      {!center && <div className="w-24 h-1.5 bg-wood rounded-full mt-6" />}
    </div>
  );
}