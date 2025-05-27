import React from 'react';
import PropTypes from 'prop-types';

const PaintTypeCard = ({ type }) => (
  <div className="group bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
      {type.name}
    </h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
    <ul className="space-y-2">
      {type.features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700 text-sm">
          <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span>{feature}</span>
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