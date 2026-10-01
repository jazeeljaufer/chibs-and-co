import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { siteData } from '../../data/site';
import heroImg from '../../assets/images/hero.svg';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-woodLight/20 rounded-full blur-3xl -z-10" />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cherry/10 text-cherry font-bold text-sm mb-6">
              Handcrafted with love
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-ink leading-tight mb-6 text-balance">
              Sweet little chibis, hand painted to look like you.
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-lg leading-relaxed">
              Custom wooden peg dolls made perfectly to match your favorite people. The ultimate personalized gift for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href={siteData.instagramUrl} icon>
                Order on Instagram
              </Button>
            </div>
          </div>
          <img 
              src={heroImg} 
              alt="Chibs & Co Hero Illustration" 
              className="w-full max-w-lg h-auto"
            />
        </div>
      </Container>
    </section>
  );
}