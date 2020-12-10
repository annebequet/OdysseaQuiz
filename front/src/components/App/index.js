// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
import Page from 'src/components/Page';
import Register from 'src/containers/Register';
import Home from 'src/components/Home';
import Categories from 'src/containers/Categories';
import Category from 'src/containers/Category';
import Profile from 'src/containers/Profile';
import Contact from 'src/components/Contact';
import Faq from 'src/components/Faq';
import Footer from 'src/components/Footer';
import Error404 from 'src/components/Error404';
import ErrorBoundary from 'src/containers/ErrorBoundary';
import './styles.scss';

// == Composant
const App = ({
  checkIsLogged,
  categoriesLoading,
  isLogged,
  showError,
}) => {
  useEffect(checkIsLogged, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
        >
          <Page>
            <Home />
          </Page>
        </Route>

        {!categoriesLoading && (
          <Route
            exact
            path="/categories"
          >
            <Page>
              <Categories />
            </Page>
          </Route>
        )}

        {!categoriesLoading && (
          <Route
            exact
            path="/categories/:slug"
            component={({ match }) => (
              <Page>
                <Category slug={match.params.slug} />
              </Page>
            )}
          />
        )}

        <Route
          exact
          path="/register"
        >
          {!isLogged ? (
            <Page>
              <Register />
            </Page>
          ) : (
            <Redirect to={{ pathname: '/' }} />
          )}
        </Route>

        <Route
          exact
          path="/profile/:slug"
          component={({ match }) => (
            <Page>
              <Profile slug={match.params.slug} />
            </Page>
          )}
        />

        <Route
          exact
          path="/contact"
        >
          <Page>
            <Contact />
          </Page>
        </Route>

        <Route
          exact
          path="/faq"
        >
          <Page>
            <Faq />
          </Page>
        </Route>

        {!categoriesLoading && (
          <Route path="*">
            <Error404 />
          </Route>
        )}
      </Switch>
      <Footer />
      {showError && (
        <ErrorBoundary />
      )}
    </div>
  );
};

App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
  categoriesLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  showError: PropTypes.bool.isRequired,
};

// == Export
export default App;
