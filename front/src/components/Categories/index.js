import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getSlugFromTitle } from 'src/selectors/categories';

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
        const { name, picture } = categories[categoryId].category;

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
            </div>
          </Link>
        );
      })}
    </div>
  </>
);

Categories.propTypes = {
  categories: PropTypes.objectOf(
    PropTypes.shape({
      category: PropTypes.objectOf(
        PropTypes.shape({
          name: PropTypes.string,
          picture: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

export default Categories;
