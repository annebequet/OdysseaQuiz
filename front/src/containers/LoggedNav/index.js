import { connect } from 'react-redux';
import LoggedNav from 'src/components/Header/LoggedNav';
import {
  logout,
} from 'src/actions';

const mapStateToProps = (state) => ({
  pseudo: state.headerLogin.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedNav);
