// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/containers/App';
// Store
import store from 'src/store';
// Error Page
import ErrorPage from 'src/components/ErrorPage';

// Error Boundary
import { ErrorBoundary } from 'react-error-boundary';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
// Un Error Boundary qui permet dans le cas d'un problème de render de :
// - afficher une page d'erreur
// - Remettre à 0 le state
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
      >
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
