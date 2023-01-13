import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Details from '../pages/Details';
import Header from './Header';
import Footer from './Footer';

/**
 * composant principal de l'application pour définir les différentes routes de l'application
 * les composants header et footer sont appelés pour toujours encadrer les éléments pages.
 * Les routes des éléments page précisent le chemin (path) et l'élément page à afficher.
 * Notez que l'élément page NotFound a pour chemin "*" pour gérer toutes les routes qui n'ont pas été définies.
 */
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/About" element={< About />} />
          <Route path="/Details/:id" element={< Details />} />
          <Route path="*" element={< NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;