import { CHANGE_FIELD, REGISTER } from 'src/actions/register';

export const initialState = {
  email: '',
  password: '',
  lastName: '',
  firstName: '',
  pseudo: '',
  environment: '',
  isRegistered: false,
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case REGISTER:
      return {
        ...state,
        isRegistered: true,
      };
    default:
      return state;
  }
};

export default register;
