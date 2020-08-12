import { connect } from 'react-redux';

import Title from 'src/components/Title';

const mapStateToProps = (state) => ({
  location: state.app.location,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
