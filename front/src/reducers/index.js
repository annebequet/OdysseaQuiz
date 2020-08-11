import { combineReducers } from 'redux';
import headerLogin from './headerLogin';
import surveys from './surveys';
import register from './register';
import categories from './categories';
import profile from './profile';
import app from './app';

export default combineReducers({
  headerLogin,
  register,
  surveys,
  categories,
  profile,
  app,
});
