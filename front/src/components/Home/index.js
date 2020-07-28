import React from 'react';
import PropTypes from 'prop-types';

import Survey from 'src/components/Survey';
import reactLogo from './react-logo.svg';

import './styles.scss';

const Home = () => (
  <div>
    <img src={reactLogo} alt="react logo" />
    <h1>ODYSSEA QUIZ</h1>
    <Survey />
  </div>
);

export default Home;
