import React from 'react';
import { Credentials } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthComponent from '../HOCs/AuthComponent';
import PagesRoutes from '../pages/PagesRoutes';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={'/auth'} component={AuthComponent(Credentials)} />
          <Route path={'/'} component={AuthComponent(PagesRoutes)} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
