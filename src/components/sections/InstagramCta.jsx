import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { siteData } from '../../data/site';
import { Instagram } from 'lucide-react';

export default function InstagramCta() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-cherry text-white rounded-[3rem] p-12 md:p-20 text-center shadow-xl relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl -ml-32 -mb-32" />
        
        <div className="relative z-10 flex flex-col items-center">
          <Instagram className="w-16 h-16 mb-6 text-white/90" />
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Ready for your chibi?</h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl">
            Slide into our DMs with your ideas. We can't wait to paint something special for you.
          </p>
          <Button href={siteData.instagramUrl} variant="secondary" className="text-cherry hover:bg-white bg-paper text-lg px-8 py-4">
            Message {siteData.instagramHandle}
          </Button>
        </div>
      </div>
    </section>
  );
}