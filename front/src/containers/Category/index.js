import { connect } from 'react-redux';

import Category from 'src/components/Category';
import { getCategoryBySlug } from 'src/selectors/categories';
import { getSurveys } from 'src/actions/surveys';

const mapStateToProps = (state, ownProps) => {
  // Thanks to this function, we will find the category through the slug, and return it.
  const category = getCategoryBySlug(state.categories.categories, ownProps.slug);
  return {
    surveyLoading: state.surveys.surveyLoading,
    category,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSurveys: (categorySlug) => {
    dispatch(getSurveys(categorySlug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
