import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Contact = () => (
  <div className="contact">

    <h1 className="contact__title">Nous contacter</h1>
    <p className="contact__content">
      <strong>Par courrier : </strong>
      <br />Appt 20K ,
      <br />3 square Pierre et Marie Corail
      <br />Atlantis,
      <br />Sous les mers

      <strong> Par email : </strong>  tortue@plouf.io
    </p>

  </div>
);

export default Contact;
