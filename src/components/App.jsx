import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../assets/styles/sass/main.scss';
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

/*
import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/sass/main.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Details from './pages/Details';
import Header from './components/Header';
import Footer from './components/Footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
        <Header />
          <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/About" element={< About />} />
              <Route path="/Details" element={< Details />} />
              <Route element={< NotFound />} />
          </Routes>
          <Footer />
  </BrowserRouter>
)
*/