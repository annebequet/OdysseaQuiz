import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const FieldRegister = ({
  value,
  type,
  name,
  label,
  onChange,
  pattern,
  title,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `register-field-${name}`;

  return (
    <div className="register-field-input">
      <input 
        className="register__input"
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        placeholder={label}
        name={name}
        required
        pattern={pattern}
        title={title}
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
  pattern: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FieldRegister.defaultProps = {
  value: '',
  type: 'text',
  pattern: '',
};

export default FieldRegister;
