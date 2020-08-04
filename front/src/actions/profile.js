export const SEND_EDIT = 'SEND_EDIT';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const HANDLE_EDIT = 'HANDLE_EDIT';

export const handleEdit = () => ({
  type: HANDLE_EDIT,
});

export const sendEdit = () => ({
  type: SEND_EDIT,
});

export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  name,
  value,
});
