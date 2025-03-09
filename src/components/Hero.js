import React from "react";

function Hero({ setShowQuoteForm }) {
  return (
    <section className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Transform Your Space
            <span className="block text-3xl md:text-4xl mt-2 text-blue-400">
              With Professional Painting Services
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Expert painters delivering exceptional results for your home or business. 
            Quality workmanship guaranteed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold 
                       hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 
                       shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full 
                       text-lg font-semibold hover:bg-white hover:text-blue-900 transform 
                       hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;