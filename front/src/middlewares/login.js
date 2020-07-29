import axios from 'axios';
import { LOGIN, LOGOUT, saveUser } from 'src/actions';

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { username, password } = store.getState().headerLogin;

      axios.post('http://localhost/Apotheose/Odyssea/back/odyssea/public/api/login', {
        username,
        password,
      })
        .then((response) => {
          console.log(response);
          const { token } = response.data;
          window.sessionStorage.setItem('token', token);
          store.dispatch(saveUser('roles', response.data.roles));
          store.dispatch(saveUser(response.data.username));
          store.dispatch(saveUser(response.data.logged));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case LOGOUT:
      axios.post('http://localhost/Apotheose/Odyssea/back/odyssea/public/api/logout',
        {})
        .then(() => {
          window.sessionStorage.clear();
          next(action);
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default login;
