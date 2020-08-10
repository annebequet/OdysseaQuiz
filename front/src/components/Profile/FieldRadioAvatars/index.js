import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FieldRadioAvatars = ({
  value,
  type,
  name,
  label,
  onChange,
  avatars,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `register-field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--radio--avatars field--has-content' : 'field field--radio--avatars'}>
      <label
        htmlFor={inputId}
        className="register-field-label"
      >
        {label}
      </label>

      {avatars.map(({ imageUrl, id, name: avatarName }) => (
        <>
          <img className="avatars" src={imageUrl} />
          <label className="field--radio__details--avatars">{avatarName}</label>
          <input
            key={id}
            value={id}
            onChange={handleChange}
            id={id}
            type="radio"
            className="profile-field-input--radio--avatars"
            placeholder={label}
            name={name}
          />
        </>
      ))}

    </div>
  );
};

FieldRadioAvatars.propTypes = {
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FieldRadioAvatars.defaultProps = {
  type: 'radio',
  label: '',
};

export default FieldRadioAvatars;
