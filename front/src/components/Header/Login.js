import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from 'src/components/ErrorMessage';

import './styles.scss';

const Login = ({
  login,
  requestErrors,
  clearErrors,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    clearErrors();
  };

  const handleShow = () => {
    setShow(true);
    clearErrors();
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    login();
  };

  return (
    <div>
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
              Connexion
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {Object.keys(requestErrors).length > 0 && (
          <ErrorMessage className="login__errorMessage" errors={requestErrors} />
          )}
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
  clearErrors: PropTypes.func.isRequired,
  requestErrors: PropTypes.object.isRequired,
};
export default Login;
