import React from 'react';
import PropTypes from 'prop-types';

const VibrantSectionHeader = ({ 
  title, 
  description, 
  showRainbowStripe = false,
  titleClassName = '',
  descriptionClassName = '',
  className = ''
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {showRainbowStripe && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-0.5 bg-primary-500 rounded-full"></div>
        </div>
      )}
      
      {title && (
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900 ${titleClassName}`}>
          {title}
        </h2>
      )}
      
      {description && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-600 ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

VibrantSectionHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showRainbowStripe: PropTypes.bool,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  className: PropTypes.string,
};

export default VibrantSectionHeader; 