import { connect } from 'react-redux';
import Login from 'src/components/Header';
import { loginAdmin } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  roles: state.headerLogin.roles,
  isLogged: state.headerLogin.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  loginAdmin: () => {
    dispatch(loginAdmin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
