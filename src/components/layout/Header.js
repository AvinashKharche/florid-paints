import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-primary-600">PaintPro</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('paint-selection')}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Paints & Colors
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex px-4 py-2 bg-primary-600 text-white rounded-md 
                       hover:bg-primary-700 transition-colors duration-200"
            >
              Get a Quote
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-base font-medium text-gray-900 hover:text-primary-600"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('paint-selection')}
                className="text-base font-medium text-gray-900 hover:text-primary-600"
              >
                Paints & Colors
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-base font-medium text-gray-900 hover:text-primary-600"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 