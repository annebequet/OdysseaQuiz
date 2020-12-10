import React from 'react';
import PropTypes from 'prop-types';

import mail from 'src/assets/images/mail.svg';

import './styles.scss';

const Contact = () => (
  <div className="contact__page">
    <h2 className="contact__title">Nous contacter</h2>

    <div className="contact__container">
      <img className="contact__icon" src={mail} alt="courrier" />
      <div className="contact__informations">
        <h3 className="contact__medium">Par courrier</h3>
        <p>
          Appt 20K ,
          <br />3 square Pierre et Marie Corail
          <br />Atlantis,
          <br />Sous les mers
        </p>
        <h3 className="contact__medium"> Par email</h3>
        <p> tortue@plouf.io</p>
      </div>
    </div>
  </div>
);

export default Contact;
