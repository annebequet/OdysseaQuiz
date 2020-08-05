import React from 'react';
import PropTypes from 'prop-types';

import Quiz from 'src/containers/Quiz';
import reactLogo from './react-logo.svg';

import './styles.scss';

const Home = ({ SurveyExemple }) => (
  <div>
    <img src={reactLogo} alt="react logo" />
    <h1>ODYSSEA QUIZ</h1>
    <Quiz
      survey={SurveyExemple}
      category="Exemple adulte"
    />
    <Quiz
      survey={SurveyExemple}
      category="Exemple enfant"
    />
  </div>
);

Home.propTypes = {
  SurveyExemple: PropTypes.array.isRequired,
};

export default Home;
