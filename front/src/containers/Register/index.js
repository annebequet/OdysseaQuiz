import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { register, changeField, displayErrors } from 'src/actions/register';

const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  pseudo: state.register.pseudo,
  environment: state.register.environment,
  isRegistered: state.register.isRegistered,
  error: state.register.error,
  errorsFound: state.register.errors,
});
const mapDispatchToProps = (dispatch) => ({
  handleRegister: () => {
    dispatch(register());
  },
  changeField: (value, key) => {
    dispatch(changeField(value, key));
  },
  displayErrors: (errors) => {
    dispatch(displayErrors(errors));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
