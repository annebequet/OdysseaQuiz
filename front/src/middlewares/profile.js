import axios from 'axios';
import { setRequestError } from 'src/actions/errorHandler';

import {
  HANDLE_EDIT_EMAIL,
  HANDLE_EDIT_PSEUDO,
  HANDLE_EDIT_PASSWORD,
  HANDLE_DELETE,
  GET_USER,
  HANDLE_EDIT_ENVIRONMENT,
  HANDLE_EDIT_AVATAR,
  GET_AVATARS,
  saveAvatars,
  saveEmail,
  saveScores,
  saveEnvironment,
} from 'src/actions/profile';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_AVATARS: {
      axios.get('http://54.226.34.31/back/api/avatars',
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveAvatars(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_AVATAR: {
      const state = store.getState();
      const { newAvatar: avatar } = state.profile;
      const id = sessionStorage.getItem('id');
      axios.put(`http://54.226.34.31/back/api/users/${id}`, {
        avatar,
      },
      {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log(response.data);
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(setRequestError({ 'avatar': ['choisissez un avatar'] }));
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_EMAIL: {
      const state = store.getState();
      const { newEmail: email } = state.profile;
      const id = sessionStorage.getItem('id');
      axios.put(`http://54.226.34.31/back/api/users/${id}`, {
        email,
      },
      {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log(response.data);
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(setRequestError(error.response.data));
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_PSEUDO: {
      const state = store.getState();
      const { newPseudo: pseudo } = state.profile;
      const id = sessionStorage.getItem('id');
      axios.put(`http://54.226.34.31/back/api/users/${id}`, {

        pseudo,
      },
      {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log(response.data);
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(setRequestError(error.response.data));
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_PASSWORD: {
      const state = store.getState();
      const { newPassword: password } = state.profile;
      const id = sessionStorage.getItem('id');
      axios.put(`http://54.226.34.31/back/api/users/${id}`, {
        password,
      },
      {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log(response.data);
          // As there is no redirection, we want to reset the error State
          store.dispatch(setRequestError({}));
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(setRequestError(error.response.data));
        });

      next(action);
      break;
    }
    case GET_USER: {
      const id = sessionStorage.getItem('id');
      axios.get(`http://54.226.34.31/back/api/users/${id}`,
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveEmail(response.data.email));
          store.dispatch(saveScores(response.data.scores));
          store.dispatch(saveEnvironment(response.data.environment.name));
          window.sessionStorage.removeItem('environment');
          window.sessionStorage.setItem('environment', response.data.environment.id);
        })
        .catch((error) => {
          console.log(error.response);
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_ENVIRONMENT: {
      const state = store.getState();
      const { newEnvironment: environment } = state.profile;
      window.sessionStorage.removeItem('environment');
      window.sessionStorage.setItem('environment', environment);
      const id = sessionStorage.getItem('id');
      axios.put(`http://54.226.34.31/back/api/users/${id}`, {
        environment,
      },
      {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log(response.data);
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(setRequestError({ 'environnement': ['choisissez un environnement'] }));
        });

      next(action);
      break;
    }
    case HANDLE_DELETE: {
      const id = sessionStorage.getItem('id');
      axios.delete(`http://54.226.34.31/back/api/users/${id}`,
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log(response.data);
          window.location.replace('/');
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

export default categories;
