import logMiddleware from './logMiddleware';
import login from './login';
import register from './register';
import surveys from './surveys';
import categories from './categories';
import profile from './profile';

export default [
  surveys,
  logMiddleware,
  login,
  register,
  categories,
  profile,
];
