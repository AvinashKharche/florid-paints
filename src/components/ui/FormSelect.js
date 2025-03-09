import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const FormSelect = ({
  name,
  value,
  onChange,
  label,
  options,
  error,
  required = false
}) => {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-5 pt-6 pb-2 bg-gray-800/50 rounded-xl text-white border
                   ${error ? 'border-red-500' : 'border-gray-600'}
                   focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                   transition-all duration-300 appearance-none cursor-pointer peer`}
      >
        <option value="">{}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label 
        className={`absolute text-gray-400 duration-300 transform -translate-y-3
                   top-5 left-5 z-10 origin-[0] peer-focus:text-primary-400
                   peer-placeholder-shown:scale-100 
                   peer-placeholder-shown:translate-y-0
                   peer-focus:scale-75
                   peer-focus:-translate-y-4
                   ${value ? 'scale-75 -translate-y-4' : ''}
                   ${error ? 'text-red-500' : 'text-gray-400'}`}
      >
        {label}
      </label>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
        <Icon name="chevronDown" className="w-5 h-5 text-gray-400" />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string,
  required: PropTypes.bool
};

export default FormSelect; 