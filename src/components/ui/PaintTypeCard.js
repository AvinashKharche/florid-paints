import React from 'react';
import PropTypes from 'prop-types';

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

PaintTypeCard.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PaintTypeCard; 