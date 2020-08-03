import { connect } from 'react-redux';

import { surveyCompleted, sendResults, updateResults } from 'src/actions/surveys';

import AdultSurvey from 'src/components/AdultSurvey';

const mapStateToProps = (state) => ({
  surveyData: state.surveys.surveys,
  isCompleted: state.surveys.isCompleted,
  surveyAnswers: state.surveys.surveyAnswers,
  grade: state.surveys.numberOfCorrectAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  surveyCompleted: (answers) => {
    dispatch(surveyCompleted(answers));
  },

  updateResults: (numberOfCorrectAnswers) => {
    dispatch(updateResults(numberOfCorrectAnswers));
  },

  sendResults: () => {
    dispatch(sendResults());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdultSurvey);
