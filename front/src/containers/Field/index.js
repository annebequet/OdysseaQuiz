import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeFieldValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  value: state.headerLogin[ownProps.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setValue: (value) => {
    dispatch(changeFieldValue(ownProps.id, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
