import { CHANGE_FIELD } from 'src/actions/register';

export const initialState = {
  email: '',
  password: '',
  lastName: '',
  firstName: '',
  pseudo: '',
  environment: '',
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default register;
