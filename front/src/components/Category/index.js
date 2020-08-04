import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AdultSurvey from 'src/containers/AdultSurvey';

import './styles.scss';

const Category = ({
  surveyLoading,
  category,
  getSurveys,
}) => {
  useEffect(() => {
    getSurveys(category.id);
  }, []);

  console.log('ma page de catégorie : ', category);
  return (
    <div className="category">
      {!surveyLoading && (
        <>
          <AdultSurvey category={category.name} />
        </>
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
