import React from 'react';
import heroBgVideo from '../../assets/videos/hero-bg.mp4';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={heroBgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow">
          Transform Your Space
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Professional painting services and premium quality paints for your home and business
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary-600 text-white rounded-full text-lg font-semibold 
                     hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover-lift"
          >
            Our Services
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full 
                     text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover-lift"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 