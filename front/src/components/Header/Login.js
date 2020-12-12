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
    console.log(values);
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
          >
            {() => (
              <Form
                className="baseForm"
              >
                <label htmlFor="login--email">
                  Email
                </label>
                <Field
                  placeholder="odyssea@quiz.com"
                  id="login--email"
                  className="email formField"
                  name="email"
                />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="login--password">
                  Mot de passe
                </label>
                <Field
                  type="password"
                  id="login--password"
                  className="password formField"
                  name="password"
                />
                <ErrorMessage name="password" component="div" />
                <button type="submit">
                  Submit
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
