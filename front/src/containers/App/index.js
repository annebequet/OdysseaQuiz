import { connect } from 'react-redux';
import { getSurveys } from 'src/actions/surveys';
import App from 'src/components/App';

const mapDispatchToProps = (dispatch) => ({
  getSurveys: () => dispatch(getSurveys()),
});

export default connect(null, mapDispatchToProps)(App);
