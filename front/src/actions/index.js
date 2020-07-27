export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

export const HANDLE_TOGGLER_CLICK = 'HANDLE_TOGGLER_CLICK';
export const LOGIN = 'LOGIN';

export const handleTogglerClick = () => ({
  type: HANDLE_TOGGLER_CLICK,
});

export const login = () => ({
  type: LOGIN,
});

export const changeFieldValue = () => ({
  type: CHANGE_FIELD_VALUE,
});
