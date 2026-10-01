import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import StepItem from '../ui/StepItem';
import { steps } from '../../data/steps';
import processImg from '../../assets/images/process.svg';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <Container>
        <SectionHeading subtitle="From your imagination to a finished piece, the process is simple and personal.">
          How it works
        </SectionHeading>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-10">
            {steps.map((step, i) => (
              <StepItem key={i} step={step} />
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative p-4 bg-paper rounded-[3rem] shadow-warm rotate-1">
              <img src={processImg} alt="Painting a wooden doll in progress" className="w-full h-auto rounded-[2.5rem] bg-bg aspect-square object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}