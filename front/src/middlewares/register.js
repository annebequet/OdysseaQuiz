import axios from 'axios';
import { REGISTER, validateRegistration } from 'src/actions/register';
import { setRequestError } from 'src/actions/errorHandler';

const register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      const {
        email,
        password,
        pseudo,
        environment,
      } = state.register;

      axios.post('http://localhost/Apotheose/Odyssea/back/odyssea/public/api/register', {
        email,
        password,
        pseudo,
        environment,
      })
        .then((response) => {
          store.dispatch(validateRegistration());
          setTimeout(() => {
            window.location.replace('/');
          }, 10000);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 500) {
            store.dispatch(setRequestError({ 'environnement': ['choisissez un environnement'] }));
          } else {
            store.dispatch(setRequestError(error.response.data));
          }
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
