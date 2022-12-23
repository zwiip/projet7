import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Error, Route } from 'react-router-dom'
import './styles/index.css';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route>
                  <Error />
              </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)