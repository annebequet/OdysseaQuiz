import { connect } from 'react-redux';
import Login from 'src/components/Header';
import { loginAdmin } from 'src/actions/admin';
import {
  logout,
} from 'src/actions';

const mapStateToProps = (state) => ({
  roles: state.headerLogin.roles,
  isLogged: state.headerLogin.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  loginAdmin: () => {
    dispatch(loginAdmin());
  },
  handleLogout: () => {
    //console.log('je veux me déconnecter');
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
