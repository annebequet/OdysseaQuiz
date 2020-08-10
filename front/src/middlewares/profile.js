import axios from 'axios';

import {
  HANDLE_EDIT_EMAIL,
  HANDLE_EDIT_PSEUDO,
  HANDLE_EDIT_PASSWORD,
  HANDLE_DELETE,
  GET_USER,
  HANDLE_EDIT_ENVIRONMENT,
} from 'src/actions/profile';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
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
        })
        .catch((error) => {
          console.log(error);
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
          window.location.href = `http://54.226.34.31/back/api/users/${id}`;
        })
        .catch((error) => {
          console.log(error);
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
        })
        .catch((error) => {
          console.log(error);
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
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_ENVIRONMENT: {
      const state = store.getState();
      const { newEnvironment: environment } = state.profile;
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
          window.location.href = `http://54.226.34.31/back/users/${id}`;
        })
        .catch((error) => {
          console.log(error);
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
          window.location.href = `http://54.226.34.31/`;
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
