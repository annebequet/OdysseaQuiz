import {
  CHANGE_FIELD, VALIDATE_REGISTRATION } from 'src/actions/register';

export const initialState = {
  email: '',
  password: '',
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
    case VALIDATE_REGISTRATION:
      return {
        ...state,
        isRegistered: true,
        error: false,
      };
    default:
      return state;
  }
};

export default register;
