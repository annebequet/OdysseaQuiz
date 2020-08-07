import React from 'react';
import PropTypes from 'prop-types';

const FieldRadio = ({
  value,
  type,
  name,
  label,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `register-field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <label
        htmlFor={inputId}
        className="register-field-label"
      >
        {label}
      </label>
      <input
        value="1"
        onChange={handleChange}
        id="radio1"
        type="radio"
        className="register-field-input"
        placeholder={label}
        name={name}
      />
      <input
        value="2"
        onChange={handleChange}
        id="radio2"
        type="radio"
        className="register-field-input"
        placeholder={label}
        name={name}
      />

    </div>
  );
};

FieldRadio.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FieldRadio.defaultProps = {
  type: 'radio',
};

export default FieldRadio;
