import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route exact path="/pages/Home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)