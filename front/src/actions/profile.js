export const CHANGE_INPUT = 'CHANGE_INPUT';
export const HANDLE_EDIT = 'HANDLE_EDIT';
export const HANDLE_DELETE = 'HANDLE_DELETE';

export const handleEdit = () => ({
  type: HANDLE_EDIT,
});

export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const handleDelete = () => ({
  type: HANDLE_DELETE,
});
