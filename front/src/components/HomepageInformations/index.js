/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import soleil from 'src/assets/images/soleil.svg';
import poisson from 'src/assets/images/poisson.svg';
import baleine from 'src/assets/images/baleine.svg';
import masque from 'src/assets/images/mask.svg';
import crabe from 'src/assets/images/crabe.svg';
import ordinateur from 'src/assets/images/computer.svg';
import disco from 'src/assets/images/disco.svg';

import './styles.scss';

const HomepageInformations = () => (
  <div className="presentation">
    <div className="round_circle_1" />
    <div className="round_circle_2" />

    <div className="presentation__box">
      <div className="presentation__box--front">
        <img className="presentation__medusa--picture" alt="méduse" src="https://cdn.pixabay.com/photo/2015/05/15/14/40/jellyfish-768624_1280.jpg" />
      </div>

      <div className="presentation__text">
        <h1 className="presentation__title">Odyssea Quiz </h1>
        <p className="presentation__description__1">
          Les océans et les mers sont le berceau de la vie. Ils recouvrent 70% de notre planète et représentent 97% de l’eau sur Terre. Ils abreuvent les hommes, connectent les pays, fournissent des ressources en nourriture abondante, et génèrent de l'oxygène. Ils maintiennent aussi notre climat en absorbant près d’un quart du CO2 produit. La variété d'espèces et de paysages offerts est étourdissante, et ils comptent encore bien des territoires inexplorés.
          Les océans et les mers nous sont indispensables et tout le monde s'accorde pour dire qu'il est urgent de les protéger.
          Nous avons donc créé OdysseaQuiz, parce que le premier pas vers la protection, c'est la connaissance.
        </p>
        <h2 className="presentation__subtitle">Pourquoi apprendre avec nous ?</h2>
        <p className="presentation__description__2">
          Parce qu'on te comprend. Apprendre quelque chose de nouveau ça peut parfois être ennuyeux et laborieux. C'est pourquoi on a une approche d'apprentissage basée sur des quiz ludiques ! Adaptés aux petits et aux grands, nous proposons des quiz documentés, qui vont du domaine scientifique à la mythologie marine, en passant par les pokemons marins pour les plus jeunes.
        </p>
      </div>

    </div>

    <div className="bulletPoints">
      <div className="bulletPoint">
        <img className="bulletPoint__icon" src={ordinateur} alt="logo ordinateur" />
        <div>
          <h3>Nos méthodes</h3>
          <p>Parlons peu, parlons pédagogie : notre application vous reproposera en priorité les questions qui vous posent problème, et plus vous réussirez une question, moins elle apparaîtra, jusqu'à ce que l'application considère que l'information est intégrée. Parce que c'est comme ça que le cerveau apprend. Le mot savant c'est 'système de répétition espacée', on ne se moque pas de vous !</p>
        </div>
      </div>
      <div className="bulletPoint">
        <img className="bulletPoint__icon" src={soleil} alt="logo soleil" />
        <div>
          <h3>C'est gratuit !</h3>
          <p>Pour jouer, c'est simple comme bonjour, il suffit de créer un compte. Pas de frais, c'est promis.</p>
        </div>
      </div>
      <div className="bulletPoint">
        <img className="bulletPoint__icon" src={poisson} alt="logo poisson" />
        <div>
          <h3>Pour toute la famille</h3>
          <p>Adaptez la difficulté de vos questions en choisissant le mode adulte ou le mode enfant.</p>
        </div>
      </div>
      <div className="bulletPoint">
        <img className="bulletPoint__icon" src={baleine} alt="logo baleine" />
        <div>
          <h3>Plutôt baleine ou crustacé ?</h3>
          <p>Nos quiz sont classés par catégories afin qui vous puissiez choisir la thématique qui fait battre votre coeur.</p>
        </div>
      </div>
      <div className="bulletPoint">
        <img className="bulletPoint__icon" src={masque} alt="logo masque" />
        <div>
          <h3>Un suivi individualisé</h3>
          <p>Suivez vos progrès en consultant votre pourcentage de réussite par catégorie</p>
        </div>
      </div>
      <div className="bulletPoint">
        <img className="bulletPoint__icon" src={crabe} alt="logo crabe" />
        <div>
          <h3>La fabrique des champions</h3>
          <p>Jetez un coup d'oeil au podium des meilleurs joueurs en espérant gravir un jour ses marches, on croit en vous !</p>
        </div>
      </div>
      <div className="bulletPoint">
        <img className="bulletPoint__icon" src={disco} alt="logo boule disco" />
        <div>
          <h3>On joue quand ?</h3>
          <p>Trève de paroles, il est temps de jouer ! Testez-vous avec les deux quiz ci-dessous</p>
        </div>
      </div>
    </div>
  </div>
);

export default HomepageInformations;
