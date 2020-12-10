import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  title,
  pattern,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  pattern: PropTypes.string,
};

Field.defaultProps = {
  value: '',
  type: 'text',
  pattern: '',
};

export default Field;
