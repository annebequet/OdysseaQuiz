import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const LoggedNav = ({ handleLogout }) => (
  <div className="header__nav__logged">
    <nav className="menu--logged">
      <NavLink
        to="/profile"
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
        Profil
      </NavLink>
      <a
        className="menu__item menu__item--logout"
        onClick={handleLogout}
      >
        Logout
      </a>
    </nav>
  </div>
);

LoggedNav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default LoggedNav;
