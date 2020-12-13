import { connect } from 'react-redux';
import Login from 'src/components/Header/Login';
import {
  login,
} from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.headerLogin.open,
});

const mapDispatchToProps = (dispatch) => ({
  login: (values) => {
    dispatch(login(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
