import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/**
 * Permet de créer un élément à la racine du DOM et d'y afficher le composant global "App"
 * Le StrictMode est utile pendant le développement pour repérer les problèmes potentiels. Il est recommandé de le retirer pour mettre l'app en production.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);