import { should } from 'chai';

import userReducer, { initialState } from 'src/reducers/headerLogin';
import {
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
        pseudo: '',
        roles: [],
        isLogged: false,
        avatar: {},
        id: '',
      };
      userReducer(state, action).should.be.eql({   
        pseudo: 'toto',
        roles: ['ADMIN'],
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
        isLogged: true,
        pseudo: 'toto',
        roles: ['ADMIN'],
        avatar: 'poisson',
        id: 3,
      };
      userReducer(state, action).should.be.eql({
        isLogged: false,
        pseudo: '',
        roles: '',
        avatar: '',
        id: 3,
      });
    });
  });
});
