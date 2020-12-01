import axios from 'axios';
import { GET_CATEGORIES, saveCategories } from 'src/actions/categories';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      const environmentSlug = sessionStorage.getItem('environment');
      axios.get(`http://localhost/Anne/OdysseaQuiz/back/odyssea/public/api/categories/${environmentSlug}`,
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
        .then((response) => {
          // console.log(response.data);
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
