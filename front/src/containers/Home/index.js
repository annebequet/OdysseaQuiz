import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  adultExempleSurvey: state.surveys.exempleSurveys.adultExempleSurvey,
  childrenExempleSurvey: state.surveys.exempleSurveys.childrenExempleSurvey,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
