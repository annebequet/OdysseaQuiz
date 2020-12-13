import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginSchema from 'src/selectors/validation';

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

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    login(values);
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

          <Formik
            {...{ initialValues, onSubmit }}
            validateOnChange
            validationSchema={LoginSchema}
            className="login__form"
          >
            {() => (
              <Form
                className="login__form"
              >
                <div>
                  <label htmlFor="login--email" className="login__label">
                    Email
                  </label>
                  <Field
                    placeholder="odyssea@quiz.com"
                    id="login--email"
                    className="login__field"
                    name="email"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="login__error"
                  />
                </div>
                <div>
                  <label htmlFor="login--password" className="login__label">
                    Mot de passe
                  </label>
                  <Field
                    type="password"
                    id="login--password"
                    className="login__field"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="login__error"
                  />
                </div>
                <button type="submit" className="login__submit">
                  Connexion
                </button>
              </Form>
            )}
          </Formik>

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
