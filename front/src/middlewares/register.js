import axios from 'axios';
import { REGISTER } from 'src/actions/register';

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
          window.location.replace('/');
        })
        .catch((error) => {
          console.log(error);
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
