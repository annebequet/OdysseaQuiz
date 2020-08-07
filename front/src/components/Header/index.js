import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

import WhaleLogo from 'src/assets/images/whale-logo.png';

import Login from 'src/containers/Login';
import LoggedNav from 'src/containers/LoggedNav';
import RegisterButton from './RegisterButton';

import './styles.scss';

const Header = ({ roles, isLogged, loginAdmin }) => {
  const handleAdmin = () => {
    loginAdmin();
  };
  return (
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
        <a
          href="http://54.226.34.31/back/admin/login"
          className="menu__item"
          onClick={handleAdmin}
        >
          admin
        </a>
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
          <a
            href="http://54.226.34.31/back/admin/login"
            className="menu__item"
            onClick={handleAdmin}
          >
            Admin
          </a>
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
      {(isLogged) && (
      <LoggedNav />
      )}
    </div>
  );
};

Header.propTypes = {
  roles: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loginAdmin: PropTypes.func.isRequired,
};

export default Header;
