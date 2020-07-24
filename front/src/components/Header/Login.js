import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

const Login = () => {
  Modal.setAppElement('#root');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="header__nav__loginForm">
      <button
        type="button"
        onClick={() => setModalIsOpen(true)}
      >
        Se Connecter
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
  <div id="login" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            onClick={() => setModalIsOpen(false)}
          >
            X
          </button>
          <h4>Se Connecter</h4>
          <form>
            <input type="text" name="username" className="username form-control" placeholder="Username"/>
            <input type="password" name="password" className="password form-control" placeholder="password"/>
            <input className="btn login" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  </div>
      </Modal>
    </div>
  );
};

export default Login;
