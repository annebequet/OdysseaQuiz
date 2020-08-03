export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});
