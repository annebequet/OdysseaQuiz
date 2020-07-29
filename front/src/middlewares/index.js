import logMiddleware from './logMiddleware';
import login from './login';
import surveys from './surveys';

export default [
  surveys,
  logMiddleware,
  login,
];
