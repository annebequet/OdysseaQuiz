import axios from 'axios';
import { GET_SURVEYS, saveSurveys, SEND_RESULTS } from 'src/actions/surveys';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SURVEYS: {
      const categorySlug = action.category.id;
      const environmentSlug = sessionStorage.getItem('environment');
      axios.get(`http://localhost/Apotheose/Odyssea/back/odyssea/public/questions/${environmentSlug}/${categorySlug}`, {
        headers: {
          'X-AUTH-TOKEN': sessionStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log('response', response);
          store.dispatch(saveSurveys(response.data));
        })
        .catch((error) => {
          console.log('une errreeeeur ', error);
        });
      next(action);
      break;
    }
    case SEND_RESULTS: {
      // If the user used the exempleSurvey, then we do not send the results.
      if (!action.isExempleQuiz) {
        const state = store.getState();
        const environment = sessionStorage.getItem('environment');
        const { id: category } = state.surveys.surveyCategory;
        const user = sessionStorage.getItem('id');
        const points = action.numberOfCorrectAnswers;
        axios.post(`http://localhost/Apotheose/Odyssea/back/odyssea/public/score`, {
          environment,
          category,
          user,
          points,
        },
        {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
