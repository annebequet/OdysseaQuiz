import { CHANGE_INPUT, SAVE_AVATARS } from 'src/actions/profile';

export const initialState = {
  newEmail: '',
  newPassword: '',
  newPseudo: '',
  newEnvironment: '',
  newAvatar: '',
  avatars: [],
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_AVATARS:
      return {
        ...state,
        avatars: action.avatars,
      };
    default:
      return state;
  }
};

export default register;
