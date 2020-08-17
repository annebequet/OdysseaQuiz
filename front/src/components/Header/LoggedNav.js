import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getSlugFromPseudo } from 'src/selectors/profile';

import './styles.scss';

const LoggedNav = ({ handleLogout, pseudo }) => (
  <div className="header__nav__logged">
    <nav className="menu--logged">
      <NavLink
        to={`/profile/${getSlugFromPseudo(pseudo)}`}
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
        Déconnexion
      </a>
    </nav>
    <nav className="menu--logged--mobile">
      <NavLink
        to={`/profile/${getSlugFromPseudo(pseudo)}`}
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
        Profil
      </NavLink>
      <NavLink
        to="/categories"
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
        Catégories
      </NavLink>
    </nav>
  </div>
);

LoggedNav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default LoggedNav;
