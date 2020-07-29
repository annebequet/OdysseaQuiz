// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Import
import Video from 'src/components/Video';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';
import Register from 'src/containers/Register';
import Home from 'src/components/Home';
import Categories from 'src/components/Categories';
import Profile from 'src/components/Profile';
import './styles.scss';

// == Composant
const App = ({
  getSurveys,
}) => {
  useEffect(() => {
    getSurveys();
  }, []);

  return (
    <div className="app">
      <Video />
      <Header />
      <Route
        exact
        path="/register"
      >
        <Page>
          <Register />
        </Page>
      </Route>
      <Route
        exact
        path="/"
      >
        <Page>
          <Home />
        </Page>
      </Route>
      <Route
        exact
        path="/categories"
      >
        <Page>
          <Categories />
        </Page>
      </Route>
      <Route
        exact
        path="/profile"
      >
        <Page>
          <Profile />
        </Page>
      </Route>
      <Footer />
    </div>
  );
};

App.propTypes = {
  getSurveys: PropTypes.func.isRequired,
};

// == Export
export default App;
