import { connect } from 'react-redux';
import { checkIsLogged } from 'src/actions';
import { getCategories } from 'src/actions/categories';

import App from 'src/components/App';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  checkIsLogged: () => dispatch(checkIsLogged()),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
