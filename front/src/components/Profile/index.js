import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import TurtleImage from 'src/assets/images/turtle.jpg';
import Field from './Field';
import FieldRadio from './FieldRadio';
import FieldRadioAvatars from './FieldRadioAvatars';
import { handleEditAvatar } from '../../actions/profile';

/* Commentaries are for the switch environment item */

const Profile = ({
  pseudo,
  avatar,
  getUser,
  categories,
  handleEditPseudo,
  handleEditEmail,
  handleEditPassword,
  handleEditEnvironment,
  changeInput,
  newPseudo,
  newEmail,
  newPassword,
  newEnvironment,
  newAvatar,
  handleDelete,
  handleEditAvatar,
  getAvatars,
  avatars,
  // selectedOption,
}) => {
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getAvatars();
  }, []);

  const handleEditAvatarSubmit = (evt) => {
    evt.preventDefault();
    handleEditAvatar();
  };

  const handleEditPseudoSubmit = (evt) => {
    evt.preventDefault();
    handleEditPseudo();
  };
  const handleEditEmailSubmit = (evt) => {
    evt.preventDefault();
    handleEditEmail();
  };
  const handleEditPasswordSubmit = (evt) => {
    evt.preventDefault();
    handleEditPassword();
  };
  const handleEditEnvironmentSubmit = (evt) => {
    evt.preventDefault();
    handleEditEnvironment();
  };
  const handleDeleteSubmit = (evt) => {
    evt.preventDefault();
    handleDelete();
  };

  return (
    <div className="profile">
      <div className="profile__edit">
        <div className="profile__wrap__left">
          <img
            className="profile__odyssea__avatar"
            alt="odyssea__avatar"
            src={avatar.imageUrl}
          />
          <h3 className="profile__pseudo">Pseudo : {pseudo}</h3>
        </div>
        <div className="profile__wrap__right">
          {/* FORM FOR AVATAR EDIT */}
          <form className="profile__edit__form --environment" onSubmit={handleEditAvatarSubmit}>
            <div>
              <label>Changez votre difficulté de jeu!</label>
            </div>
          <FieldRadioAvatars
            name="newAvatar"
            id="newAvatar"
            onChange={changeInput}
            value={newAvatar}
            avatars={avatars}
          />
          <button
              className="profile__edit--submit"
              type="submit"
            >
              Envoyez vos modifications
            </button>
          </form>
          {/* FORM FOR PSEUDO EDIT */}
          <form className="profile__edit__form --pseudo" onSubmit={handleEditPseudoSubmit}>
            <div>
              <label>Changez votre pseudo</label>
            </div>
            <Field
              name="newPseudo"
              placeholder="nouveau pseudo"
              onChange={changeInput}
              value={newPseudo}
            />
            <button
              className="profile__edit--submit"
              type="submit"
            >
              Envoyez vos modifications
            </button>
          </form>
          {/* FORM FOR EMAIL EDIT */}
          <form className="profile__edit__form --email" onSubmit={handleEditEmailSubmit}>
            <div>
              <label>Changez votre adresse e-mail</label>
            </div>
            <Field
              name="newEmail"
              placeholder="nouvel e-mail"
              onChange={changeInput}
              value={newEmail}
            />
            <button
              className="profile__edit--submit"
              type="submit"
            >
              Envoyez vos modifications
            </button>
          </form>
          {/* FORM FOR PASSWORD EDIT */}
          <form className="profile__edit__form --password" onSubmit={handleEditPasswordSubmit}>
            <div>
              <label>Changez votre Mot de passe</label>
            </div>
            <Field
              name="newPassword"
              placeholder="nouveau mot de passe"
              onChange={changeInput}
              value={newPassword}
            />
            <button
              className="profile__edit--submit"
              type="submit"
            >
              Envoyez vos modifications
            </button>
          </form>
          {/* FORM FOR ENVIRONMENT EDIT */}
          <form className="profile__edit__form --environment" onSubmit={handleEditEnvironmentSubmit}>
            <div>
              <label>Changez votre difficulté de jeu!</label>
            </div>
            <FieldRadio
              name="newEnvironment"
              id="environment"
              onChange={changeInput}
              value={newEnvironment}
            />
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
          onClick={handleDeleteSubmit}
        >
          Supprimer mon compte
        </button>
      </div>
      {/* <ul className="categories__ul">
        {categories.map(({ name }) => (
          <li
            key={name}
            className="categories__item"
          >
            <h3>{name} </h3>
            <img
              className="category__img"
              alt="turtle"
              src={TurtleImage}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

Profile.propTypes = {
  getUser: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  avatar: PropTypes.object,
  pseudo: PropTypes.string.isRequired,
  handleEditPseudo: PropTypes.func.isRequired,
  handleEditEmail: PropTypes.func.isRequired,
  handleEditPassword: PropTypes.func.isRequired,
  handleEditEnvironment: PropTypes.func.isRequired,
  handleEditAvatar: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  newPseudo: PropTypes.string.isRequired,
  newEmail: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newEnvironment: PropTypes.string.isRequired,
  newAvatar: PropTypes.string,
  getAvatars: PropTypes.func.isRequired,
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

Profile.defaultProps = {
  avatar: '',
  newAvatar: '',
};

export default Profile;
