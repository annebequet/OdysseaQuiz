import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Faq = () => (
  <div className="faq__container">
    <h2 className="faq__title">FAQ's</h2>

    <div className="faq__question-answers">
      <details className="faq__details">
        <summary className="faq__question"> Comment jouer à un quiz ? </summary>
        <p className="faq__answer"> Il suffit de cliquer sur une catégorie et une série de 10 questions vous sera posée !
          Respectez le temps imparti sans quoi les questions qui n’auront pas été posées seront comptées comme fausses.
        </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> Comment sont calculées les notes ? </summary>
        <p className="faq__answer"> Elles reflètent simplement la moyenne de toutes les notes que vous avez obtenues jusqu’à présent dans un thème donné. Pour l’améliorer, n’hésitez pas à faire et refaire les quiz ! C’est en quizant qu’on devient quizeron. </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> Je veux proposer une question !</summary>
        <p className="faq__answer"> Il suffit pour cela de <Link exact="true" to="/contact">nous contacter</Link> pour nous les envoyer. </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> Je souhaite acheter un hippocampe/un poisson etc.</summary>
        <p className="faq__answer"> Nous ne sommes pas une boutique en ligne. Et envoyer un animal par la poste ce n’est vraiment pas très gentil. </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> Puis-je changer mes informations ?</summary>
        <p className="faq__answer"> Bien sûr ! Vous pouvez éditer votre email, votre mot de passe et même votre pseudo ! Il suffit de vous connecter et d'aller sur votre profil.  </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> Je veux supprimer mon compte. </summary>
        <p className="faq__answer"> Nous sommes désolés de vous voir partir ! Si vous souhaitez proposer des améliorations il est possible de <Link exact="true" to="/contact">nous contacter</Link> par mail. Si vous êtes sûr de vouloir prendre cette décision radicale et décevante, rendez vous sur votre profil. Votre adresse email ne sera pas conservée, ni vos scores, vous devrez recommencer à zéro. </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> Je veux un autre avatar que ceux proposés. </summary>
        <p className="faq__answer"> Mince alors !
          Rien ne vous empêche de nous proposer un nouvel avatar si celui ci respecte la charte graphique du site, ceci dit rien n’est garanti. Si vous voulez mettre une photo de votre plus belle paire de chaussures, désolé, ça ne sera pas possible.
        </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> D'où viennent nos icônes de profil ?</summary>
        <p className="faq__answer">
          Icônes par <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> de <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </p>
      </details>

      <details className="faq__details">
        <summary className="faq__question"> La recette de la mouclade s’il vous plaît ? </summary>
        <ul className="faq__answer">
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
      </details>
    </div>
  </div>
);

export default Faq;
