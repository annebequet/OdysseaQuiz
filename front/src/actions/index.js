export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const HANDLE_TOGGLER_CLICK = 'HANDLE_TOGGLER_CLICK';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const SAVE_USER = 'SAVE_USER';

export const handleTogglerClick = () => ({
  type: HANDLE_TOGGLER_CLICK,
});

export const changeFieldValue = (key, value) => ({
  type: CHANGE_FIELD_VALUE,
  key,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const saveUser = (
  pseudo,
  roles,
  logged,
) => ({
  type: SAVE_USER,
  pseudo,
  roles,
  isLogged: logged,
});
