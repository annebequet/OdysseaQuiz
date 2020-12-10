import React from 'react';
import PropTypes from 'prop-types';
import { Normalizer } from 'src/selectors/errors';

import './styles.scss';

const ErrorBoundary = ({ requestErrors, clearErrors }) => (
  <div className="error--message__container">
    <div className="error--informations">
      <p>ERREUR <br /> On reste calme, on rajuste ses brassières, et on réessaie. </p>
      { Normalizer(requestErrors) }
      <button
        className="error--button"
        onClick={clearErrors}
        type="button"
      >
        Fermer
      </button>
    </div>
  </div>
);

ErrorBoundary.propTypes = {
  requestErrors: PropTypes.object,
  clearErrors: PropTypes.func.isRequired,
};

ErrorBoundary.defaultProps = {
  requestErrors: { Erreur: ['revenez bientôt'] },
};

export default ErrorBoundary;
