import { SAVE_SURVEYS, SEND_RESULTS, END_QUIZ, GET_SURVEYS } from 'src/actions/surveys';

import adultExempleSurveyData from 'src/data';

const initialState = {
  exempleSurveys: {
    adultExempleSurvey: adultExempleSurveyData,
    childrenExempleSurvey: adultExempleSurveyData,
  },
  surveyCategory: '',
  surveyTitle: '',
  surveys: {},
  surveyLoading: true,
  isCompleted: false,
  isChildQuiz: false,
  isChildQuizCompleted: false,
  surveyAnswers: {},
  points: 0,
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
        isCompleted: !action.isChildQuiz,
        isChildQuizCompleted: action.isChildQuiz,
        surveyAnswers: action.answers,
        numberOfCorrectAnswers: action.numberOfCorrectAnswers,
      };
    case GET_SURVEYS:
      return {
        ...state,
        surveyCategory: action.category,
        surveyTitle: action.category.name,
      };
    case END_QUIZ:
      return {
        ...state,
        isCompleted: false,
        surveyAnswers: {},
        points: 0,
      };
    default:
      return state;
  }
};
