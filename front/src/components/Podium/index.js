import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Scores = (
  scores,
) => (
  <div className="category__rank">
    <h3>Podium</h3>
    {Object.keys(scores.scores).map((scoreId) => {
      const { score } = scores.scores[scoreId];
      const { pseudo } = scores.scores[scoreId].user;
      return (
        <p
          key={scoreId}
        >
          {scoreId}. {pseudo} : {score}%
        </p>
      );
    })}
  </div>
);

export default Scores;
