import {
  SET_ERROR,
  SET_REQUEST_ERROR,
} from '../actions/errorHandler';

const initialState = {
  email: '',
  password: '',
  pseudo: '',
  requestErrors: {},
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SET_REQUEST_ERROR:
      return {
        ...state,
        requestErrors: action.errors,
      };
    default:
      return state;
  }
};

export default categories;
