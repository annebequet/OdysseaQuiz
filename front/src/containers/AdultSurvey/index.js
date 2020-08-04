import { connect } from 'react-redux';

import { sendResults, endQuiz, getSurveys } from 'src/actions/surveys';

import AdultSurvey from 'src/components/AdultSurvey';

const mapStateToProps = (state, ownProps) => ({
  surveyData: ownProps.survey,
  isCompleted: state.surveys.isCompleted,
  surveyAnswers: state.surveys.surveyAnswers,
  grade: state.surveys.numberOfCorrectAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  sendResults: (answers, numberOfCorrectAnswers) => {
    dispatch(sendResults(answers, numberOfCorrectAnswers));
  },

  getSurveys: () => dispatch(getSurveys()),
  endQuiz: () => dispatch(endQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdultSurvey);
