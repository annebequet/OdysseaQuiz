import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

import Logo from 'src/assets/images/logo.png';

import Title from 'src/containers/Title';
import Login from 'src/containers/Login';
import LoggedNav from 'src/containers/LoggedNav';
import RegisterButton from './RegisterButton';

import './styles.scss';

const Header = ({
  roles, isLogged, loginAdmin, location,
}) => {
  const handleAdmin = () => {
    loginAdmin();
  };

  const headerHeight = location === '/' ? 'header__frontPage' : '';

  return (
    <div className={`header ${headerHeight}`}>
      <div className="fullMenu">
        <nav className="menu--desktop">
          <NavLink
            to="/"
            className="menu__item"
            activeClassName="menu__link--active"
            exact
          >
            <img className="menu--desktop__logo" alt="logo" src={Logo} />
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
            href="http://54.226.34.31/back/admin/login"
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
            <img className="logo" alt="logo" src={Logo} />
            <div className="burger-menu__footer">&copy; Odyssea Quiz Corporation All Rights Reserved</div>
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
      <Title />
    </div>
  );
};

Header.propTypes = {
  roles: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loginAdmin: PropTypes.func.isRequired,
  location: PropTypes.string,
};

Header.defaultProps = {
  location: undefined,
};

export default Header;
