import axios from 'axios';
import { HANDLE_EDIT } from 'src/actions/profile';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_EDIT: {
      const state = store.getState();
      const { newEmail, newPassword, newPseudo } = state.profile;

      axios.put('http://localhost/Apotheose/Odyssea/back/odyssea/public/users/id', {
        newEmail,
        newPassword,
        newPseudo,
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
  }
};

export default categories;
