import axios from 'axios';
import { REGISTER, setError, validateRegistration } from 'src/actions/register';

const register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      const {
        email,
        password,
        lastName,
        firstName,
        pseudo,
        environment,
      } = state.register;

      axios.post('http://localhost/Apotheose/Odyssea/back/odyssea/public/register', {
        email,
        password,
        lastName,
        firstName,
        pseudo,
        environment,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(validateRegistration());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setError());
        });

      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default register;
