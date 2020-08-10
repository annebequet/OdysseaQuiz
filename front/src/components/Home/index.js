import React from 'react';
import PropTypes from 'prop-types';

import Quiz from 'src/containers/Quiz';

import './styles.scss';

const Home = ({ adultExempleSurvey, childrenExempleSurvey }) => (
  <div>
    <h1>ODYSSEA QUIZ</h1>
    <div className="exempleSurveys">
      <Quiz
        survey={adultExempleSurvey}
        category="Exemple adulte"
        isExempleQuiz
        isChildQuiz={false}
      />
      <Quiz
        survey={childrenExempleSurvey}
        category="Exemple enfant"
        isExempleQuiz
        isChildQuiz
      />
    </div>
  </div>
);

Home.propTypes = {
  adultExempleSurvey: PropTypes.array.isRequired,
  childrenExempleSurvey: PropTypes.array.isRequired,
};

export default Home;
