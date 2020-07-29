import { combineReducers } from 'redux';
import headerLogin from './headerLogin';
import surveys from './surveys';

export default combineReducers({
  headerLogin,
  surveys,
});
