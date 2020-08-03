import {
  SAVE_CATEGORIES,
} from '../actions/categories';

const initialState = {
  categories: [],
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default categories;
