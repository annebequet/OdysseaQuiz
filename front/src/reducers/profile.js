import { CHANGE_INPUT, SAVE_AVATARS, SAVE_EMAIL, SAVE_SCORES} from 'src/actions/profile';

export const initialState = {
  email: '',
  newEmail: '',
  newPassword: '',
  newPseudo: '',
  newEnvironment: '',
  newAvatar: '',
  avatars: [],
  scores: [],
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
    case SAVE_SCORES:
      return {
        ...state,
        scores: action.scores,
      };
    case SAVE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};

export default register;
