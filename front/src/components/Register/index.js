import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { failEmail, failPassword, failPseudo } from 'src/selectors/errors';

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
  setError,
  errorEmail,
  errorPassword,
  errorPseudo,
  requestErrors,
}) => {
  const findErrors = () => {
    setTimeout(() => setError(failEmail(email)), 800);
    setTimeout(() => setError(failPassword(password)), 800);
    setTimeout(() => setError(failPseudo(pseudo)), 800);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
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
          handleBlur={findErrors}
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
          handleBlur={findErrors}
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
          handleBlur={findErrors}
        />
        {errorPseudo.length !== 0 && (
          <span>{errorPseudo}</span>
        )}

        <div>
          <label className="register-field-label">Choisissez votre difficulté de jeu!</label>
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
        <p className="errorMessage"><span className="register--validate">Bravo pour votre inscription, vous pouvez maintenant vous connecter et commencer à jouer dans le grand bain !</span></p>
      )}

      {Object.keys(requestErrors).length > 0 && !isRegistered && (
      <ErrorMessage errors={requestErrors} />
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
  setError: PropTypes.func.isRequired,
  errorEmail: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  errorPseudo: PropTypes.string.isRequired,
  requestErrors: PropTypes.object.isRequired,
};

export default Register;
