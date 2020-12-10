import React from 'react';
import PropTypes from 'prop-types';

const FieldRadio = ({
  value,
  name,
  label,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `register-field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--radio field--has-content' : 'field field--radio'}>

      <div className="radio--age--category">
        <label htmlFor={inputId} className="field--radio__details">Enfant</label>
        <input
          value="2"
          onChange={handleChange}
          id="radio1"
          type="radio"
          className="profile-field-input--radio"
          placeholder={label}
          name={name}
          required
        />
      </div>

      <div className="radio--age--category">
        <label className="field--radio__details">Adulte</label>
        <input
          value="1"
          onChange={handleChange}
          id="radio2"
          type="radio"
          className="profile-field-input--radio"
          placeholder={label}
          name={name}
          required
        />
      </div>

    </div>
  );
};

FieldRadio.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FieldRadio.defaultProps = {
  type: 'radio',
  label: '',
};

export default FieldRadio;
