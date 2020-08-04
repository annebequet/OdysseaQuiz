import React from 'react';
import PropTypes from 'prop-types';

import AdultSurvey from 'src/containers/AdultSurvey';
import reactLogo from './react-logo.svg';

import './styles.scss';

const Home = ({ adultSurveyExemple }) => (
  <div>
    <img src={reactLogo} alt="react logo" />
    <h1>ODYSSEA QUIZ</h1>
    <AdultSurvey survey={adultSurveyExemple} />
  </div>
);

Home.propTypes = {
  adultSurveyExemple: PropTypes.object.isRequired,
};

export default Home;
