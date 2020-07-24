import React from 'react';
import PropTypes from 'prop-types';

import { bubble as Menu } from 'react-burger-menu';
import Login from './Login';

import './styles.scss';

const Header = () => (

  <div className="header">
    <Menu 
      width={30}
     /*  styles={
        bmMenuWrap :{
          height: '200px',
        },
      } */
    >
      <a id="home" className="menu-item" href="/">Accueil</a>
      <a id="about" className="menu-item" href="/about">Quiz</a>
      <a id="contact" className="menu-item" href="/contact">Admin</a>
    </Menu>

    <nav className="header__log">
      <Login />
    </nav>
    <div className="menu--desktop">LOGIN</div>
  </div>
);

export default Header;
