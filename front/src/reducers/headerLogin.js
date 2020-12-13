import {
  SAVE_USER,
  LOGOUT,
} from '../actions';

export const initialState = {
  open: false,
  pseudo: '',
  roles: [],
  isLogged: false,
  avatar: {},
  id: '',
};

const HeaderLogin = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        pseudo: action.pseudo,
        roles: action.roles,
        avatar: action.avatar,
        id: action.id,
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
