import React from 'react';
import Layout from './layout/Layout';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PaintSelectionSection from './sections/PaintSelectionSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PaintSelectionSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home; 