import { connect } from 'react-redux';
import Login from 'src/components/Header/Login';
import {
  handleTogglerClick,
  login,
} from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.headerLogin.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleTogglerClick: () => {
    dispatch(handleTogglerClick());
  },
  login: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
