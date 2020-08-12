import React from 'react';
import PropTypes from 'prop-types';
import { Normalizer } from 'src/selectors/errors';

import './styles.scss';

const ErrorMessage = ({ errors }) => (
  <div className="errorMessage">
    <p>Erreur d'enregistrement, on reste calme, on rajuste ses brassières, et on réessaie. Quelques conseils : </p>
    { Normalizer(errors) }
  </div>
);

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ErrorMessage;
