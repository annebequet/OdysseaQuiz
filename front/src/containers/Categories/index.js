import { connect } from 'react-redux';

import { getCategories } from 'src/actions/categories';

import Categories from 'src/components/Categories';

const mapStateToProps = (state) => ({
  categoriesLoading: state.categories.categoriesLoading,
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
