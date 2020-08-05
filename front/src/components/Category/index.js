import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quiz from 'src/containers/Quiz';

import './styles.scss';

const Category = ({
  surveyLoading,
  category,
  getSurveys,
}) => {
  useEffect(() => {
    getSurveys(category);
  }, []);

  return (
    <div className="category">
      {!surveyLoading && (
      <Quiz />
      )}
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  getSurveys: PropTypes.func.isRequired,
  surveyLoading: PropTypes.bool.isRequired,
};

export default Category;
