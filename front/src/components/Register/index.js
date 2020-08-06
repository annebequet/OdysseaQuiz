import React from 'react';
import PropTypes from 'prop-types';
import FieldRegister from './FieldRegister';
import FieldRadioRegister from './FieldRadioRegister';

import './styles.scss';

const Register = ({
  email,
  password,
  lastName,
  firstName,
  pseudo,
  avatar,
  environment,
  changeField,
  handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <FieldRegister
          label="Adresse Email"
          id="username"
          name="email"
          type="email"
          onChange={changeField}
          value={email}
        />
        <FieldRegister
          name="password"
          type="password"
          label="Mot de passe"
          id="password"
          onChange={changeField}
          value={password}
        />
        <FieldRegister
          name="lastName"
          type="lastName"
          label="Nom"
          id="lastName"
          onChange={changeField}
          value={lastName}
        />
        <FieldRegister
          name="firstName"
          type="firstName"
          label="Prénom"
          id="lastName"
          onChange={changeField}
          value={firstName}
        />
        <FieldRegister
          name="pseudo"
          type="pseudo"
          label="Pseudo"
          id="pseudo"
          onChange={changeField}
          value={pseudo}
        />
        <FieldRegister
          name="avatar"
          type="avatar"
          label="Avatar"
          id="avatar"
          onChange={changeField}
          value={avatar}
        />
        {/* Here place a select to choose environment */}
        <FieldRadioRegister
          name="environment"
          type="radio"
          label="environment"
          id="environment"
          onChange={changeField}
          value={environment}
        />
        <button
          type="submit"
          className="register-form-button"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

Register.propTypes = {
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  environment: PropTypes.string.isRequired,
};

Register.defaultProps = {
  lastName: '',
  firstName: '',
  avatar: '',

};

export default Register;
