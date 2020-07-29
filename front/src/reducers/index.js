import { combineReducers } from 'redux';
import headerLogin from './headerLogin';
import surveys from './surveys';
import register from './register';

export default combineReducers({
  headerLogin,
  register,
  surveys,
});
