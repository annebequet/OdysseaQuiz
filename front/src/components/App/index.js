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
import Home from 'src/components/Home';
import Categories from 'src/containers/Categories';
import Profile from 'src/components/Profile';
import './styles.scss';

// == Composant
const App = ({
  surveyLoading,
  getSurveys,
  checkIsLogged,
  getCategories,
}) => {
  useEffect(() => {
    getCategories();
    getSurveys();
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
      {!surveyLoading && (
        <>
          <Route
            exact
            path="/"
          >
            <Page>
              <Home />
            </Page>
          </Route>
        </>
      )}
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
  getCategories: PropTypes.func.isRequired,
  getSurveys: PropTypes.func.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
  surveyLoading: PropTypes.bool.isRequired,
};

// == Export
export default App;
