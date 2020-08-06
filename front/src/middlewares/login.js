import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
import {
  LOGIN, LOGOUT, CHECK_IS_LOGGED, saveUser,
} from 'src/actions';

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
          const {
            token, pseudo, roles, avatar, id, environment,
          } = response.data;
          window.sessionStorage.setItem('token', token);
          window.sessionStorage.setItem('id', id);
          window.sessionStorage.setItem('environment', environment);
          store.dispatch(saveUser(pseudo, roles, avatar, id));
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
            const id = sessionStorage.getItem('id');
            const { pseudo, roles, avatar } = response.data[0];
            store.dispatch(saveUser(pseudo, roles, avatar, id));
          }
        })
        .catch((error) => {
          console.log(error);
          window.sessionStorage.removeItem('token');
          window.sessionStorage.removeItem('id');
          window.sessionStorage.removeItem('environment');
        });
      next(action);
      break;
    case LOGOUT:
      axios.get('http://localhost/Apotheose/Odyssea/back/odyssea/public/logout',
        {})
        .then(() => {
          window.sessionStorage.removeItem('token');
          window.sessionStorage.removeItem('id');
          window.sessionStorage.removeItem('environment');
            <Route
              exact
              path="/"
            >
              <Page>
                <Home />
              </Page>
            </Route>;
            next(action);
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default login;
