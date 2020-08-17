import axios from 'axios';
import {
  LOGIN, LOGOUT, CHECK_IS_LOGGED, saveUser,
} from 'src/actions';
import { setRequestError } from 'src/actions/errorHandler';

// http://54.226.34.31/*
// http://localhost/Apotheose/Odyssea/back/odyssea/public/*

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { username, password } = store.getState().headerLogin;

      axios.post('http://54.226.34.31/back/api/login', {
        username,
        password,
      })
        .then((response) => {
          console.log(response);
          const {
            token, pseudo, roles, avatar, id, environmentId: environment,
          } = response.data;
          window.sessionStorage.setItem('token', token);
          window.sessionStorage.setItem('id', id);
          window.sessionStorage.setItem('environment', environment);
          store.dispatch(saveUser(pseudo, roles, avatar, id));
        })
        .catch((error) => {
          console.log('login', error.response);
          store.dispatch(setRequestError({ 'Erreur de connexion': ['Mot de passe ou identifiant Incorrect'] }));
        });

      next(action);
      break;
    }
    case CHECK_IS_LOGGED:
      axios.get('http://54.226.34.31/back/api/islogged',
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
            const id = sessionStorage.getItem('id');
            const { pseudo, roles, avatar } = response.data[0];
            store.dispatch(saveUser(pseudo, roles, avatar, id));
          }
        })
        .catch((error) => {
          //console.log(error);
          window.sessionStorage.removeItem('token');
          window.sessionStorage.removeItem('id');
          window.sessionStorage.removeItem('environment');
        });
      next(action);
      break;
    case LOGOUT:
      axios.get('http://54.226.34.31/back/api/logout',
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then(() => {
          window.sessionStorage.removeItem('token');
          window.sessionStorage.removeItem('id');
          window.sessionStorage.removeItem('environment');
          window.location.replace('/');
          next(action);
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default login;
