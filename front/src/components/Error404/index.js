import React from 'react';
import PropTypes from 'prop-types';

import Shark from 'src/assets/images/shark404.jpg';
import './styles.scss';

const Error404 = () => (
  <div className="error404">
    <h2 className="error404__title">Error404...</h2>
    <p>Aucune page correspondante à votre recherche! Retournez dans l'eau!</p>
    <img
      alt="sad-shark"
      className="error404__img"
      src={Shark}
    />
  </div>
);

export default Error404;
