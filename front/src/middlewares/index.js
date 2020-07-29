import logMiddleware from './logMiddleware';
import login from './login';
import register from './register';
import surveys from './surveys';

export default [
  surveys,
  logMiddleware,
  login,
  register,
];
