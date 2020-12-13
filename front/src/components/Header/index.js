import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

import baseUrl from 'src/middlewares/baseUri';

import Logo from 'src/assets/images/logo.png';

import Login from 'src/containers/Login';
import LoggedNav from 'src/containers/LoggedNav';
import RegisterButton from './RegisterButton';

import './styles.scss';

const Header = ({
  roles, isLogged, loginAdmin,
}) => {
  const handleAdmin = () => {
    loginAdmin();
  };

  return (
    <div className="header">
      <div className="fullMenu">
        <NavLink
          to="/"
          className="menu__item menu--desktop__logo"
          exact
        >
          <img alt="logo" src={Logo} />
          dyssea Quiz
        </NavLink>
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
            F.A.Q
          </NavLink>
          {(roles.indexOf('ROLE_ADMIN') !== -1) && (
          <a
            href={`${baseUrl}/admin/login`}
            className="menu__item"
            onClick={handleAdmin}
          >
            Admin
          </a>
          )}
        </nav>
        <nav className="menu--burger">
          <Menu disableAutoFocus>
            <NavLink
              to="/"
              className="menu__item"
              exact
            >
              <img className="menu--mobile__logo" alt="logo" src={Logo} />
              dyssea Quiz
            </NavLink>
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
              href={`${baseUrl}/admin/login`}
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
            <p className="burger-menu__footer">&copy; Odyssea Quiz Corporation All Rights Reserved</p>
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
    </div>
  );
};

Header.propTypes = {
  roles: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loginAdmin: PropTypes.func.isRequired,
};

export default Header;
