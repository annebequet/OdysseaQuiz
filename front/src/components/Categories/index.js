import React from 'react';
import PropTypes from 'prop-types';
import TurtleImage from 'src/assets/images/turtle.jpg';

import './styles.scss';

const Categories = ({ categories }) => (
  <div className="page__categories">
    <ul className="categories__ul">
      {categories.map(({ name }) => (
        <li
          key={name}
          className="categories__item"
        >
          <h3>{name} </h3>
          <img
            alt="turtle"
            src={TurtleImage}
          />
        </li>
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
