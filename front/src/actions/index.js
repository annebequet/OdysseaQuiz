export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

export const HANDLE_TOGGLER_CLICK = 'HANDLE_TOGGLER_CLICK';
export const LOGIN = 'LOGIN';

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
