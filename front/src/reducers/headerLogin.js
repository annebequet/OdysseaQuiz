import {
  HANDLE_TOGGLER_CLICK,
  ON_BLUR_LOGIN,
  CHANGE_FIELD_VALUE,
  SAVE_USER,
  LOGOUT,
} from '../actions';

const initialState = {
  open: false,
  username: '',
  pseudo: '',
  roles: [],
  password: '',
  isLogged: false,
  avatar: '',
};

const HeaderLogin = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_TOGGLER_CLICK:
      return {
        ...state,
        open: !state.open,
      };
    case ON_BLUR_LOGIN:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        pseudo: action.pseudo,
        roles: action.roles,
        avatar: action.avatar,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        pseudo: '',
        roles: '',
        avatar: '',
      };
    default:
      return state;
  }
};

export default HeaderLogin;
