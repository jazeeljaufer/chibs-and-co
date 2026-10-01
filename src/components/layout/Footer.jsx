import React from 'react';
import { siteData } from '../../data/site';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-ink text-bg py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-heading text-2xl text-bg block text-center md:text-left">{siteData.brandName}</span>
            <p className="text-muted text-sm mt-2">{siteData.tagline}</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href={siteData.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-cherry transition-colors">
              {siteData.instagramHandle}
            </a>
            <p className="text-sm text-muted">© {new Date().getFullYear()} {siteData.brandName}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}