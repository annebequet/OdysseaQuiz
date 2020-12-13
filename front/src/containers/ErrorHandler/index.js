import { connect } from 'react-redux';

import ErrorHandler from 'src/components/ErrorHandler';

import { clearErrors } from 'src/actions/errorHandler';

const mapStateToProps = (state) => ({
  requestErrors: state.errorHandler.requestErrors,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler);
