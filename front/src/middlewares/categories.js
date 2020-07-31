import axios from 'axios';
import { GET_CATEGORIES, saveCategories } from 'src/actions/categories';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      axios.get('http://54.226.34.31/api/categories')
        .then((response) => {
          console.log('rghd', response.data);
          store.dispatch(saveCategories(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default categories;
