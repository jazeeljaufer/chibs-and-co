import React from 'react';
import Container from '../layout/Container';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-woodLight/20 rounded-full blur-3xl -z-10" />
      <Container>
        <h2 className="font-heading text-4xl text-center text-ink mb-16">Loved by happy customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-bg p-8 rounded-3xl shadow-sm relative">
              <span className="absolute top-4 left-6 text-6xl text-cherry/10 font-heading">"</span>
              <p className="text-muted italic relative z-10 mb-6 mt-4 leading-relaxed">
                "{t.quote}"
              </p>
              <p className="font-heading text-ink">{t.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}