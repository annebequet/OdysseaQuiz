import axios from 'axios';

import { HANDLE_EDIT, HANDLE_DELETE, GET_USER } from 'src/actions/profile';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_EDIT: {
      const state = store.getState();
      const { newEmail: email, newPassword: password, newPseudo: pseudo } = state.profile;
      const id = sessionStorage.getItem('id');
      axios.put(`http://localhost/Apotheose/Odyssea/back/odyssea/public/users/${id}`, {
        email,
        password,
        pseudo,
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
      axios.get(`http://localhost/Apotheose/Odyssea/back/odyssea/public/users/${id}`,
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
    case HANDLE_DELETE: {
      const id = sessionStorage.getItem('id');
      axios.delete(`http://localhost/Apotheose/Odyssea/back/odyssea/public/users/${id}`,
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = 'http://localhost:8080/';
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
