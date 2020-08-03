import React from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import { Route } from 'react-router-dom';

import './styles.scss';

const AdultSurvey = ({
  surveyData,
  isCompleted,
  surveyCompleted,
  surveyAnswers,
  sendResults,
  updateResults,
  grade,
}) => {
  const handleOnComplete = (survey) => {
    //Write survey results into database
    const answers = survey.data;
    sendResults();
    // Update the results in the state and the value of isCompleted
    surveyCompleted(answers);
  };

  const handleResults = (survey) => {
    const numberOfCorrectAnswers = survey.getCorrectedAnswerCount();
    console.log(numberOfCorrectAnswers);
    updateResults(numberOfCorrectAnswers);
  };

  const displayResults = (survey, options) => {
    const span = document.createElement('span');
    const isCorrect = options.question.isAnswerCorrect();
    span.innerHTML = isCorrect
      ? 'Correct'
      : 'Incorrect';
    span.style.color = isCorrect
      ? 'green'
      : 'red';
    const header = options.htmlElement.querySelector('h5');
    if (!isCorrect) {
      header.style.backgroundColor = 'salmon';
      const radio = options.htmlElement.querySelector(`input[value="${options.question.correctAnswer}"]`);
      radio.parentElement.style.color = 'green';
    }
    header.appendChild(span);
  };

  const getResultTitle = (numberOfCorrectAnswers) => {
    const singularTitle = `Vous avez ${numberOfCorrectAnswers} bonne réponse sur 10`;
    const pluralTitle = `Vous avez ${numberOfCorrectAnswers} bonnes réponses sur 10`;
    const title = numberOfCorrectAnswers < 2
      ? singularTitle
      : pluralTitle;
    return title;
  };

  // eslint-disable-next-line max-len
  /* We have two surveys : one to use as a quiz, the second one to display the results. The completion of the quiz passes the const isCompleted to true, so as to display the second survey with the results. */
  return (
    <div>
      {!isCompleted && (
        <Survey.Survey
          json={surveyData}
          showCompletedPage={false}
          onComplete={handleOnComplete}
          onAfterRenderQuestion={handleResults}
        />
      )}
      {isCompleted && (
        <Survey.Survey
          title={getResultTitle(grade)}
          json={surveyData}
          data={surveyAnswers}
          showCompletedPage={false}
          mode="display"
          questionsOnPageMode="singlePage"
          showNavigationButtons="none"
          showProgressBar="off"
          showTimerPanel="none"
          maxTimeToFinishPage={0}
          maxTimeToFinish={0}
          onAfterRenderQuestion={displayResults}
        />
      )}
    </div>
  );
};

AdultSurvey.propTypes = {
  surveyData: PropTypes.object.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  surveyCompleted: PropTypes.func.isRequired,
  sendResults: PropTypes.func.isRequired,
  updateResults: PropTypes.func.isRequired,
  surveyAnswers: PropTypes.object.isRequired,
  grade: PropTypes.number.isRequired,
};

export default AdultSurvey;
