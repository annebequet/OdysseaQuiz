import { CHANGE_FIELD, VALIDATE_REGISTRATION, SET_ERROR } from 'src/actions/register';

export const initialState = {
  email: '',
  password: '',
  pseudo: '',
  environment: '',
  isRegistered: false,
  error: false,
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case VALIDATE_REGISTRATION:
      return {
        ...state,
        isRegistered: true,
        error: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default register;
