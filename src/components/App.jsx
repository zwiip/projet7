import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Details from '../pages/Details';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/About" element={< About />} />
          <Route path="/Details" element={< Details />} />
          <Route path="*" element={< NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;