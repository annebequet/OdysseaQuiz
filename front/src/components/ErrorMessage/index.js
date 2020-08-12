import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ErrorMessage = ({ errors }) => {
  console.log('les erreurs dans le message : ', errors);
  return (
    <div className="errorMessage">
      <p>Erreur d'enregistrement, on reste calme, on rajuste ses brassières, et on réessaie. Quelques conseils : </p>
    </div>
  );
};

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ErrorMessage;
