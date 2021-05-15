import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import Details from '../pages/Details'
import Results from '../pages/Results'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/list" component={ Results } />
      <Route exact path="/details" component={ Details } />
    </Switch>
  </BrowserRouter>
);

export default Router;