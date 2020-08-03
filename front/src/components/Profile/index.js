import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import TurtleImage from 'src/assets/images/turtle.jpg';

const Profile = ({
  pseudo,
  avatar,
  categories,
}) => (
  <div>
    <h3>Pseudo : {pseudo}</h3>
    <img src={avatar}></img>
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
    <p>Supprimer mon compte</p>
  </div>
);

Profile.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  avatar: PropTypes.string,
  pseudo: PropTypes.string.isRequired,
};

Profile.defaultProps = {
  avatar: '',
};

export default Profile;
