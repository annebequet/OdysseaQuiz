import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Contact = () => (
  <div className="contact">

    <h2 className="contact__title">Nous contacter</h2>
    <br />
    <p className="contact__content">
      <h2 className="contact__title">Par courrier : </h2>
      <br />Appt 20K ,
      <br />3 square Pierre et Marie Corail
      <br />Atlantis,
      <br />Sous les mers

      <h2 className="contact__title"> Par email : </h2>  tortue@plouf.io
    </p>

  </div>
);

export default Contact;
