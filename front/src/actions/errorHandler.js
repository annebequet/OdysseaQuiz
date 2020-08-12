export const SET_ERROR = 'SET_ERROR';
export const SET_REQUEST_ERROR = 'SET_REQUEST_ERROR';

export const setError = (error) => ({
  type: SET_ERROR,
  key: Object.keys(error)[0],
  value: Object.values(error)[0],
});

export const setRequestError = (errors) => ({
  type: SET_REQUEST_ERROR,
  errors,
});
