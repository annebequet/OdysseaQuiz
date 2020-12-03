import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getSlugFromTitle, getScoreInformations } from 'src/selectors/categories';

import './styles.scss';

{ /* inspiration : https://codepen.io/william-goldsworthy/pen/JzVajj */ }
const Categories = ({
  categories,
}) => (
  <>
    <div className="category__title--container">
      <h2 className="category__title">Catégories</h2>
      <p>Choisissez votre catégorie de quiz</p>
    </div>

    <div className="category__container">
      {Object.keys(categories).map((categoryId) => {
        // We have access to the name of the category and the picture url
        const { name, picture } = categories[categoryId].category;
        // If the category also has scores of different players
        const scoreInformations = getScoreInformations(categories[categoryId]);

        return (
          <Link
            to={`/categories/${getSlugFromTitle(name)}`}
            className="category_link"
            key={name}
          >
            <div className="category__card">
              <h3 className="category__name">{name}</h3>
              <div className="category__bar">
                <div className="category__emptybar" />
                <div className="category__filledbar" />
              </div>

              <div className="category__img--container">
                <img
                  className="category__img"
                  alt="turtle"
                  src={picture}
                />
              </div>
              <div className="category__rank">
                <h3>Podium</h3>
                <p>1. Audrey</p>
                <p>2. Patricia</p>
                <p>3. Evelyn</p>
                <p>7. Moi</p>
              </div>
              {/* if there are scores 
              {!score === undefined && (
                <p>{scoreInformations.score}</p>
              )} */}
            </div>
          </Link>
        );
      })}
    </div>
  </>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),

  ).isRequired,
};

export default Categories;
