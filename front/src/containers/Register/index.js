import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { register, changeField } from 'src/actions/register';
import { setError } from 'src/actions/errorHandler';

const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  pseudo: state.register.pseudo,
  environment: state.register.environment,
  isRegistered: state.register.isRegistered,
  error: state.register.error,
  errorEmail: state.errorHandler.email,
  errorPassword: state.errorHandler.password,
  errorPseudo: state.errorHandler.pseudo,
});
const mapDispatchToProps = (dispatch) => ({
  handleRegister: () => {
    dispatch(register());
  },
  changeField: (value, key) => {
    dispatch(changeField(value, key));
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
