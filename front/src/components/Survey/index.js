import React from 'react';
import PropTypes from 'prop-types';
import * as Survey from "survey-react";
import "survey-react/survey.css";

import surveyData from 'src/data';

import './styles.scss';

const adultSurvey = () => {
  Survey
    .StylesManager
    .applyTheme("modern");
    
  window.survey = new Survey.Model(surveyData);
  
  survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

  return (
    <section className="adultSurvey">
      <div id="surveyElement" style="display:inline-block;width:100%;">

      </div>
      <div id="surveyResult">

      </div>
    </section>
  );
};

export default adultSurvey;
