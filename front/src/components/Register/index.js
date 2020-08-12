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
  displayErrors,
  errorsFound,
}) => {
  // Check Submit errors
  const checkErrors = () => {
    const errors = {};
    if (!pseudo) {
      errors.pseudo = 'champ obligatoire';
    }
    else if (pseudo < 4) {
      errors.pseudo = 'Il faut au moins 4 caractères';
    }

    if (!email) {
      errors.email = 'champ obligatoire';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Adresse email invalide';
    }
    if (!password) {
      errors.password = 'Champ obligatoire';
    }
    else if (password.length < 4) {
      errors.password = 'Il faut au moins 4 caractères';
    }
    return errors;
  };

  // Check input Errors
  const [handleBlurAndFocus, setHandleBlurAndFocus] = useState(false);

  const failEmail = () => {
    if (!email) {
      return <span>Entrez un email</span>;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
      return <span>Entrez un email valide</span>;
    }
    return false;
  };
  const failPassword = () => {
    if (!password) {
      return <span>Entrez un mot de passe!</span>;
    }
    if (password.length < 4) {
      return <span>Entrez un mot de passe d'au moins 4 caractères</span>;
    }
    return false;
  };
  const failPseudo = () => {
    if (!pseudo) {
      return <span>Entrez un pseudo!</span>;
    }
    if (pseudo.length < 4) {
      return <span>Il faut au moins 4 caractères</span>;
    }
    if (pseudo.length > 12) {
      return <span>Il ne faut pas plus de 12 caractères</span>;
    }
    return false;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleRegister();

    console.log('je passe dans le handleSubmit');

    const errors = checkErrors();

    if (Object.keys(errors).length === 0) {
      //handleRegister();
    }
    displayErrors(errors);
  };

  return (
    <div className="register">
      {error && !isRegistered && (
        <ErrorMessage errors={errorsFound} />
      )}

      {Object.keys(errorsFound).length > 0 && !isRegistered && (
        <ErrorMessage errors={errorsFound} />
      )}
      {!isRegistered && (
      <form className="register__form" onSubmit={handleSubmit}>
        <FieldRegister
          error={!errorsFound.email ? 'undefined' : errorsFound.email}
          label="Adresse Email"
          id="username"
          name="email"
          type="email"
          onChange={changeField}
          value={email}
          handleBlurAndFocus={() => setHandleBlurAndFocus(!handleBlurAndFocus)}
        />
        {handleBlurAndFocus && failEmail()}
        <FieldRegister
          error={!errorsFound.password ? 'undefined' : errorsFound.password}
          name="password"
          type="password"
          label="Mot de passe"
          id="password"
          onChange={changeField}
          value={password}
          handleBlurAndFocus={() => setHandleBlurAndFocus(!handleBlurAndFocus)}
        />
        {handleBlurAndFocus && failPassword()}
        <FieldRegister
          error={!errorsFound.pseudo ? 'undefined' : errorsFound.pseudo}
          name="pseudo"
          type="pseudo"
          label="Pseudo"
          id="pseudo"
          onChange={changeField}
          value={pseudo}
          handleBlurAndFocus={() => setHandleBlurAndFocus(!handleBlurAndFocus)}
        />
        {handleBlurAndFocus && failPseudo()}
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
  displayErrors: PropTypes.func.isRequired,
  errorsFound: PropTypes.object.isRequired,
};

export default Register;
