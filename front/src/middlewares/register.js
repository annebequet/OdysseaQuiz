import axios from 'axios';
import { REGISTER  } from 'src/actions/register';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      const { email, password } = state.register;

      axios.post('', {
        email,
        password,
      }
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

export default auth;
