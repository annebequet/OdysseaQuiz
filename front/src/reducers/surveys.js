import { SAVE_SURVEYS } from 'src/actions/surveys';

const initialState = {
  surveys: [],
  surveyLoading: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SURVEYS:
      return {
        ...state,
        surveys: action.surveys,
        surveyLoading: false,
      };
    default:
      return state;
  }
};
