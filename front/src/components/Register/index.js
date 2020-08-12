import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from 'src/components/ErrorMessage';
import FieldRegister from './FieldRegister';
import FieldRadioRegister from './FieldRadioRegister';

import './styles.scss';

const Register = ({
  email,
  password,
  pseudo,
  environment,
  changeField,
  handleRegister,
  isRegistered,
  error,
  setError,
  errorEmail,
  errorPassword,
  errorPseudo,
}) => {
  const findErrors = (errorMessage) => {
    setTimeout(() => setError(errorMessage), 800);
  };

  const failEmail = () => {
    if (!email) {
      return { email: 'Entrez un email' };
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
      return { email: 'Entrez un email valide' };
    }
    return { email: '' };
  };
  const failPassword = () => {
    if (!password) {
      return { password: 'Entrez un mot de passe' };
    }
    if (password.length < 4) {
      return { password: 'Entrez un mot de passe d\'au moins 4 caractères' };
    }
    return { password: '' };
  };
  const failPseudo = () => {
    if (!pseudo) {
      return { pseudo: 'Entrez un pseudo' };
    }
    if (pseudo.length < 4) {
      return { pseudo: 'Entrez un pseudo d\'au moins 4 caractères' };
    }
    if (pseudo.length > 12) {
      return { pseudo: 'Entrez un pseudo de moins de 12 caractères' };
    }
    return { pseudo: '' };
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('je passe dans le handleSubmit');

    if (
      errorEmail.length === 0
      && errorPassword.length === 0
      && errorPseudo.length === 0
    ) {
      handleRegister();
    }
  };

  return (
    <div className="register">
      {!isRegistered && (
      <form className="register__form" onSubmit={handleSubmit}>
        <FieldRegister
          error={errorEmail.length === 0 ? 'undefined' : errorEmail}
          label="Adresse Email"
          id="username"
          name="email"
          type="email"
          onChange={changeField}
          value={email}
          onBlur={findErrors(failEmail())}
        />
        {errorEmail.length !== 0 && (
          <span>{errorEmail}</span>
        )}
        <FieldRegister
          error={errorPassword.length === 0 ? 'undefined' : errorEmail}
          name="password"
          type="password"
          label="Mot de passe"
          id="password"
          onChange={changeField}
          value={password}
          handleBlurAndFocus={findErrors(failPassword())}
        />
        {errorPassword.length !== 0 && (
          <span>{errorPassword}</span>
        )}
        <FieldRegister
          error={errorPseudo.length === 0 ? 'undefined' : errorEmail}
          name="pseudo"
          type="pseudo"
          label="Pseudo"
          id="pseudo"
          onChange={changeField}
          value={pseudo}
          onBlur={findErrors(failPseudo())}
        />
        {errorPseudo.length !== 0 && (
          <span>{errorPseudo}</span>
        )}
        <div>
          <label>Choisissez votre difficulté de jeu!</label>
        </div>
        <FieldRadioRegister
          name="environment"
          type="radio"
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
      )}
      {isRegistered && (
        // eslint-disable-next-line max-len
        <div>Bravo pour votre inscription, vous pouvez maintenant vous connecter et commencer à jouer dans le grand bain !</div>
      )}
    </div>
  );
};

Register.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  environment: PropTypes.string.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  setError: PropTypes.func.isRequired,
  errorEmail: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  errorPseudo: PropTypes.string.isRequired,
};

export default Register;
