import React from 'react';
import ColorPicker from './features/ColorPicker/ColorPicker';
import { SERVICES, PAINT_TYPES, TESTIMONIALS } from '../constants/data';
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