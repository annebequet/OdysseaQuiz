// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Import
import Video from 'src/components/Video';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';
import Register from 'src/containers/Register';
import Home from 'src/containers/Home';
import Categories from 'src/containers/Categories';
import Category from 'src/containers/Category';
import Profile from 'src/containers/Profile';
import './styles.scss';

// == Composant
const App = ({
  checkIsLogged,
  getCategories,
}) => {
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(checkIsLogged, []);

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
        path="/categories/:slug"
        component={({ match }) => (
          <Page>
            <Category slug={match.params.slug} />
          </Page>
        )}
      />
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
  getCategories: PropTypes.func.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
