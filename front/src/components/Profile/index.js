import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Accordion, Button, Card, ProgressBar } from 'react-bootstrap';
import './styles.scss';

import TurtleImage from 'src/assets/images/turtle.jpg';
import ErrorMessage from 'src/components/ErrorMessage';
import Field from './Field';
import FieldRadio from './FieldRadio';
import FieldRadioAvatars from './FieldRadioAvatars';
import { getScores } from '../../actions/profile';

/* Commentaries are for the switch environment item */

const Profile = ({
  pseudo,
  email,
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
          <img
            className="profile__odyssea__avatar"
            alt="odyssea__avatar"
            src={avatar.imageUrl}
          />
          <h3 className="profile__pseudo">Pseudo : {pseudo}</h3>
        </div>
        <div className="profile__wrap__right">
          <Accordion className="accordion">
            {/* FORM FOR AVATAR EDIT */}
            <Card className="accordion__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <label>Changez votre avatar!</label>
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
                      Envoyez vos modifications
                    </button>
                  </form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* FORM FOR PSEUDO EDIT */}
            <Card className="accordion__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <label>Changez votre pseudo</label>
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
                    />
                    <button
                      className="profile__edit--submit"
                      type="submit"
                    >
                      Envoyez vos modifications
                    </button>
                  </form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* FORM FOR EMAIL EDIT */}
            <Card className="accordion__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <label>Changez votre adresse e-mail</label>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <form className="profile__edit__form --email" onSubmit={handleEditEmailSubmit}>
                    <Field
                      name="newEmail"
                      placeholder={email}
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* FORM FOR PASSWORD EDIT */}
            <Card className="accordion__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  <label>Changez votre Mot de passe</label>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body><form className="profile__edit__form --password" onSubmit={handleEditPasswordSubmit}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* FORM FOR ENVIRONMENT EDIT */}
            <Card className="accordion__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  <label>Changez votre difficulté de jeu!</label>
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
                      Envoyez vos modifications
                    </button>
                  </form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  <label style={{ color: 'red' }}>Supprimer mon compte</label>
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
                      Supprimer mon compte
                    </button>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </div>
      </div>
      <div className="profile__score">
        <h2 className="profile__title">Consultez vos scores par catégories!</h2>
        <ul className="categories__ul">
          {scores.map((score) => (
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
              <div><ProgressBar animated now={score.score} label={`${score.score}%`} /> </div>
            </li>
          ))}
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
  scores: PropTypes.array.isRequired,
  requestErrors: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  avatar: '',
  newAvatar: '',
};

export default Profile;
