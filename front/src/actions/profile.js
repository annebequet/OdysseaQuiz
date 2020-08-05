export const CHANGE_INPUT = 'CHANGE_INPUT';
export const HANDLE_EDIT_PSEUDO = 'HANDLE_EDIT_PSEUDO';
export const HANDLE_EDIT_EMAIL = 'HANDLE_EDIT_EMAIL';
export const HANDLE_EDIT_PASSWORD = 'HANDLE_EDIT_PASSWORD';
export const HANDLE_DELETE = 'HANDLE_DELETE';
export const GET_USER = 'GET_USER';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';

export const handleEditPseudo = () => ({
  type: HANDLE_EDIT_PSEUDO,
});

export const handleEditEmail = () => ({
  type: HANDLE_EDIT_EMAIL,
});

export const handleEditPassword = () => ({
  type: HANDLE_EDIT_PASSWORD,
});

export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const handleDelete = () => ({
  type: HANDLE_DELETE,
});

export const getUser = () => ({
  type: GET_USER,
});

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  pseudo,
});
