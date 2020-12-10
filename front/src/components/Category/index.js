import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quiz from 'src/containers/Quiz';

import './styles.scss';

const Category = ({
  surveyLoading,
  category,
  getSurveys,
  isLogged,
  error,
}) => {
  useEffect(() => {
    getSurveys(category);
  }, []);

  return (
    <div className="category__survey">
      {!surveyLoading && isLogged && (
      <Quiz
        isExempleQuiz={false}
      />
      )}
      {error && !isLogged && (
        <div className="errorMessage category__error__log">Il faut être connecté pour jouer. Sautez dans l'eau !</div>
      )}
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  getSurveys: PropTypes.func.isRequired,
  surveyLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

Category.defaultProps = {
  category: {},
};

export default Category;
