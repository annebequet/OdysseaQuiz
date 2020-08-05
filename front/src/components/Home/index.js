import React from 'react';
import PropTypes from 'prop-types';

import Quiz from 'src/containers/Quiz';
import reactLogo from './react-logo.svg';

import './styles.scss';

const Home = ({ adultExempleSurvey, childrenExempleSurvey }) => (
  <div>
    <img src={reactLogo} alt="react logo" />
    <h1>ODYSSEA QUIZ</h1>
    <Quiz
      survey={adultExempleSurvey}
      category="Exemple adulte"
      isExempleQuiz
    />
    <Quiz
      survey={childrenExempleSurvey}
      category="Exemple enfant"
      isExempleQuiz
    />
  </div>
);

Home.propTypes = {
  adultExempleSurvey: PropTypes.array.isRequired,
  childrenExempleSurvey: PropTypes.array.isRequired,
};

export default Home;
