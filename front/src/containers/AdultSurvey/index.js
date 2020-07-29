import { connect } from 'react-redux';

import AdultSurvey from 'src/components/AdultSurvey';

const mapStateToProps = (state) => ({
  adultSurveyData: state.surveys.surveys,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdultSurvey);
