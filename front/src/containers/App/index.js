import { connect } from 'react-redux';
import { checkIsLogged } from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.headerLogin.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => dispatch(checkIsLogged()),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
