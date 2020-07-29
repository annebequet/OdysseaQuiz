export const CHANGE_FIELD = 'CHANGE_FIELD';
export const REGISTER = 'REGISTER';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const register = () => ({
  type: REGISTER,
});
