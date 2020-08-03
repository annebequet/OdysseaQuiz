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

      axios.post('http://54.226.34.31/api/register', {
        email,
        password,
        lastName,
        firstName,
        pseudo,
        environment,
      })
        .then((response) => {
          console.log(response.data);
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
