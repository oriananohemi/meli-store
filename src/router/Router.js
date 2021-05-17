import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Results from '../pages/Results';

const Router = () => (
  <BrowserRouter basename="/meli-store/">
      <Header/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/items"><Results /></Route>
        <Route exact path="/items:id"><Details /></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
);

export default Router;