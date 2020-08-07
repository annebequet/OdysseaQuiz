import { connect } from 'react-redux';
import Categories from 'src/components/Categories';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  isLogged: state.headerLogin.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
