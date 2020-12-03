import React from 'react';
import PropTypes from 'prop-types';
import { Normalizer } from 'src/selectors/errors';

import './styles.scss';

const ErrorMessage = ({ errors }) => (
  <div className="error--message__container">
    <p className="error--message__text">Erreur : on rajuste ses brassières, et on réessaie. </p>
    { Normalizer(errors) }
  </div>
);

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ErrorMessage;
