import { connect } from 'react-redux';

import Profile from 'src/components/Profile';
import {
  handleEditPseudo,
  handleEditEmail,
  handleEditPassword,
  changeInput,
  handleDelete,
  getUser,
} from '../../actions/profile';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  pseudo: state.headerLogin.pseudo,
  avatar: state.headerLogin.avatar,
  newEmail: state.profile.newEmail,
  newPseudo: state.profile.newPseudo,
  newPassword: state.profile.newPassword,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditPseudo: () => {
    dispatch(handleEditPseudo());
  },
  handleEditEmail: () => {
    dispatch(handleEditEmail());
  },
  handleEditPassword: () => {
    dispatch(handleEditPassword());
  },
  changeInput: (value, key) => {
    dispatch(changeInput(value, key));
  },
  handleDelete: () => {
    dispatch(handleDelete());
  },
  getUser: () => {
    dispatch(getUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
