import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ 
  type = 'text',
  name,
  value,
  onChange,
  label,
  error,
  required = false,
  placeholder = ' '
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-5 pt-6 pb-2 bg-gray-800/50 rounded-xl text-white border
                   ${error ? 'border-red-500' : 'border-gray-600'}
                   focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                   transition-all duration-300 peer`}
      />
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
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

export default FormInput; 