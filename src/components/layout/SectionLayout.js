import React from 'react';
import PropTypes from 'prop-types';
import VibrantSectionHeader from '../ui/VibrantSectionHeader';

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
    dark: 'bg-dark-500 text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
    vibrant: 'bg-primary-500 text-white',
    rainbow: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
  };

  return (
    <section id={id} className={`relative py-16 ${backgrounds[background]} ${className}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <VibrantSectionHeader
            title={title}
            description={description}
            titleClassName={`${
              background === 'dark' || background === 'vibrant' || background === 'rainbow' 
                ? 'text-white' 
                : 'text-gray-900'
            } ${titleClassName}`}
            descriptionClassName={`${
              background === 'dark' || background === 'vibrant' || background === 'rainbow' 
                ? 'text-gray-200' 
                : 'text-gray-600'
            } ${descriptionClassName}`}
          />
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
  background: PropTypes.oneOf(['white', 'gray', 'dark', 'gradient', 'vibrant', 'rainbow'])
};

export default SectionLayout; 