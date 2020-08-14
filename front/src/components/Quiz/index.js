import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import { changeCSSStyles, handleSingularOrPlural } from 'src/selectors/survey';

import './styles.scss';

const Quiz = ({
  surveyData,
  completedSurveyData,
  isCompleted,
  surveyAnswers,
  sendResults,
  endQuiz,
  grade,
}) => {
  // Write survey results into database and state
  const handleOnComplete = (survey) => {
    console.log(survey);
    const answers = survey.data;
    const numberOfCorrectAnswers = survey.getCorrectedAnswerCount();
    sendResults(answers, numberOfCorrectAnswers, surveyData);
  };

  // Adapt the css style of the correct and wrong answers
  const displayResults = (survey, options) => {
    changeCSSStyles(survey, options);
  };

  // eslint-disable-next-line max-len
  // Depending on whether the number of correct answers is plural or not, this function will return a grammaticaly correct result text
  const getResultTitle = (numberOfCorrectAnswers) => {
    const title = handleSingularOrPlural(numberOfCorrectAnswers);
    return title;
  };

  // eslint-disable-next-line max-len
  /* We have two surveys : one to use as a quiz, the second one to display the results. The completion of the quiz passes the const isCompleted to true, so as to display the second survey with the results. */
  return (
    <div className="survey">
      {!isCompleted && (
        <Survey.Survey
          json={surveyData}
          showCompletedPage={false}
          onComplete={handleOnComplete}
        />
      )}
      {isCompleted && (
        <div className="results">
          <Survey.Survey
            title={getResultTitle(grade)}
            json={completedSurveyData}
            data={surveyAnswers}
            showCompletedPage={false}
            mode="display"
            questionsOnPageMode="singlePage"
            showProgressBar="off"
            showTimerPanel="none"
            maxTimeToFinishPage={0}
            maxTimeToFinish={0}
            onAfterRenderQuestion={displayResults}
          />
          <input
            className="endQuiz"
            type="button"
            value="fin"
            onClick={endQuiz}
          />
        </div>
      )}
    </div>
  );
};

Quiz.propTypes = {
  surveyData: PropTypes.object.isRequired,
  completedSurveyData: PropTypes.object.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  sendResults: PropTypes.func.isRequired,
  endQuiz: PropTypes.func.isRequired,
  surveyAnswers: PropTypes.object.isRequired,
  grade: PropTypes.number.isRequired,
};

export default Quiz;
