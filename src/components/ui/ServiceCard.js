import React from 'react';
import PropTypes from 'prop-types';

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

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ServiceCard; 