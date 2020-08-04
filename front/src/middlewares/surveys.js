import axios from 'axios';
import { GET_SURVEYS, saveSurveys, SEND_RESULTS } from 'src/actions/surveys';

// Surveys en statique

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SURVEYS:
      store.dispatch(saveSurveys(adultExempleSurveyData));
      next(action);
      break;
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
