import axios from 'axios';
import { LOGIN_ADMIN } from 'src/actions/admin';

const register = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ADMIN: {
      axios.get('http://localhost/Apotheose/Odyssea/back/odyssea/public/admin', {
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
    default:
      next(action);
      break;
  }
};

export default register;
