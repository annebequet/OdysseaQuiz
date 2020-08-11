import {
  UPDATE_LOCATION,
} from '../actions';

const initialState = {
  location: '/',
};

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.newLocation,
      };
    default:
      return state;
  }
};

export default app;
