import axios from 'axios';
import {
  LOGIN, LOGOUT, CHECK_IS_LOGGED, saveUser,
} from 'src/actions';
import { setRequestError } from 'src/actions/errorHandler';
import { getCategories } from 'src/actions/categories';

import baseUrl from './baseUri';

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { password } = action.values;
      const username = action.values.email;

      axios.post(`${baseUrl}/login`, {
        username,
        password,
      })
        .then((response) => {
          console.log('success');
          const {
            token, pseudo, roles, avatar, id, environmentId: environment,
          } = response.data;
          window.sessionStorage.setItem('token', token);
          window.sessionStorage.setItem('id', id);
          window.sessionStorage.setItem('environment', environment);
          store.dispatch(saveUser(pseudo, roles, avatar, id));
          // eslint-disable-next-line max-len
          // The informations displayed with the list of categories depend on whether the user is logged in or not. That's why the LOGIN and CHECKED_IS_LOGGED cases will trigger the function getCategories with a boolean indicating the login status.
          store.dispatch(getCategories(true));
        })
        .catch((error) => {
          store.dispatch(setRequestError({ 'Erreur de connexion': ['Mot de passe ou identifiant Incorrect'] }));
          store.dispatch(getCategories(false));
        });

      next(action);
      break;
    }
    case CHECK_IS_LOGGED:
      axios.get(`${baseUrl}/islogged`,
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          if (response.data.logged === false) {
            console.log('pas logé recommence');
          }
          else {
            const id = sessionStorage.getItem('id');
            const { pseudo, roles, avatar } = response.data[0];
            store.dispatch(saveUser(pseudo, roles, avatar, id));
            store.dispatch(getCategories(true));
          }
        })
        .catch((error) => {
          window.sessionStorage.removeItem('token');
          window.sessionStorage.removeItem('id');
          window.sessionStorage.removeItem('environment');
          store.dispatch(getCategories(false));
        });
      next(action);
      break;
    case LOGOUT:
      axios.get(`${baseUrl}/logout`,
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
