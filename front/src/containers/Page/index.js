import { connect } from 'react-redux';

import Page from 'src/components/Page';

const mapStateToProps = (state) => ({
  location: state.app.location,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
