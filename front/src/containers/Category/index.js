import { connect } from 'react-redux';

import Category from 'src/components/Category';
import { getCategoryBySlug } from 'src/selectors/categories';

const mapStateToProps = (state, ownProps) => {
  // Thanks to this function, we will find the category through the slug, and return it.
  const category = getCategoryBySlug(state.categories.categories, ownProps.slug);

  return {
    category,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
