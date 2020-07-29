import axios from 'axios';
import { REGISTER } from 'src/actions/register';

const register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      const {
        username,
        password,
        lastName,
        firstName,
        pseudo,
        environment,
      } = state.register;

      axios.post('http://localhost/Apotheose/Odyssea/back/odyssea/public/api/register', {
        username,
        password,
        lastName,
        firstName,
        pseudo,
        environment,
        headers: {
          'X-AUTH-TOKEN': localStorage.getItem('token'),
        },
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
