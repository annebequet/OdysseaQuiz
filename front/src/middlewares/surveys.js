import axios from 'axios';
import { GET_SURVEYS, saveSurveys, SEND_RESULTS } from 'src/actions/surveys';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SURVEYS: {
      const slug = action.categorySlug;
      axios.get(`http://localhost/Apotheose/Odyssea/back/odyssea/public/questions/1/${slug}`, {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log('mon quiz', response.data);
          store.dispatch(saveSurveys(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_RESULTS: {
      const resultsToSend = action.numberOfCorrectAnswers;
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
