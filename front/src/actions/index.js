export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const SAVE_USER = 'SAVE_USER';

export const login = (values) => ({
  type: LOGIN,
  values,
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
  avatar,
  id,
  isLogged,
) => ({
  type: SAVE_USER,
  pseudo,
  roles,
  avatar,
  id,
  isLogged,
});
