import axios from 'axios';

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
} from 'src/actions/profile';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_AVATARS: {
      axios.get(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/avatars`,
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
      axios.put(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`, {
        avatar,
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
    case HANDLE_EDIT_EMAIL: {
      const state = store.getState();
      const { newEmail: email } = state.profile;
      const id = sessionStorage.getItem('id');
      axios.put(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`, {
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
      axios.put(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`, {

        pseudo,
      },
      {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log(response.data);
          window.location.href = `http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`;
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
      axios.put(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`, {
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
      axios.get(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`,
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
      axios.put(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`, {
        environment,
      },
      {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log(response.data);
          window.location.href = `http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`;
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case HANDLE_DELETE: {
      const id = sessionStorage.getItem('id');
      axios.delete(`http://localhost/Apotheose/Odyssea/back/odyssea/public/api/users/${id}`,
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = `http://localhost:8080/`;
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
