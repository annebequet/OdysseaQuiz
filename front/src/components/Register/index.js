import React from 'react';
import PropTypes from 'prop-types';
import FieldRegister from './FieldRegister';

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
          name="username"
          type="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <FieldRegister
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <FieldRegister
          name="lastName"
          type="lastName"
          placeholder="Nom"
          onChange={changeField}
          value={lastName}
        />
        <FieldRegister
          name="firstName"
          type="firstName"
          placeholder="Prénom"
          onChange={changeField}
          value={firstName}
        />
        <FieldRegister
          name="pseudo"
          type="pseudo"
          placeholder="Pseudo"
          onChange={changeField}
          value={pseudo}
        />
        <FieldRegister
          name="avatar"
          type="avatar"
          placeholder="Avatar"
          onChange={changeField}
          value={avatar}
        />
        <select
          name="environment"
          onChange={changeField}
          value={environment}
        >
          <option value="1">
            Enfant
          </option>
          <option value="2">
            Adulte
          </option>
        </select>
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
  environment: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

Register.defaultProps = {
  lastName: '',
  firstName: '',
  avatar: '',
};

export default Register;
