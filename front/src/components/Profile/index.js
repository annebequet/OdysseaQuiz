import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Accordion, Button, Card, ProgressBar,
} from 'react-bootstrap';
import './styles.scss';

import emailImg from 'src/assets/images/email.svg';
import pseudoImg from 'src/assets/images/pseudo.svg';
import passwordImg from 'src/assets/images/password.svg';
import levelImg from 'src/assets/images/level.svg';
import avatarImg from 'src/assets/images/user.svg';
import deleteImg from 'src/assets/images/delete.svg';

import ErrorMessage from 'src/components/ErrorMessage';
import Categories from 'src/containers/Categories';
import Field from './Field';
import FieldRadio from './FieldRadio';
import FieldRadioAvatars from './FieldRadioAvatars';


/* Commentaries are for the switch environment item */

const Profile = ({
  pseudo,
  email,
  avatar,
  getUser,
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
  environment,
  scores,
  requestErrors,
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
      {Object.keys(requestErrors).length > 0 && (
        <ErrorMessage errors={requestErrors} />
      )}
      <div className="profile__edit">
        <div className="profile__wrap__left">
          <div className="profile__wrap__left__top">
            <img
              className="profile__odyssea__avatar"
              alt="odyssea__avatar"
              src={avatar.imageUrl}
            />
            <div className="personal--informations">
              <h3 className="profile__pseudo">{pseudo}</h3>
              <p className="profile__level">Mode {environment}</p>
            </div>
          </div>
          <div className="profile__wrap__right">
            <Accordion className="accordion">
              {/* FORM FOR AVATAR EDIT */}
              <Card className="accordion__card">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                     <img className="profile__icon" src={avatarImg} alt="logo avatar" />
                    <label>Changer l'avatar</label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <form className="profile__edit__form --avatars" onSubmit={handleEditAvatarSubmit}>
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
                        Valider
                      </button>
                    </form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* FORM FOR PSEUDO EDIT */}
              <Card className="accordion__card">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <img className="profile__icon" src={pseudoImg} alt="logo pseudo" />
                    <label>Changer le pseudo</label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <form className="profile__edit__form --pseudo" onSubmit={handleEditPseudoSubmit}>
                      <Field
                        name="newPseudo"
                        placeholder={pseudo}
                        onChange={changeInput}
                        value={newPseudo}
                        pattern="^(?=^.{6,12}$).*$"
                        title="Votre mot de passe doit contenir entre 6 et 12 caractères"
                      />
                      <button
                        className="profile__edit--submit"
                        type="submit"
                      >
                        Valider
                      </button>
                    </form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* FORM FOR EMAIL EDIT */}
              <Card className="accordion__card">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <img className="profile__icon" src={emailImg} alt="logo email" />
                    <label>Changer l'adresse e-mail</label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <form className="profile__edit__form --email" onSubmit={handleEditEmailSubmit}>
                      <Field
                        type="email"
                        name="newEmail"
                        placeholder={email}
                        onChange={changeInput}
                        value={newEmail}
                        title="Entrez un email valide"
                      />
                      <button
                        className="profile__edit--submit"
                        type="submit"
                      >
                        Valider
                      </button>
                    </form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* FORM FOR PASSWORD EDIT */}
              <Card className="accordion__card">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <img className="profile__icon" src={passwordImg} alt="logo password" />
                    <label>Changer le Mot de passe</label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body><form className="profile__edit__form --password" onSubmit={handleEditPasswordSubmit}>
                    <Field
                      name="newPassword"
                      placeholder="nouveau mot de passe"
                      onChange={changeInput}
                      value={newPassword}
                      type="password"
                      pattern="(?=^.{6,32}$)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$"
                      title="Votre mot de passe doit contenir au moins 6 caractères, dont 1 minuscule, 1 majuscule et 1 chiffre."
                    />
                    <button
                      className="profile__edit--submit"
                      type="submit"
                    >
                      Valider
                    </button>
                  </form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* FORM FOR ENVIRONMENT EDIT */}
              <Card className="accordion__card">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    <img className="profile__icon" src={levelImg} alt="logo level" /> 
                    <label>Changer la difficulté de jeu</label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <form className="profile__edit__form --environment" onSubmit={handleEditEnvironmentSubmit}>
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
                        Valider
                      </button>
                    </form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion__card">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    <img className="profile__icon" src={deleteImg} alt="logo delete" />
                    <label>Supprimer le compte</label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <div className="profile--delete">
                      <button
                        className="profile__button--delete"
                        type="button"
                        onClick={handleDeleteSubmit}
                      >
                        Supprimer
                      </button>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="profile__wrap__right">
        <div className= "profile__title__informations">
          <h2 className="profile__title">Scores</h2>
          <p className="second__title">Mes pourcentages de réussite par catégorie</p>
        </div>
        <ul className="categories__ul">
          {scores.map((score) => {
            if (score.environment.name === environment) {
              return (
                <li
                  key={score.category.id}
                  className="categories__item"
                >
                  <h3>{score.category.name} </h3>
                  <img
                    className="category__score__img"
                    alt="category__picture"
                    src={score.category.picture}
                  />
                  <div className="profile__progress"><ProgressBar variant="barcustom" animated now={score.score} label={`${score.score}%`} /> </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
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
  email: PropTypes.string.isRequired,
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
  environment: PropTypes.string.isRequired,
  scores: PropTypes.array.isRequired,
  requestErrors: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  avatar: '',
  newAvatar: '',
};

export default Profile;
