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
          name="email"
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
          name="last_name"
          type="last_name"
          placeholder="Nom"
          onChange={changeField}
          value={lastName}
        />
        <FieldRegister
          name="firt_name"
          type="firt_name"
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
        <input
          name="avatar"
          type="file"
          value={avatar}
        />
        <input
          name="environment"
          type="number"
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
  environment: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

Register.defaultProps = {
  lastName: '',
  firstName: '',
  avatar: '',
  environment: 1,
};

export default Register;
