import React from 'react';
import PropTypes from 'prop-types';

import AdultSurvey from 'src/containers/AdultSurvey';

import './styles.scss';

const Home = ({ adultSurveyExemple }) => (
  <div>
    <h1>ODYSSEA QUIZ</h1>
    <AdultSurvey
      survey={adultSurveyExemple}
      category="allez, un petit exemple"
    />
  </div>
);

Home.propTypes = {
  adultSurveyExemple: PropTypes.array.isRequired,
};

export default Home;
