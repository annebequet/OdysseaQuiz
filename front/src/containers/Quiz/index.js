import { connect } from 'react-redux';

import { sendResults, endQuiz } from 'src/actions/surveys';

import { transformQuestionsInSurveyObject } from 'src/selectors/survey';

import Quiz from 'src/components/Quiz';

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line max-len
  // Gets the survey questions, depending on whether we're on an exemple survey (passed in props) or in an exercise survey (in state)
  const survey = ownProps.survey ? ownProps.survey : state.surveys.surveys;
  const category = ownProps.category ? ownProps.category : state.surveys.surveyTitle;

  // eslint-disable-next-line max-len
  // Function to turn the object received by the request into an object that would fit the library SurveyJS expectations
  const surveyData = transformQuestionsInSurveyObject(survey, category);
  return {
    surveyData,
    isCompleted: state.surveys.isCompleted,
    surveyAnswers: state.surveys.surveyAnswers,
    grade: state.surveys.points,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendResults: (answers, numberOfCorrectAnswers) => {
    dispatch(sendResults(answers, numberOfCorrectAnswers, ownProps.isExempleQuiz));
  },

  endQuiz: () => dispatch(endQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
