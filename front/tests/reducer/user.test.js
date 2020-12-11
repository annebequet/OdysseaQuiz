import { should } from 'chai';

import userReducer, { initialState } from 'src/reducers/headerLogin';
import {
  HANDLE_TOGGLER_CLICK,
  handleTogglerClick,
  ON_BLUR_LOGIN,
  onBlurLogin,
  CHANGE_FIELD_VALUE,
  changeFieldValue,
  SAVE_USER,
  saveUser,
  LOGOUT,
  logout,
} from 'src/actions';

should();

describe.only('Reducer user', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      userReducer.should.be.a('function');
    });
    it('should return an object when call without argument', () => {
      userReducer().should.be.an('object');
    });

    it('should return the initialState when called without argument', () => {
      // avec equal, on compare les références des objets ou tableaux (types complexes)
      // dans le 1e exemple on récupère, l'initialState qu'on a importé depuis notre reducer, donc la référence est exactement la même => OK pour le test
      // dans le 2e exemple, on crée un nouvel objet et on vient comparer sa référence avec celle de initialState => NOK pour le test
      userReducer().should.be.eql(initialState);
    });
  });

  describe('with action', () => {
    it(CHANGE_FIELD_VALUE, () => {
      let action = changeFieldValue('email', 'test');
      // {
      //   type: CHANGE_FIELD,
      //   value: 'test',
      //   name: 'email',
      // }
      userReducer({}, action).should.be.eql({ email: 'test' });

      action = changeFieldValue('password', '123');
      userReducer({}, action).should.be.eql({ password: '123' });
      userReducer(initialState, action).should.be.eql({
        ...initialState,
        password: '123',
      });
    });
    it(HANDLE_TOGGLER_CLICK, () => {
      let action = handleTogglerClick();
      // {
      //   type: HANDLE_TOGGLER_CLICK,
      //   open: !state.open
      // }

      const state = {
        email: '',
        open: false,
        username: '',
        pseudo: '',
        roles: [],
        password: '',
        isLogged: false,
        avatar: {},
        id: '',
      }
      userReducer(state, action).should.be.eql({
        email: '',
        open: true,
        username: '',
        pseudo: '',
        roles: [],
        password: '',
        isLogged: false,
        avatar: {},
        id: '',
      });
    });
    it(ON_BLUR_LOGIN, () => {
      let action = onBlurLogin();
      // {
      //   type: ON_BLUR_LOGIN,
      //   open: !state.open
      // }

      const state = {
        email: '',
        open: true,
        username: '',
        pseudo: '',
        roles: [],
        password: '',
        isLogged: false,
        avatar: {},
        id: '',
      }
      userReducer(state, action).should.be.eql({
        email: '',
        open: false,
        username: '',
        pseudo: '',
        roles: [],
        password: '',
        isLogged: false,
        avatar: {},
        id: '',
      });
    });
    it(SAVE_USER, () => {
      let action = saveUser('toto', ['ADMIN'], 'poisson', 3);
      // {
      //   type: 'SAVE_USER',
      //   pseudo: 'toto',
      //    roles: ['ADMIN'],
      //    avatar: 'poisson',
      //    id: 3,
      // }
      let state = {
        email: 'test@test.com',
        open: false,
        username: '',
        pseudo: '',
        roles: [],
        password: '123',
        isLogged: false,
        avatar: {},
        id: '',
      };
      userReducer(state, action).should.be.eql({   
        email: '',
        open: false,
        username: '',
        pseudo: 'toto',
        roles: ['ADMIN'],
        password: '', 
        isLogged: true, 
        avatar: 'poisson',
        id: 3,
      });
    });
    it(LOGOUT, () => {
      const action = logout();
      // {
      //   type: 'LOGOUT',
      // }
      const state = {
        email: '',
        password: '',
        username: '',
        open: false,
        isLogged: true,
        pseudo: 'toto',
        roles: ['ADMIN'],
        avatar: 'poisson',
        id: 3,
      };
      userReducer(state, action).should.be.eql({
        email: '',
        password: '',
        username: '',
        isLogged: false,
        open: false,
        pseudo: '',
        roles: '',
        avatar: '',
        id: 3,
      });
    });
  });
});
