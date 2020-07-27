import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const RegisterButton = () => (
  <div className="header__nav__register">
    <NavLink
      to="/register"
      activeClassName="menu__link--active"
      exact
    >
      S'enregistrer
    </NavLink>
  </div>
);

export default RegisterButton;
