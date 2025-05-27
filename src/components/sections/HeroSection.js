import React from 'react';
import Logo from '../../assets/images/logos/vibrant-hero-logo-2.png';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-dark-500 text-white overflow-hidden">
      {/* Colorful Rainbow Stripe at Top */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{
          background: 'linear-gradient(90deg, #ef4444, #f97316, #eab308, #84cc16, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #ec4899)'
        }}
      ></div>
      
      {/* Clean Background */}
      <div className="absolute inset-0 bg-dark-500">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-500 to-dark-600 opacity-50"></div>
      </div>
      
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute h-full w-auto min-w-full min-h-full object-cover lg:object-center object-[70%]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>     

      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo and Main Content */}
        <div className="mb-8">
          {/* Logo positioned as in the image */}
          <div className="flex justify-center items-center mb-8">
            <img 
              src={Logo} 
              alt="Florid Paints Logo" 
              className="h-56 md:h-64 mr-8"
            />
            <div className="text-right mt-4">
              <p className="text-yellow-400 text-lg md:text-xl font-bold">
                हर दीवार की
              </p>
              <p className="text-yellow-400 text-xl md:text-2xl font-bold">
                नयी पहचान!
              </p>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Transform Your
            <br />
            <span className="text-primary-400 font-black">Space</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional painting services and premium quality paints for your home and business
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary-500 text-white rounded-xl text-lg font-bold 
                     hover:bg-primary-600 transition-all duration-300 hover:shadow-lg"
          >
            Our Services
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl 
                     text-lg font-bold hover:bg-white hover:text-dark-500 transition-all duration-300"
          >
            Get a Quote
          </button>
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection; 