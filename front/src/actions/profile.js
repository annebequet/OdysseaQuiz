export const CHANGE_INPUT = 'CHANGE_INPUT';
export const HANDLE_EDIT_PSEUDO = 'HANDLE_EDIT_PSEUDO';
export const HANDLE_EDIT_EMAIL = 'HANDLE_EDIT_EMAIL';
export const HANDLE_EDIT_PASSWORD = 'HANDLE_EDIT_PASSWORD';
export const HANDLE_EDIT_ENVIRONMENT = 'HANDLE_EDIT_ENVIRONMENT';
export const HANDLE_DELETE = 'HANDLE_DELETE';
export const GET_USER = 'GET_USER';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const HANDLE_EDIT_AVATAR = 'HANDLE_EDIT_AVATAR';
export const GET_AVATARS = 'GET_AVATARS';
export const SAVE_AVATARS = 'SAVE_AVATARS';
export const SAVE_SCORES = 'SAVE_SCORES';
export const SAVE_ENVIRONMENT = 'SAVE_ENVIRONMENT';

export const handleEditPseudo = () => ({
  type: HANDLE_EDIT_PSEUDO,
});

export const handleEditEmail = () => ({
  type: HANDLE_EDIT_EMAIL,
});

export const handleEditPassword = () => ({
  type: HANDLE_EDIT_PASSWORD,
});

export const handleEditEnvironment = () => ({
  type: HANDLE_EDIT_ENVIRONMENT,
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

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const handleEditAvatar = () => ({
  type: HANDLE_EDIT_AVATAR,
});

export const getAvatars = () => ({
  type: GET_AVATARS,
});

export const saveAvatars = (avatars) => ({
  type: SAVE_AVATARS,
  avatars,
});

export const saveScores = (scores) => ({
  type: SAVE_SCORES,
  scores,
});

export const saveEnvironment = (environment) => ({
  type: SAVE_ENVIRONMENT,
  environment,
});
