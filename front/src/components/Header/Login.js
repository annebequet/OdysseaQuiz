import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './styles.scss';

const Login = ({
  open,
  handleTogglerClick,
  login,
}) => {
  const handleOnClick = () => {
    handleTogglerClick();
  };
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    login();
  };

  return (
    <div className={`${open ? 'login login--open' : 'login'}`}>
      <button
        onClick={handleOnClick}
        className="login__toggler"
        type="button"
      >
        Connexion
      </button>
      <form
        className="login__form"
        onSubmit={handleOnSubmit}
      >
        <Field
          label="Adresse Email"
          id="email"
          type="email"
        />
        <Field
          label="Mot de passe"
          id="password"
          type="password"
        />
        <button
          className="login__submit"
          type="submit"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleTogglerClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};
export default Login;
