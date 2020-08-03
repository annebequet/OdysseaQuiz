import { connect } from 'react-redux';
import { getSurveys } from 'src/actions/surveys';
import { checkIsLogged } from 'src/actions';
import { getCategories } from 'src/actions/categories';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  surveyLoading: state.surveys.surveyLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getSurveys: () => dispatch(getSurveys()),
  checkIsLogged: () => dispatch(checkIsLogged()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
