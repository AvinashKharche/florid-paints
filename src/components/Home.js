import React from 'react';
import ColorPicker from './features/ColorPicker/ColorPicker';

const SERVICES = [
  {
    title: 'Interior Painting',
    description: 'Professional interior painting services for homes and businesses',
    image: '/images/interior-service.png',
    features: [
      'Wall preparation and repairs',
      'Premium paint selection',
      'Clean and precise execution',
      'Furniture protection',
      'Post-painting cleanup'
    ]
  },
  {
    title: 'Exterior Painting',
    description: 'Expert exterior painting to protect and beautify your property',
    image: '/images/exterior-service.png',
    features: [
      'Surface preparation',
      'Weather-resistant paints',
      'Complete exterior coverage',
      'Property protection',
      'Long-lasting finish'
    ]
  },
  {
    title: 'Commercial Painting',
    description: 'Large-scale painting solutions for commercial properties',
    image: '/images/commercial-service.png',
    features: [
      'Minimal business disruption',
      'Schedule flexibility',
      'Safety compliance',
      'Project management',
      'Quality assurance'
    ]
  }
];

const PAINT_TYPES = [
  {
    name: 'Interior Paints',
    description: 'Premium quality paints for indoor spaces',
    features: ['Low VOC', 'Easy application', 'Excellent coverage', 'Washable finish']
  },
  {
    name: 'Exterior Paints',
    description: 'Durable paints for outdoor protection',
    features: ['Weather resistant', 'UV protection', 'Long-lasting', 'Color retention']
  },
  {
    name: 'Specialty Finishes',
    description: 'Unique finishes for special applications',
    features: ['Textured options', 'Metallic finishes', 'Anti-bacterial', 'High durability']
  }
];

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
    <div className="aspect-w-16 aspect-h-9">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 hover-lift">
            <svg className="h-5 w-5 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PaintTypeCard = ({ type }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.name}</h3>
    <p className="text-gray-600 mb-6">{type.description}</p>
    <ul className="space-y-3">
      {type.features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600 text-sm hover-lift">
          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => {
  const handleGetQuote = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional painting services delivered with expertise and attention to detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Selection Section */}
      <section id="paint-selection" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Paints</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our selection of high-quality paints for every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PAINT_TYPES.map((type, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <PaintTypeCard type={type} />
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-12 shadow-lg animate-scale-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Find Your Perfect Color
            </h3>
            <ColorPicker />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Request a quote or consultation for your painting project
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleGetQuote} className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                           focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 
                           focus:ring-opacity-50 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                           focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 
                           focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Project Type"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                         focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 
                         focus:ring-opacity-50 transition-all duration-300"
              />
              <textarea
                rows="4"
                placeholder="Project Details"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                         focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 
                         focus:ring-opacity-50 transition-all duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold 
                         hover:bg-primary-700 transition-all duration-300 hover:shadow-xl hover-lift"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 