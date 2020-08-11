import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Title = ({ location }) => {
  const titleClassName = location === '/' ? 'title__frontPage' : 'title__otherPages';

  return (
    <div className="introductionInformations">
      <div className="title">
        <h1 className={titleClassName}>ODYSSEA QUIZ</h1>
        <div className="introductionText">
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Title;
