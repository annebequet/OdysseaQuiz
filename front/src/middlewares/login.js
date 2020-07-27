import axios from 'axios';
import { LOGIN, changeFieldValue } from 'src/actions';

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = store.getState();

      axios.post('/http://localhost/Apotheose/Odyssea/back/odyssea/public/login*', {
        email,
        password,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(changeFieldValue('username', response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default login;
