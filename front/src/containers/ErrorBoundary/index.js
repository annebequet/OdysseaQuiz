import { connect } from 'react-redux';

import ErrorBoundary from 'src/components/ErrorBoundary';

import { clearErrors } from 'src/actions/errorHandler';

const mapStateToProps = (state) => ({
  requestErrors: state.errorHandler.requestErrors,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
