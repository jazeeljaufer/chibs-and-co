import React from 'react';

export default function StepItem({ step }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cherry text-white flex items-center justify-center font-heading text-xl shadow-md">
        {step.num}
      </div>
      <div>
        <h3 className="font-heading text-xl text-ink mb-2">{step.title}</h3>
        <p className="text-muted leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}