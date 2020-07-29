import { SAVE_SURVEYS } from 'src/actions/surveys';

const initialState = {
  surveys: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SURVEYS:
      return {
        ...state,
        surveys: action.surveys,
      };
    default:
      return state;
  }
};
