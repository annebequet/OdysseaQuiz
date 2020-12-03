import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import sailor from 'src/assets/images/sailor.svg';
import boat from 'src/assets/images/boat.svg';

import './styles.scss';

const Error404 = () => {
  const [showLoading, setShowLoading] = useState(false);
  useEffect(
    () => {
      const timer1 = setTimeout(() => setShowLoading(true), 2000);
      return () => {
        clearTimeout(timer1);
      };
    }, [],
  );
  {/* inspiration : https://codepen.io/hellochad/pen/weMpgE */}
  return showLoading && (
    <div className="permission_denied">
      <div className="denied__wrapper">
        <h1>404</h1>
        <h3>PERDU EN <span>HAUTE MER</span> route ? Hmm, Il semble que cette page n'existe pas.</h3>
        <img className="sailor__icon" src={sailor} alt="logo marin" />
        <img className="boat__icon" src={boat} alt="logo bâteau" />
        <Link className="denied__link" exact to="/"><span>Page d'accueil</span></Link>
      </div>
    </div>
  );
};

export default Error404;
