import { connect } from 'react-redux';
import { getSurveys } from 'src/actions/surveys';
import { checkIsLogged } from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  surveyLoading: state.surveys.surveyLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getSurveys: () => dispatch(getSurveys()),
  checkIsLogged: () => dispatch(checkIsLogged()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
