import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import DollCard from '../ui/DollCard';
import Lightbox from '../ui/Lightbox';
import { dolls } from '../../data/dolls';

export default function Collection() {
  const [selectedDoll, setSelectedDoll] = useState(null);

  return (
    <section id="collection" className="py-24">
      <Container>
        <SectionHeading center subtitle="Browse some of our recent creations to see what's possible.">
          The Collection
        </SectionHeading>

        <div className="relative overflow-hidden w-full mb-8 rounded-4xl">
          {/* Subtle fade edges for the marquee */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee py-4">
            {[...dolls, ...dolls].map((doll, index) => (
              <div key={`${doll.id}-${index}`} className="w-64 md:w-72 shrink-0 pr-6">
                <DollCard doll={doll} onClick={setSelectedDoll} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Shelf motif under the gallery */}
        <div className="w-full h-4 bg-wood rounded-full mt-2 shadow-md hidden sm:block" />
        <div className="w-[98%] mx-auto h-2 bg-woodLight rounded-b-full hidden sm:block" />

      </Container>
      
      {selectedDoll && <Lightbox doll={selectedDoll} onClose={() => setSelectedDoll(null)} />}
    </section>
  );
}