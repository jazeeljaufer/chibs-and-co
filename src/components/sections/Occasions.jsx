import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import { occasions } from '../../data/occasions';
import { GraduationCap, Heart, Briefcase, Gift } from 'lucide-react';

const icons = { GraduationCap, Heart, Briefcase, Gift };

export default function Occasions() {
  return (
    <section id="occasions" className="py-24 bg-ink text-bg">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-paper">Perfect for any moment.</h2>
              <p className="text-bg/80 text-lg mb-8 leading-relaxed">
                Whether celebrating a milestone, a new job, or just because, there's always a reason for a chibi.
              </p>
              <div className="w-16 h-1 bg-cherry rounded-full" />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="space-y-12">
              {occasions.map((occ, i) => {
                const Icon = icons[occ.icon];
                return (
                  <div key={i} className="flex gap-6 border-b border-bg/10 pb-12 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 bg-bg/10 rounded-2xl flex items-center justify-center">
                        {Icon && <Icon className="w-7 h-7 text-cherry" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-paper mb-3">{occ.title}</h3>
                      <p className="text-bg/80 leading-relaxed text-lg">{occ.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}