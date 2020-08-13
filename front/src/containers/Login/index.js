import { connect } from 'react-redux';
import Login from 'src/components/Header/Login';
import {
  handleTogglerClick,
  login,
  onBlurLogin,
} from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.headerLogin.open,
  requestErrors: state.errorHandler.requestErrors,
});

const mapDispatchToProps = (dispatch) => ({
  handleTogglerClick: () => {
    dispatch(handleTogglerClick());
  },
  onBlurLogin: () => {
    dispatch(onBlurLogin());
  },
  login: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
