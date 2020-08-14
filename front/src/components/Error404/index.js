import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Shark from 'src/assets/images/shark404.jpg';
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
  return showLoading && (
    <div className="error404">
      <h2 className="error404__title">Erreur 404...</h2>
      <p>Aucune page correspondante à votre recherche ! Retournez dans l'eau en cliquant <Link exact to="/">ici</Link> !</p>
      <img
        alt="sad-shark"
        className="error404__img"
        src={Shark}
      />
    </div>
  );
};

export default Error404;
