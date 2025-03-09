import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { SERVICES } from '../../constants/data';
import SectionLayout from '../layout/SectionLayout';
import useAnimation from '../../hooks/useAnimation';

const ServicesSection = () => {
  const [setRef, isVisible] = useAnimation();

  return (
    <SectionLayout
      id="services"
      title="Our Services"
      description="Professional painting services delivered with expertise and attention to detail"
      background="gray"
    >
      <div 
        ref={setRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ServicesSection; 