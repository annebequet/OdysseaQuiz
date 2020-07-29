import React from 'react';
import PropTypes from 'prop-types';

import AdultSurvey from 'src/containers/AdultSurvey';
import reactLogo from './react-logo.svg';

import './styles.scss';

const Home = () => (
  <div>
    <img src={reactLogo} alt="react logo" />
    <h1>ODYSSEA QUIZ</h1>
    <AdultSurvey />
  </div>
);

export default Home;
