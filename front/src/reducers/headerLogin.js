import {
  HANDLE_TOGGLER_CLICK,
  CHANGE_FIELD_VALUE,
  SAVE_USER,
  LOGOUT,
} from '../actions';

const initialState = {
  open: false,
  pseudo: '',
  username: '',
  password: '',
};

const HeaderLogin = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_TOGGLER_CLICK:
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
        infos: {
          pseudo: action.username,
        },
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        infos: {},
      };
    default:
      return state;
  }
};

export default HeaderLogin;
