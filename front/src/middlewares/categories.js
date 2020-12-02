import axios from 'axios';
import { GET_CATEGORIES, saveCategories } from 'src/actions/categories';

import baseUrl from './baseUri';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      const environmentSlug = sessionStorage.getItem('environment');
      const { isLogged } = action;

      // If the user is connected, the page category will also display the podiums and its own rank.
      // Otherwise it will just display the categories.
      const slug = isLogged ? `/${environmentSlug}` : '/0';
      const token = sessionStorage.getItem('token');
      const header = isLogged ? { 'X-AUTH-TOKEN': token } : '';

      axios.get(`${baseUrl}/categories${slug}`,
        {
          headers: header,
        })
        .then((response) => {
          console.log(response.data);
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
