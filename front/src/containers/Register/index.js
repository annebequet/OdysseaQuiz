import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { register, changeField } from 'src/actions/register';

const mapStateToProps = (state) => ({
  email: state.register.username,
  password: state.register.password,
  lastName: state.register.last_name,
  firstName: state.register.first_name,
  pseudo: state.register.pseudo,
  avatar: state.register.avatar,
  environment: state.register.environment,
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
