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
          window.sessionStorage.setItem('isLogged', true);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case CHECK_IS_LOGGED:
      axios.get('http://localhost/Apotheose/Odyssea/back/odyssea/public/api/islogged', {},
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log('CHECK_IS_LOGGED', response);
          if (response.data.logged) {
            const { pseudo, roles } = response.data;
            store.dispatch(saveUser(pseudo, roles));
            const { isLogged } = store.getState().headerLogin;
            if (window.sessionStorage.getItem('isLogged') === true) {
              store.dispatch(saveUser(isLogged));
            }
          }
        })
        .catch((error) => {
          console.log(error);
          window.sessionStorage.clear();
        });
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
