import React from 'react';
import Container from '../layout/Container';
import { Palette, Heart, Gift } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: "Hand painted", icon: <Palette className="w-6 h-6 text-cherry" />, desc: "Carefully painted with artist-grade acrylics." },
    { title: "Custom made", icon: <Heart className="w-6 h-6 text-cherry" />, desc: "Tailored to your photos and specific requests." },
    { title: "Gift ready", icon: <Gift className="w-6 h-6 text-cherry" />, desc: "Arrives beautifully packaged, ready to give." }
  ];

  return (
    <section id="about" className="py-20 bg-paper">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-ink mb-6">Small dolls, big meaning.</h2>
          <p className="text-lg text-muted leading-relaxed">
            Every chibi begins as a simple piece of solid wood. With a fine brush, a steady hand, and a lot of love, we bring them to life to look just like your loved ones. It's not just a doll; it's a memory you can hold.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map(item => (
            <div key={item.title} className="flex flex-col items-center text-center p-6 bg-bg rounded-3xl">
              <div className="w-12 h-12 bg-cherry/10 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl text-ink mb-2">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}