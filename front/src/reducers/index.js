import { combineReducers } from 'redux';
import headerLogin from './headerLogin';
import register from './register';

export default combineReducers({
  headerLogin,
  register,
});
