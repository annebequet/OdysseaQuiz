import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

import Login from 'src/containers/Login';
import RegisterButton from './RegisterButton';
import WhaleLogo from 'src/assets/images/whale-logo.png';

import './styles.scss';

const Header = ({ roles, isLogged }) => (

  <div className="header">
    <nav className="menu--desktop">
      <NavLink
        to="/"
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
        Accueil
      </NavLink>
      <NavLink
        to="/categories"
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
        Catégories
      </NavLink>
      {(roles.indexOf('ROLE_ADMIN') !== -1) && (
      <NavLink
        to="/admin"
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
        admin
      </NavLink>
      )}
    </nav>
    <nav className="menu--burger">
      <Menu disableAutoFocus>
        <NavLink
          to="/"
          className="menu__item"
          activeClassName="menu__link--active"
          exact
        >
          Accueil
        </NavLink>
        <NavLink
          to="/categories"
          className="menu__item"
          activeClassName="menu__link--active"
          exact
        >
          Catégories
        </NavLink>
        {(roles.indexOf('ROLE_ADMIN') !== -1) && (
        <NavLink
          to="/admin"
          className="menu__item"
          activeClassName="menu__link--active"
          exact
        >
          Admin
        </NavLink>
        )}
        <NavLink
          to="/contact"
          className="menu__item"
          activeClassName="menu__link--active"
          exact
        >
          Contact
        </NavLink>
        <NavLink
          to="/faq"
          className="menu__item"
          activeClassName="menu__link--active"
          exact
        >
          FAQ
        </NavLink>
        <img className="logo" alt="whale-logo" src={WhaleLogo} />
      </Menu>
    </nav>
    {(!isLogged) && (
    <div className="header__nav__form">
      <RegisterButton />
      <Login />
    </div>
    )}
  </div>
);

Header.propTypes = {
  roles: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
