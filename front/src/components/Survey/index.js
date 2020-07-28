import React from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import surveyData from 'src/data';

import './styles.scss';

const adultSurvey = () => {
  Survey
    .StylesManager
    .applyTheme('modern');

  const model = new Survey.Model(surveyData);

  const handleOnComplete = (survey, options) => {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(surveyData));
   };

  return (
    <Survey.Survey model={model} onComplete={handleOnComplete}/>
  );
};

export default adultSurvey;
