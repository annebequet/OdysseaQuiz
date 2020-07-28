import { HANDLE_TOGGLER_CLICK, CHANGE_FIELD_VALUE } from '../actions';

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
    default:
      return state;
  }
};

export default HeaderLogin;
