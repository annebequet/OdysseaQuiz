import React from 'react';
import PropTypes from 'prop-types';

import Quiz from 'src/containers/Quiz';

import './styles.scss';

const Home = ({ adultExempleSurvey, childrenExempleSurvey }) => (
  <div>
    <div className="exempleSurveys">
      <Quiz
        survey={adultExempleSurvey}
        category="Quiz adulte"
        isExempleQuiz
        isChildQuiz={false}
      />
      <Quiz
        survey={childrenExempleSurvey}
        category="Quiz enfant"
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
