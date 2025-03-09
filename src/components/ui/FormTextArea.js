import React from 'react';
import PropTypes from 'prop-types';

const FormTextArea = ({
  name,
  value,
  onChange,
  label,
  error,
  required = false,
  rows = 4,
  placeholder = ' '
}) => {
  return (
    <div className="relative group">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border
                   ${error ? 'border-red-500' : 'border-gray-600'}
                   focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                   transition-all duration-300 placeholder-shown:border-gray-700 peer resize-none`}
      ></textarea>
      <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300
                      peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-primary-400
                      peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string
};

export default FormTextArea; 