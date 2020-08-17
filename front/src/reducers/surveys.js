import { SAVE_SURVEYS, SEND_RESULTS, END_QUIZ, GET_SURVEYS, SET_ERROR } from 'src/actions/surveys';

import { quizAdultExemple, quizChildrenExemple } from 'src/data';

const initialState = {
  exempleSurveys: {
    adultExempleSurvey: quizAdultExemple,
    childrenExempleSurvey: quizChildrenExemple,
  },
  surveyCategory: '',
  surveyTitle: '',
  surveys: {},
  completedSurveyData: {},
  surveyLoading: true,
  isCompleted: false,
  isChildQuizCompleted: false,
  surveyAnswers: {},
  points: 0,
  error: false,
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
        points: action.numberOfCorrectAnswers,
        completedSurveyData: action.surveyData,
      };
    case GET_SURVEYS:
      return {
        ...state,
        surveyCategory: action.category,
        surveyTitle: action.category.name,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    case END_QUIZ:
      return {
        ...state,
        isCompleted: false,
        isChildQuizCompleted: false,
        //surveys: {},
        surveyAnswers: {},
        points: 0,
        //surveyCategory: '',
        //surveyTitle: '',
      };
    default:
      return state;
  }
};
