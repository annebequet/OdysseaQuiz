import { connect } from 'react-redux';

import Profile from 'src/components/Profile';
import { handleEdit, changeInput } from '../../actions/profile';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  pseudo: state.headerLogin.pseudo,
  avatar: state.headerLogin.avatar,
  newEmail: state.profile.newEmail,
  newPseudo: state.profile.newPseudo,
  newPassword: state.profile.newPassword,
});

const mapDispatchToProps = (dispatch) => ({
  handleEdit: () => {
    dispatch(handleEdit());
  },
  changeInput: (value, key) => {
    dispatch(changeInput(value, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
