import { connect } from 'react-redux';
import Login from 'src/components/Header';


const mapStateToProps = (state) => ({
  roles: state.headerLogin.roles,
  isLogged: state.headerLogin.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
