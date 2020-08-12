import { connect } from 'react-redux';

import Profile from 'src/components/Profile';
import {
  handleEditPseudo,
  handleEditEmail,
  handleEditPassword,
  changeInput,
  handleEditEnvironment,
  handleDelete,
  getUser,
  getAvatars,
  handleEditAvatar,
} from '../../actions/profile';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  pseudo: state.headerLogin.pseudo,
  email: state.profile.email,
  avatar: state.headerLogin.avatar,
  avatars: state.profile.avatars,
  newEmail: state.profile.newEmail,
  newPseudo: state.profile.newPseudo,
  newPassword: state.profile.newPassword,
  newEnvironment: state.profile.newEnvironment,
  newAvatar: state.profile.newAvatar,
  scores: state.profile.scores,
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
  handleEditEnvironment: () => {
    dispatch(handleEditEnvironment());
  },
  changeInput: (value, key) => {
    dispatch(changeInput(value, key));
  },
  handleDelete: () => {
    dispatch(handleDelete());
  },
  getAvatars: () => {
    dispatch(getAvatars());
  },
  getUser: () => {
    dispatch(getUser());
  },
  handleEditAvatar: () => {
    dispatch(handleEditAvatar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
