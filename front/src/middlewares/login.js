import axios from 'axios';
import { LOGIN, LOGOUT, CHECK_IS_LOGGED, saveUser } from 'src/actions';

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
          const { token, pseudo, roles } = response.data;
          window.sessionStorage.setItem('token', token);
          store.dispatch(saveUser(pseudo, roles));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case CHECK_IS_LOGGED:
      axios.post('http://localhost:3001/users', {},
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log('CHECK_IS_LOGGED', response);
          if (response.data.logged) {
            store.dispatch(saveUser('infos', response.data));
          }
        })
        .catch((error) => console.log(error));
      next(action);
      break;
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
