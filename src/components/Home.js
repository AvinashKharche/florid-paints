import React, { useState, useEffect } from 'react';
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

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    image: '/images/testimonial-1.jpg',
    text: 'The team at FloridPaints transformed our home completely. Their attention to detail and professional approach made the entire process smooth and hassle-free. The quality of paint and workmanship is exceptional!',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Delhi, NCR',
    image: '/images/testimonial-2.jpg',
    text: 'I was amazed by the color selection process. Their color expert helped me choose the perfect shade for each room. The paint quality is superb, and the finish looks absolutely stunning. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    image: '/images/testimonial-3.jpg',
    text: 'Outstanding service from start to finish! The team was punctual, professional, and the results exceeded our expectations. Our office looks brand new with the fresh paint job.',
    rating: 5
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Bangalore, Karnataka',
    image: '/images/testimonial-4.jpg',
    text: 'The durability of the paint is impressive. Even after a year, the colors look as fresh as day one. Their expertise in color combinations really helped us create the perfect ambiance.',
    rating: 5
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
  const [currentPair, setCurrentPair] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % Math.ceil(TESTIMONIALS.length / 2));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonialPairs = [];
  for (let i = 0; i < TESTIMONIALS.length; i += 2) {
    testimonialPairs.push(TESTIMONIALS.slice(i, i + 2));
  }

  const handleDotClick = (index) => {
    setCurrentPair(index);
    setIsAutoPlaying(false);
  };

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
            <ColorPicker />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what our satisfied customers have to say about their experience
            </p>
          </div>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                setCurrentPair((prev) => (prev - 1 + testimonialPairs.length) % testimonialPairs.length);
                setIsAutoPlaying(false);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12
                       w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100
                       flex items-center justify-center text-gray-600
                       hover:bg-white hover:scale-110 hover:text-primary-500
                       transition-all duration-300 z-10
                       focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                setCurrentPair((prev) => (prev + 1) % testimonialPairs.length);
                setIsAutoPlaying(false);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12
                       w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100
                       flex items-center justify-center text-gray-600
                       hover:bg-white hover:scale-110 hover:text-primary-500
                       transition-all duration-300 z-10
                       focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentPair * 100}%)` }}
              >
                {testimonialPairs.map((pair, pairIndex) => (
                  <div key={pairIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full flex-shrink-0 p-2">
                    {pair.map((testimonial) => (
                      <div key={testimonial.id} 
                           className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 
                                    hover:shadow-xl hover:scale-[1.02] hover:-rotate-1
                                    border border-gray-100 backdrop-blur-sm">
                        <div className="flex items-center mb-6">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-1 rounded-full">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-gray-500 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 italic line-clamp-4">"{testimonial.text}"</p>
                        <div className="flex items-center justify-end">
                          <button 
                            className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center gap-1 group transition-colors"
                            onClick={() => {
                              // You can implement a modal or expand functionality here
                              console.log('Read more clicked for:', testimonial.id);
                            }}
                          >
                            Read More
                            <svg 
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonialPairs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentPair === index 
                      ? 'bg-primary-500 w-8' 
                      : 'bg-gray-300 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-fade-in">
              <form onSubmit={handleGetQuote} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder=" "
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border border-gray-600
                               focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                               transition-all duration-300 placeholder-shown:border-gray-700 peer"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300
                                    peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-primary-400
                                    peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
                      Your Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder=" "
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border border-gray-600
                               focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                               transition-all duration-300 placeholder-shown:border-gray-700 peer"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300
                                    peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-primary-400
                                    peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <select
                    required
                    defaultValue=""
                    className="w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border border-gray-600
                             focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Project Type</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="specialty">Specialty Finishes</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    rows="4"
                    placeholder=" "
                    required
                    className="w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border border-gray-600
                             focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             transition-all duration-300 placeholder-shown:border-gray-700 peer resize-none"
                  ></textarea>
                  <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300
                                  peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-primary-400
                                  peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
                    Project Details
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-600 text-white rounded-xl text-lg font-semibold
                           hover:bg-primary-700 transition-all duration-300 hover:shadow-xl
                           focus:outline-none focus:ring-4 focus:ring-primary-500/20
                           transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 