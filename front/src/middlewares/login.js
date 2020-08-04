import axios from 'axios';
import { LOGIN, LOGOUT, CHECK_IS_LOGGED, saveUser } from 'src/actions';

// http://54.226.34.31/api/*

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { username, password } = store.getState().headerLogin;

      axios.post('http://localhost/Apotheose/Odyssea/back/odyssea/public/login', {
        username,
        password,
      })
        .then((response) => {
          console.log(response);
          const { token, pseudo, roles, avatar } = response.data;
          window.sessionStorage.setItem('token', token);
          store.dispatch(saveUser(pseudo, roles, avatar));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case CHECK_IS_LOGGED:
      axios.get('http://localhost/Apotheose/Odyssea/back/odyssea/public/islogged',
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log('CHECK_IS_LOGGED', response);
          if (response.data.logged === false) {
            console.log('pas logé recommence');
          }
          else {
            const { pseudo, roles, avatar } = response.data[0];
            store.dispatch(saveUser(pseudo, roles, avatar));
          }
        })
        .catch((error) => {
          console.log(error);
          window.sessionStorage.removeItem('token');
        });
      next(action);
      break;
    case LOGOUT:
      axios.get('http://localhost/Apotheose/Odyssea/back/odyssea/public/logout',
        {})
        .then(() => {
          window.sessionStorage.removeItem('token');
          next(action);
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default login;
