import React from 'react';
import ColorPicker from './features/ColorPicker/ColorPicker';
import ServiceCard from './ui/ServiceCard';
import PaintTypeCard from './ui/PaintTypeCard';
import { SERVICES, PAINT_TYPES, TESTIMONIALS } from '../constants/data';
import Layout from './layout/Layout';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PaintSelectionSection from './sections/PaintSelectionSection';
import TestimonialsSection from './sections/TestimonialsSection';

const Home = () => {
  const handleGetQuote = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PaintSelectionSection />
      <TestimonialsSection />

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
    </Layout>
  );
};

export default Home; 