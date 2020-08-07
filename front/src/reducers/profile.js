import { CHANGE_INPUT } from 'src/actions/profile';

export const initialState = {
  newEmail: '',
  newPassword: '',
  newPseudo: '',
  newEnvironment: '',
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default register;
