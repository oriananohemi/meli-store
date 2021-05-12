import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  </BrowserRouter>
);

export default Router;