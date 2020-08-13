export const CHANGE_FIELD = 'CHANGE_FIELD';
export const REGISTER = 'REGISTER';
export const HANDLE_SELECT = 'HANDLE_SELECT';
export const VALIDATE_REGISTRATION = 'VALIDATE_REGISTRATION';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const register = () => ({
  type: REGISTER,
});

export const validateRegistration = () => ({
  type: VALIDATE_REGISTRATION,
});
