import {
  SET_ERROR,
} from '../actions/errorHandler';

const initialState = {
  email: '',
  password: '',
  pseudo: '',
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default categories;
