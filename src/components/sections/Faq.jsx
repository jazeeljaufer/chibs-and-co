import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Accordion from '../ui/Accordion';
import { faqs } from '../../data/faqs';

export default function Faq() {
  return (
    <section id="faq" className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading center>Got Questions?</SectionHeading>
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}