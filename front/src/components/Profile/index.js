import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import TurtleImage from 'src/assets/images/turtle.jpg';

/* Commentaries are for the switch environment item */

const Profile = ({
  pseudo,
  avatar,
  categories,
  // selectedOption,
}) => (
  /* const handleOptionChange = (evt) => {
    selectedOption(evt.target.value);
  }; */
  <div className="profile">
    <div className="profile__edit">
      <div className="profile__wrap__left">
        <img
          className="profile__odyssea__avatar"
          alt="odyssea__avatar"
          src={avatar}
        />
        <h3 className="profile__pseudo">Pseudo : {pseudo}</h3>
      </div>
      <div className="profile__wrap__right">
        <form className="profile__edit__form">
          <div>
            <label>Changez votre pseudo</label>
          </div>
          <div>
            <input name="newPseudo" placeholder="Pseudo" />
          </div>
          <div>
            <label>Changez votre adresse e-mail</label>
          </div>
          <div>
            <input name="newEmail" placeholder="E-mail" />
          </div>
          <div>
            <label>Changez votre Mot de passe</label>
          </div>
          <div>
            <input type="password" name="newPassword" placeholder="Nouveau mot de passe" />
          </div>

          {/* <label>Changez vos types de quiz</label>

             <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === '1'}
                  onChange={handleOptionChange}
                />
                Enfant
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === '2'}
                  onChange={handleOptionChange}
                />
                Adulte
              </label>
            </div> */}

          <button
            className="profile__edit--submit"
            type="submit"
          >
            Envoyez vos modifications
          </button>
        </form>
      </div>
    </div>

    <div className="profile--delete">
      <button
        className="profile__button--delete"
        type="button"
      >
        Supprimer mon compte
      </button>
    </div>
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
Profile.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  avatar: PropTypes.string,
  pseudo: PropTypes.string.isRequired,
  // selectedOption: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  avatar: '',
};

export default Profile;
