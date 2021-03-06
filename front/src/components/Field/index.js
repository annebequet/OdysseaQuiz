import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Field = ({
  label,
  type,
  id,
  value,
  setValue,
  pattern,
  title,
}) => {
  const handleOnChange = (evt) => {
    setValue(evt.target.value);
  };
  return (
    <div className="field">
      <label
        htmlFor={id}
        className="field__label"
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={handleOnChange}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
