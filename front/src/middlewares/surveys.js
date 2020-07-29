import axios from 'axios';
import { GET_SURVEYS, saveSurveys } from 'src/actions/surveys';

// Surveys en statique
import adultExempleSurveyData from 'src/data';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SURVEYS:
      store.dispatch(saveSurveys(adultExempleSurveyData));
      console.log(store.getState().surveys);
      break;
    default:
      next(action);
      break;
  }
};
