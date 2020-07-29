import logMiddleware from './logMiddleware';
import login from './login';
import register from './register';

export default [
  logMiddleware,
  login,
  register,
];
