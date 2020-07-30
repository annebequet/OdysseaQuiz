import React from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import './styles.scss';

const AdultSurvey = ({ surveyData }) => {
  const handleOnComplete = (survey, options) => {
    //Write survey results into database
    console.log(JSON.stringify(survey.data));
  };

  Survey
    .StylesManager
    .applyTheme('modern');

  const model = new Survey.Model(surveyData);

  return (
    <Survey.Survey model={model} onComplete={handleOnComplete} />
  );
};

AdultSurvey.propTypes = {
  surveyData: PropTypes.object.isRequired,
};

export default AdultSurvey;
