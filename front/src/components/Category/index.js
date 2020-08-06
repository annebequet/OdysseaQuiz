import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quiz from 'src/containers/Quiz';

import './styles.scss';

const Category = ({
  surveyLoading,
  category,
  getSurveys,
  isLogged,
}) => {
  useEffect(() => {
    getSurveys(category);
  }, []);

  return (
    <div className="category">
      {!surveyLoading && isLogged && (
      <Quiz />
      )}
      {!isLogged && (
        <div>Il faut être connecté pour s'inscrire ! Sautez dans l'eau !</div>
      )}
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  getSurveys: PropTypes.func.isRequired,
  surveyLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Category.defaultProps = {
  category: {},
};

export default Category;
