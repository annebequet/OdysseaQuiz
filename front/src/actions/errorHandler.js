export const SET_REQUEST_ERROR = 'SET_REQUEST_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const setRequestError = (errors) => ({
  type: SET_REQUEST_ERROR,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
