import axios from 'axios';
import { LOGIN, changeFieldValue } from 'src/actions';

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { username, password } = store.getState().headerLogin;

      axios.post('http://localhost/Apotheose/Odyssea/back/odyssea/public/api/login', {
        username,
        password,
      })
        .catch((Request) => {
          console.log('request : ', Request);
        })
        .then((response) => {
          console.log('response : ', response);
          store.dispatch(changeFieldValue('pseudo', response.data.username));
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
