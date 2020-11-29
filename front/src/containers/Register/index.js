import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { register, changeField } from 'src/actions/register';

const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  pseudo: state.register.pseudo,
  environment: state.register.environment,
  isRegistered: state.register.isRegistered,
  requestErrors: state.errorHandler.requestErrors,
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister: () => {
    dispatch(register());
  },
  changeField: (value, key) => {
    dispatch(changeField(value, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
