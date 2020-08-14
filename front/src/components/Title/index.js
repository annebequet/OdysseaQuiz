import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Title = ({ location }) => {
  const titleClassName = location === '/' ? 'title__frontPage' : 'title__otherPages';
  const textClassName = location === '/' ? 'text__frontPage' : 'text__otherPages';
  const introductionTextClassName = location === '/' ? 'introduction__frontPage' : 'introduction__otherPages';

  return (
    <div className="introductionInformations">
      <div className="title">
        <h1 className={titleClassName}>ODYSSEA QUIZ</h1>
      </div>
      <div className={`introductionText ${introductionTextClassName}`}>
        <p className={`textTitle ${textClassName}`}>Bienvenue sur Odyssea Quiz !<br /> <br />

          L’environnement et sa dégradation sont au cœur des débats d’aujourd’hui, 
          tout le monde s’accorde pour dire qu’il est urgent de les protéger.  
          Nous avons pour vocation de sensibiliser et éduquer les plus petits comme les plus grands 
          sur les fonds marins de façon ludique et amusante : 
          à l’aide de quiz ! 
          Vous pouvez entrer en compétition avec vos amis mais aussi en famille, 
          choisissez votre environnement de jeu, inscrivez-vous et c’est parti !
        </p>
      </div>
    </div>
  );
};

Title.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Title;
