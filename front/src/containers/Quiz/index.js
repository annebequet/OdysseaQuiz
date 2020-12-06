/* eslint-disable max-len */
import { connect } from 'react-redux';

import { sendResults, endQuiz } from 'src/actions/surveys';

import { transformQuestionsInSurveyObject } from 'src/selectors/survey';

import Quiz from 'src/components/Quiz';

const mapStateToProps = (state, ownProps) => {
  // Gets the survey questions, depending on whether we're on an exemple survey (passed in props) or in an exercise survey (in state)
  const survey = ownProps.survey ? ownProps.survey : state.surveys.surveys;

  // Gets the title of the surveys (either passed in the props when it's a quiz exemple, or the title of the survey)
  const category = ownProps.category ? ownProps.category : state.surveys.surveyTitle;

  // Here we have to differentiate whether it's a child quiz or not for the exemple quiz. If we only play on one exempleQuiz, we only want this one to be validated.
  const isCompleted = ownProps.isChildExempleQuiz ? state.surveys.isChildQuizCompleted : state.surveys.isCompleted;

  // Function to turn the object received by the request into an object that would fit the library SurveyJS expectations for the Quiz
  const surveyData = transformQuestionsInSurveyObject(survey, category);

  return {
    category,
    surveyData,
    isCompleted,
    completedSurveyData: state.surveys.completedSurveyData,
    surveyAnswers: state.surveys.surveyAnswers,
    grade: state.surveys.points,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendResults: (requestAnswers, displayAnswers, numberOfCorrectAnswers, surveyData) => {
    dispatch(sendResults(
      requestAnswers,
      displayAnswers,
      numberOfCorrectAnswers,
      surveyData,
      ownProps.isExempleQuiz,
      ownProps.isChildExempleQuiz,
    ));
  },

  endQuiz: () => dispatch(endQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
