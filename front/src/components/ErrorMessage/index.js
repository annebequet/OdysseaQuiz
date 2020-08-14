import React from 'react';
import PropTypes from 'prop-types';
import { Normalizer } from 'src/selectors/errors';

import './styles.scss';

const ErrorMessage = ({ errors }) => (
  <div className="errorMessage">
    <p>Erreur, on reste calme, on rajuste ses brassières, et on réessaie. </p>
    { Normalizer(errors) }
  </div>
);

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ErrorMessage;
