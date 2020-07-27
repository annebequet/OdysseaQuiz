// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';


// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';
import Register from 'src/components/Register';
import Home from 'src/components/Home';
import Categories from 'src/components/Categories';
import Profile from 'src/components/Profile';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        objectFit: 'cover',
        zIndex: '-1',
      }}
    >
      <source
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rytughwRxj1s1gmp3/videoblocks-underwater-landscape-of-coral-reef-amazing-underwater-marine-life-world-scuba-diving-and-snorkeling_baj3ircnz__d3d6d16680620376fe9c58e37c21cfb7__P360.mp4"
        type="video/mp4"
      />
    </video>
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

// == Export
export default App;
