import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  pseudo: state.headerLogin.pseudo,
  avatar: state.headerLogin.avatar,
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
