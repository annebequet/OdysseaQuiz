import { connect } from 'react-redux';

import { getCategories } from 'src/actions/categories';
import { checkIsLogged } from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  categoriesLoading: state.categories.categoriesLoading,
  isLogged: state.headerLogin.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => dispatch(checkIsLogged()),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
