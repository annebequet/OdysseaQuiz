import { SAVE_SURVEYS, SURVEY_COMPLETED, UPDATE_RESULTS } from 'src/actions/surveys';

const initialState = {
  surveys: [],
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
    case SURVEY_COMPLETED:
      return {
        ...state,
        isCompleted: true,
        surveyAnswers: action.answers,
      };
    case UPDATE_RESULTS:
      return {
        ...state,
        numberOfCorrectAnswers: action.numberOfCorrectAnswers,
      };
    default:
      return state;
  }
};
