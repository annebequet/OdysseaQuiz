import { connect } from 'react-redux';

import ExempleSurveys from 'src/components/ExempleSurveys';

const mapStateToProps = (state) => ({
  adultExempleSurvey: state.surveys.exempleSurveys.adultExempleSurvey,
  childrenExempleSurvey: state.surveys.exempleSurveys.childrenExempleSurvey,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExempleSurveys);
