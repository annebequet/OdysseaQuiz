import React from 'react';
import PropTypes from 'prop-types';

import ExempleSurveys from 'src/containers/ExempleSurveys';
import HomepageInformations from 'src/components/HomepageInformations';

import './styles.scss';

const Home = () => (
  <div className="mainPage">
    <HomepageInformations />
    <ExempleSurveys />
  </div>
);

export default Home;
