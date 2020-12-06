/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getSlugFromTitle } from 'src/selectors/categories';

import Podium from 'src/components/Podium';

import './styles.scss';

{ /* inspiration : https://codepen.io/william-goldsworthy/pen/JzVajj */ }
const Categories = ({
  categories,
  isLogged,
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
        // We access the scores associated to each category to display a podium.
        const { scores } = categories[categoryId];

        return (
          <Link
            to={`/categories/${getSlugFromTitle(name)}`}
            className="category_link"
            key={name}
          >
            {/* If the podium is displayed, the card needs to be bigger */}
            <div className={scores !== undefined ? 'category__card category__card__rank' : 'category__card'}>
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

              {/* The scores will only be displayed if the user is logged in.
                And there might not be scores associated to each category so we should check if the scores are not undefined */}
              {isLogged && scores !== undefined && (
              <Podium scores={scores} />
              )}

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
  isLogged: PropTypes.bool.isRequired,
};

export default Categories;
