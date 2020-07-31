import React from 'react';
import PropTypes from 'prop-types';
import TurtleImage from 'src/assets/images/turtle.jpg';

import './styles.scss';

const Categories = ({ categories }) => (
  <div className="page__categories">
    <ul className="categories__ul">
      {categories.map(({ name }) => (
        <li className="categories__item">
          <h3>{name} </h3>
          <img
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
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Categories;
