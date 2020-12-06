/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import { Link } from 'react-router-dom';

import { changeCSSStyles, handleSingularOrPlural, turnAnswersIntoBooleans } from 'src/selectors/survey';
import { getSlugFromTitle } from 'src/selectors/categories';

import './styles.scss';

const Quiz = ({
  category,
  surveyData,
  completedSurveyData,
  isCompleted,
  surveyAnswers,
  sendResults,
  endQuiz,
  grade,
}) => {
  // Allows to restart the quiz when the user comes back on the component, by changing the value of isCompleted
  useEffect(() => {
    endQuiz();
  }, []);

  // Write survey results into database and state, and send the question / answers detailed informations to the state, so that it can be used for the survey that displays the answers.
  const handleOnComplete = (survey) => {
    const answers = survey.data;
    const booleanAnswers = turnAnswersIntoBooleans(answers, surveyData);
    const numberOfCorrectAnswers = survey.getCorrectedAnswerCount();
    sendResults(booleanAnswers, answers, numberOfCorrectAnswers, surveyData);
  };

  // Adapt the css style of the correct and wrong answers
  const displayResults = (survey, options) => {
    changeCSSStyles(survey, options);
  };

  // Depending on whether the number of correct answers is plural or not, this function will return a grammaticaly correct result text
  const getResultTitle = (numberOfCorrectAnswers) => {
    const title = handleSingularOrPlural(numberOfCorrectAnswers);
    return title;
  };

  { /* Feature not used : not supported byy the Database
    Create showdown mardown converter : necessary if we introduce markdown in the surveys to display images. There is and event in the survey : onTextMarkdown that activates it.
  const converter = new showdown.Converter();

  // same : markdown converter
  const displayImagesInSurvey = (survey, options) => {
    // convert the mardown text to html
    let str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  }; */ }

  /* We have two surveys : one to use as a quiz, the second one to display the results. The completion of the quiz passes the const isCompleted to true, so as to display the second survey with the results. */
  return (
    <div className="survey">

      {!isCompleted && (
        <Survey.Survey
          json={surveyData}
          showCompletedPage={false}
          onComplete={handleOnComplete}
          // onTextMarkdown={displayImagesInSurvey}
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
            // onTextMarkdown={displayImagesInSurvey}
          />
          <Link
            to={`/categories/${getSlugFromTitle(category)}`}
            className="category_link"
            key={category}
          >
            <input
              className="endQuiz"
              type="button"
              value="fin"
              onClick={endQuiz}
            />
          </Link>
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
  category: PropTypes.string.isRequired,
};

export default Quiz;
