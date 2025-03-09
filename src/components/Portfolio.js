import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://via.placeholder.com/400" alt="Project 1" className="rounded-lg" />
          <img src="https://via.placeholder.com/400" alt="Project 2" className="rounded-lg" />
          <img src="https://via.placeholder.com/400" alt="Project 3" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;