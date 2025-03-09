import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../constants/data';
import defaultAvatar from '../../assets/images/testimonials/default-avatar.png';

const TestimonialsSection = () => {
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

  return (
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
                            className="w-16 h-16 rounded-full object-cover bg-gray-200"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = defaultAvatar;
                            }}
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
  );
};

export default TestimonialsSection; 