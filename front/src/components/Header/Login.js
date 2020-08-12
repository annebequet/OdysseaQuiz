import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

const Login = ({
  login,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    login();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Se Connecter
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Entrez vos identifiants!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="login__form"
            onSubmit={handleOnSubmit}
          >
            <Field
              label="Adresse Email"
              id="username"
              type="username"
            />
            <Field
              label="Mot de passe"
              id="password"
              type="password"
            />
            <Button
              className="login__submit"
              type="submit"
              variant="primary"
            >
              Se Connecter
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
export default Login;
