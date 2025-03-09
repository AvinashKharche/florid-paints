import React from "react";

function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Interior Painting</h3>
            <p>High-quality interior painting for homes and offices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Exterior Painting</h3>
            <p>Durable, weather-resistant exterior painting solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Commercial Painting</h3>
            <p>Professional painting for commercial properties.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;