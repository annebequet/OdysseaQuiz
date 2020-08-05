// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

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
import Error404 from 'src/components/Error404';
import './styles.scss';

// == Composant
const App = ({
  checkIsLogged,
  getCategories,
  categoriesLoading,
  isLogged,
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
      {!categoriesLoading && (
        <>
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
        </>
      )}
      <Route
        exact
        path="/profile"
      >
        {isLogged && (
          <Page>
            <Profile />
          </Page>
        )}
        {!isLogged && (
        <Redirect path="/" />
        )}
      </Route>
      <Route
        exact
        path="/:slug"
        component={({ match }) => (
          <Page>
            <Error404 slug={!match.params} />
          </Page>
        )}
      />
      <Footer />
    </div>
  );
};

App.propTypes = {
  getCategories: PropTypes.func.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
  categoriesLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
