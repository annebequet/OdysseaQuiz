import { connect } from 'react-redux';

import Video from 'src/components/Video';

const mapStateToProps = (state) => ({
  location: state.app.location,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
