import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const FieldRadioRegister = ({
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
    <div className={value.length > 0 ? 'field register-field--radio field--has-content' : 'field register-field--radio'}>
      <label
        htmlFor={inputId}
        className="register-field-label"
      >
        {label}
      </label>
      <label className="register-field--radio__details">Enfant</label>
      <input
        value="2"
        onChange={handleChange}
        id="radio1"
        type="radio"
        className="register-field-input"
        placeholder={label}
        name={name}
        required
      />
      <label className="register-field--radio__details">Adulte</label>
      <input
        value="1"
        onChange={handleChange}
        id="radio2"
        type="radio"
        className="register-field-input"
        placeholder={label}
        name={name}
        required
      />

    </div>
  );
};

FieldRadioRegister.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FieldRadioRegister.defaultProps = {
  type: 'radio',
  label: '',
};

export default FieldRadioRegister;
