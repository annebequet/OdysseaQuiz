import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Faq = () => (
  <div>

    <h2> Comment jouer à un quiz ? </h2>

    <p> Il suffit de cliquer sur une catégorie et une série de 10 questions vous sera posée !
      Respectez le temps imparti sans quoi les questions qui n’auront pas été posées seront comptées comme fausses.
    </p>

    <h2> Comment sont calculées les notes ? </h2>

    <p> Elles reflètent simplement la moyenne de toutes les notes que vous avez obtenus jusqu’à présent dans un thème donné. Pour l’améliorer, n’hésitez pas à faire et refaire les quiz ! C’est quizant qu’on devient quizeron. </p>

    <h2> Je veux proposer une question !</h2>

    <p> Il suffit pour cela de <a href="#">nous contacter</a> pour nous les envoyer. </p>

    <h2> Je souhaite acheter un hippocampe/un poisson etc.</h2>

    <p> Nous ne sommes pas une boutique en ligne. Et envoyer un animal par la poste ce n’est vraiment pas très gentil. </p>

    <h2> Puis-je changer mes informations ?</h2>

    <p> Bien sûr ! Vous pouvez éditer votre email, votre mot de passe et même votre pseudo ! Il suffit d’aller sur <a href="#">cette page</a>.  </p>

    <h2> Je veux supprimer mon compte. </h2>

    <p> Nous sommes désolés de vous voir partir ! Si vous souhaitez proposer des améliorations il est possible de <a href="#">nous contacter</a> par mail. Si vous êtes sûr de vouloir prendre cette décision radicale et décevante, rendez vous sur <a href="#">votre profil</a>. Votre adresse email ne sera pas conservée, ni vos scores, vous devrez recommencer à zéro. </p>

    <h2> Je veux un autre avatar que ceux proposés. </h2>

    <p> Mince alors !
      Rien ne vous empêche de nous proposer un nouvel avatar si celui ci respecte la charte graphique du site, ceci dit rien n’est garanti. Si vous voulez mettre une photo de votre plus belle paire de chaussures, désolé, ça ne sera pas possible.
    </p>

    <h2> La recette de la mouclade s’il vous plaît ? </h2>

    <ul>
      <li>Nettoyer les moules : enlever les fils qui les relient entre elles, puis les laver successivement dans 2 bains d'eau froide salée. Les réserver ensuite au frais.</li>
      <li>Laver et effeuiller le persil, puis le ciseler finement.</li>
      <li>Éplucher et ciseler les échalotes. Écraser la gousse d'ail avec la paume de la main.</li>
      <li>Faire fondre le beurre dans une cocotte. Ajouter les échalotes, la gousse d'ail écrasée ainsi que le bouquet garni. Une fois les échalotes translucide, ajouter le pineau.</li>
      <li>Mettre les moules dans la cocotte, couvrir et augmenter le feu. Cuire ensuite pendant 2 min. Arrêter la cuisson à partir du moment où les moules sont ouvertes.</li>
      <li>Filtrer le jus de cuisson des moules, ajouter le curry et le faire réduire d'un tiers. Disposer les coquilles pleines dans un plat à gratin. Préchauffer le four à 200 °C.</li>
      <li>Mélanger les jaunes d'oeufs et la crème. Verser ce mélange sur le jus de moules réduit sans le porter à ébullition. Ajouter le persil ciselé et rectifier l'assaisonnement.</li>
      <li>Verser la préparation sur les moules, puis enfourner à 200 °C pendant 4 min.</li>
      <li>Déguster dès la sortie du four.</li>
    </ul>
  </div>
);

export default Faq;
