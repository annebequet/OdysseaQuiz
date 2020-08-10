import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { register, changeField, handleSelect } from 'src/actions/register';

const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  lastName: state.register.lastName,
  firstName: state.register.firstName,
  pseudo: state.register.pseudo,
  avatar: state.register.avatar,
  environment: state.register.environment,
  isRegistered: state.register.isRegistered,
  error: state.register.error,
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
