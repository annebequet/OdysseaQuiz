import axios from 'axios';
import { LOGIN, changeFieldValue, LOGOUT } from 'src/actions';

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
          console.log(response.data);
          const { token, roles } = response.data;
          window.sessionStorage.setItem('token', token);
          window.sessionStorage.setItem('roles', roles);
          store.dispatch(changeFieldValue('roles', response.data.roles));
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
