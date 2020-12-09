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

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    login();
  };

  return (
    <div className="login__btn">
      <Button variant="btn" onClick={handleShow}>
        Connexion
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
              pattern="^[^@]+@[^@]+\.[^@]+$"
              title="Entrez un email valide"
            />
            <Field
              label="Mot de passe"
              id="password"
              type="password"
              pattern="(?=^.{6,32}$).*$"
              title="Votre mot de passe doit contenir au moins 6 caractères"
            />
            <Button
              className="login__submit"
              type="submit"
              variant="primary"
            >
              Connexion
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
