import React from 'react';
import PropTypes from 'prop-types';

const SectionLayout = ({
  id,
  title,
  description,
  children,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  contentClassName = '',
  background = 'white'
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-b from-gray-50 to-white'
  };

  return (
    <section id={id} className={`py-24 ${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-16 animate-fade-in">
            {title && (
              <h2 className={`text-4xl font-bold mb-4 ${titleClassName}`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-xl max-w-2xl mx-auto ${
                background === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } ${descriptionClassName}`}>
                {description}
              </p>
            )}
          </div>
        )}
        <div className={contentClassName}>
          {children}
        </div>
      </div>
    </section>
  );
};

SectionLayout.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  background: PropTypes.oneOf(['white', 'gray', 'dark', 'gradient'])
};

export default SectionLayout; 