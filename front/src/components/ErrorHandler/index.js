import React from 'react';
import PropTypes from 'prop-types';
import { Normalizer } from 'src/selectors/errors';

import './styles.scss';

const ErrorHandler = ({ requestErrors, clearErrors }) => (
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

ErrorHandler.propTypes = {
  requestErrors: PropTypes.object,
  clearErrors: PropTypes.func.isRequired,
};

ErrorHandler.defaultProps = {
  requestErrors: { Erreur: ['revenez bientôt'] },
};

export default ErrorHandler;
