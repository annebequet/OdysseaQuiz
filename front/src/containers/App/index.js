import { connect } from 'react-redux';

import { checkIsLogged, updateLocation } from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  categoriesLoading: state.categories.categoriesLoading,
  isLogged: state.headerLogin.isLogged,
  showError: state.errorHandler.showError,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => dispatch(checkIsLogged()),
  updateLocation: (newLocation) => dispatch(updateLocation(newLocation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
