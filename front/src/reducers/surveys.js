import { SAVE_SURVEYS, SEND_RESULTS, END_QUIZ } from 'src/actions/surveys';

import adultExempleSurveyData from 'src/data';

const initialState = {
  exempleSurveys: {
    adultSurveyExemple: adultExempleSurveyData,
    childrenExempleSurvey: {},
  },
  surveys: {},
  surveyLoading: true,
  isCompleted: false,
  surveyAnswers: {},
  numberOfCorrectAnswers: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SURVEYS:
      return {
        ...state,
        surveys: action.surveys,
        surveyLoading: false,
      };
    case SEND_RESULTS:
      return {
        ...state,
        isCompleted: true,
        surveyAnswers: action.answers,
        numberOfCorrectAnswers: action.numberOfCorrectAnswers,
      };
    case END_QUIZ:
      return {
        ...state,
        isCompleted: false,
        surveyAnswers: {},
        numberOfCorrectAnswers: 0,
      };
    default:
      return state;
  }
};
