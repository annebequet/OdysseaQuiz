// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useHistory } from 'react-router-dom';

// == Import
import Video from 'src/containers/Video';
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
  updateLocation,
  location,
}) => {
  useEffect(checkIsLogged, []);

  useEffect(() => {
    getCategories();
  }, []);
  const history = useHistory();

  useEffect(() => history.listen((location) => {
    updateLocation(location.pathname);
  }), [history]);

  const titleClassName = location === '/' ? 'title__frontPage' : 'title__otherPages';

  return (
    <div className="app">
      <div className="title">
        <h1 className={titleClassName}>ODYSSEA QUIZ</h1>
      </div>
      <Video />
      <div className="mainPage">
        <Header />
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
            path="/profile/:slug"
            component={({ match }) => (
              <Page>
                <Profile slug={match.params.slug} />
              </Page>
            )}
          />
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
  categoriesLoading: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};

// == Export
export default App;
