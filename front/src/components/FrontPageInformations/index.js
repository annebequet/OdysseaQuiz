import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const FrontPageInformations = () => (  
  <div className="frontPageInformations">
    <div className="frontPageInformations__container">
      <div className="boxContent box1">
        <p className="cardTitle">Découvrir la vie sous-marine</p>
      </div>
      <div className="boxContent box2">
        <p className="cardTitle">Se divertir</p>
      </div>
      <div className="boxContent box3">
        <p className="cardTitle">Pour les petits et les grands</p>
      </div>
    </div>
  </div>
);

export default FrontPageInformations;
