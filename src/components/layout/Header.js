import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <span className={`text-2xl font-extrabold font-['Poppins'] ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}>
              Florid<span className="text-primary-500">Paints</span>
              <span className="text-sm font-normal">.in</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`text-sm font-medium tracking-wide hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('paint-selection')}
              className={`text-sm font-medium tracking-wide hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Colors & Paints
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-4 py-2 rounded-full text-sm font-medium 
                ${isScrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                } transition-colors`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-600 text-sm font-medium hover:text-primary-500 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('paint-selection')}
                className="text-gray-600 text-sm font-medium hover:text-primary-500 text-left"
              >
                Colors & Paints
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-700 text-center"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 