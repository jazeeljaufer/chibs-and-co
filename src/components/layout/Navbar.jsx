import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { siteData } from '../../data/site';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-paper/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl text-ink hover:text-cherry transition-colors focus:outline-none focus:ring-2 focus:ring-cherry rounded-md">
          {siteData.brandName}
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {siteData.navLinks.map(link => (
            <a key={link.label} href={link.href} className="font-body font-medium text-ink hover:text-cherry transition-colors focus:outline-none focus:ring-2 focus:ring-cherry rounded-md px-1">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={siteData.instagramUrl} icon variant="primary" className="py-2.5">
            Order on Instagram
          </Button>
        </div>

        <button 
          className="md:hidden p-2 text-ink focus:outline-none focus:ring-2 focus:ring-cherry rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-paper shadow-lg border-t border-woodLight/20 py-4 px-4 flex flex-col gap-4">
          {siteData.navLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="font-body font-medium text-lg text-ink p-2 hover:bg-bg rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-woodLight/20">
            <Button href={siteData.instagramUrl} icon className="w-full justify-center">
              Order on Instagram
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}