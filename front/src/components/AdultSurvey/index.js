import React from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import './styles.scss';

const AdultSurvey = ({ adultSurveyData }) => {
  Survey
    .StylesManager
    .applyTheme('modern');

  const model = new Survey.Model({ adultSurveyData });

  const handleOnComplete = (survey, options) => {
      //Write survey results into database
      console.log('Survey results: ', JSON.stringify({ adultSurveyData }));
   };

  return (
    <Survey.Survey model={model} onComplete={handleOnComplete} />
  );
};

/* AdultSurvey.propTypes = {
  adultSurveyData: PropTypes.object.isRequired,
}; */

export default AdultSurvey;
