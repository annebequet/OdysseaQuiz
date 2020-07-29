import logMiddleware from './logMiddleware';
import login from './login';
import surveys from './surveys';
import register from './register';

export default [
  surveys,
  logMiddleware,
  login,
  register,
];
