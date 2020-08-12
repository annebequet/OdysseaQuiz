import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const FieldRegister = ({
  value,
  type,
  name,
  label,
  onChange,
  error,
  handleBlurAndFocus,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  console.log(error);

  const inputId = `register-field-${name}`;

  return (
    <div className={`register-field-input ${error === 'undefined' ? 'valid' : 'unvalid'} ${value.length > 0 ? 'field field--has-content' : 'field'}`}>
      <label
        htmlFor={inputId}
        className="register-field-label"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        placeholder={label}
        name={name}
        onBlur={handleBlurAndFocus}
        onFocus={handleBlurAndFocus}
      />

    </div>
  );
};

FieldRegister.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleBlurAndFocus: PropTypes.func.isRequired,
};

FieldRegister.defaultProps = {
  value: '',
  type: 'text',
  error: false,
};

export default FieldRegister;
