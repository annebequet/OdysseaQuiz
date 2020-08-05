import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TurtleImage from 'src/assets/images/turtle.jpg';

import { getSlugFromTitle } from 'src/selectors/categories';

import './styles.scss';

const Categories = ({ categories }) => (
  <div className="page__categories">
    <ul className="categories__ul">
      {categories.map(({ name }) => (
        <Link
          to={`/categories/${getSlugFromTitle(name)}`}
          className="category_link"
          key={name}
        >
          <li
            className="categories__item"
          >
            <h3>{name} </h3>
            <img
              className="category__img"
              alt="turtle"
              src={TurtleImage}
            />
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Categories;
