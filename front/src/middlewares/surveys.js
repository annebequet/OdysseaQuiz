import axios from 'axios';
import { GET_SURVEYS, saveSurveys, SEND_RESULTS } from 'src/actions/surveys';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SURVEYS: {
      const categorySlug = action.category.id;
      const environmentSlug= store.getState().profile.environment;
      axios.get(`http://localhost/Apotheose/Odyssea/back/odyssea/public/questions/${environmentSlug}/${categorySlug}`, {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          store.dispatch(saveSurveys(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_RESULTS: {
      // TODO (not in MVP)
      const resultsToSend = action.numberOfCorrectAnswers;
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
