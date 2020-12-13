import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import sailor from 'src/assets/images/sailor.svg';
import boat from 'src/assets/images/boat.svg';

import '../Error404/styles.scss';

const ErrorPage = ({ error, resetErrorBoundary }) => {
  {/* inspiration : https://codepen.io/hellochad/pen/weMpgE */}
  return showLoading && (
    <div className="permission_denied">
      <div className="denied__wrapper">
        <h1>OUPS, {error.message}</h1>
        <h3>PERDU EN <span>HAUTE MER</span> route ? Hmm, il semble qu'un problème soit survenu</h3>
        <img className="sailor__icon" src={sailor} alt="logo marin" />
        <img className="boat__icon" src={boat} alt="logo bâteau" />
        <Link 
          className="denied__link"
          onClick={resetErrorBoundary}
          to="/"
        >
          <span>Page d'accueil</span>
        </Link>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorPage;
