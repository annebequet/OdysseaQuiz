import React from 'react';
import PropTypes from 'prop-types';

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
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };

  return (
    <div className="register">
      {!isRegistered && (
        <div className="register__container">

          {/* inspiration : https://codepen.io/marcobiedermann/pen/wKNGzo) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>

          <h2 className="register__title">Crée ton compte</h2>
          <form className="register__form" onSubmit={handleSubmit}>
            <FieldRegister
              label="Adresse Email"
              id="username"
              name="email"
              type="email"
              onChange={changeField}
              value={email}
              pattern="^[^@]+@[^@]+\.[^@]+$"
              title="Entrez un email valide"
            />

            <FieldRegister
              name="password"
              type="password"
              label="Mot de passe"
              id="password"
              onChange={changeField}
              value={password}
              pattern="(?=^.{6,32}$)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$"
              title="Votre mot de passe doit contenir au moins 6 caractères, dont 1 minuscule, 1 majuscule et 1 chiffre."
            />

            <FieldRegister
              name="pseudo"
              type="pseudo"
              label="Pseudo"
              id="pseudo"
              onChange={changeField}
              value={pseudo}
              pattern="(?=^.{6,12}$).*$"
              title="Votre mot de passe doit contenir entre 6 et 12 caractères"
            />

            <div>
              <label className="register-field-label">Choisissez votre difficulté de jeu</label>
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
        </div>
      )}
      {isRegistered && (
        // eslint-disable-next-line max-len
        <p className="register--validate">Bravo pour votre inscription, vous pouvez maintenant vous connecter et commencer à jouer dans le grand bain !</p>
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
};

export default Register;
