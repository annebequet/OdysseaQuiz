import React from 'react';
import PropTypes from 'prop-types';

import Quiz from 'src/containers/Quiz';

import './styles.scss';

const ExempleSurveys = ({ adultExempleSurvey, childrenExempleSurvey }) => (
  <div className="exempleSurveys">
    <Quiz
      survey={adultExempleSurvey}
      category="Quiz adulte"
      isExempleQuiz
      isChildExempleQuiz={false}
    />
    <Quiz
      survey={childrenExempleSurvey}
      category="Quiz enfant"
      isExempleQuiz
      isChildExempleQuiz
    />
  </div>
);

ExempleSurveys.propTypes = {
  adultExempleSurvey: PropTypes.array.isRequired,
  childrenExempleSurvey: PropTypes.array.isRequired,
};

export default ExempleSurveys;
