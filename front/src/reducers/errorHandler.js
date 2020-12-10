import {
  SET_REQUEST_ERROR,
  CLEAR_ERRORS,
} from '../actions/errorHandler';

const initialState = {
  requestErrors: {},
  showError: false,
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REQUEST_ERROR:
      return {
        ...state,
        requestErrors: action.errors,
        showError: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        requestErrors: {},
        showError: false,
      };
    default:
      return state;
  }
};

export default categories;
