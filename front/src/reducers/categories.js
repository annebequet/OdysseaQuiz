import {
  SAVE_CATEGORIES, LOGIN_CHECKED
} from '../actions/categories';

const initialState = {
  categories: [],
  categoriesLoading: true,
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        categoriesLoading: false,
      };
    default:
      return state;
  }
};

export default categories;
