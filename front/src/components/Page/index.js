import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Page = ({ children, location }) => {
  const pageBackground = location === '/' ? '' : 'page__otherPages';

  return (
    <main className={`page ${pageBackground}`}>
      <div className="page__content">
        { children }
      </div>
    </main>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string,
};

Page.defaultProps = {
  location: undefined,
};

export default Page;
