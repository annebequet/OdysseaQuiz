// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, useHistory, Redirect,
} from 'react-router-dom';

// == Import
import Video from 'src/components/Video';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Page from 'src/containers/Page';
import Register from 'src/containers/Register';
import Home from 'src/containers/Home';
import Categories from 'src/containers/Categories';
import Category from 'src/containers/Category';
import Profile from 'src/containers/Profile';
import Contact from 'src/components/Contact';
import Faq from 'src/components/Faq';
import Error404 from 'src/components/Error404';
import FrontPageInformations from 'src/components/FrontPageInformations';
import './styles.scss';

// == Composant
const App = ({
  checkIsLogged,
  getCategories,
  categoriesLoading,
  updateLocation,
  clearErrors,
  isLogged,
}) => {
  useEffect(checkIsLogged, []);

  useEffect(() => {
    getCategories();
  }, []);

  const history = useHistory();
  useEffect(() => history.listen((location) => {
    updateLocation(location.pathname);
    clearErrors();
  }), [history]);

  return (
    <div className="app">
      <Video />
      <div className="mainPage">
        <Header />
        <FrontPageInformations />
        <Switch>
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
            path="/"
          >
            <Page>
              <Home />
            </Page>
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
          <Route path="*">
            <Page>
              <Error404 />
            </Page>
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  updateLocation: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  categoriesLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
