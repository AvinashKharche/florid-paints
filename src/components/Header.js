import React from "react";

function Header({ setShowQuoteForm }) {
  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paint Service</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-gray-300">Testimonials</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            <li>
              <button
                onClick={() => setShowQuoteForm(true)}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Get Quote
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;