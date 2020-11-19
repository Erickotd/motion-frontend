import React from 'react';
import { Credentials, Error, Feed } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthComponent from '../HOCs/AuthComponent';
import { Navbar } from '../components';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={'/auth'} component={AuthComponent(Credentials)} />
          <Route exact path="/" component={AuthComponent(Feed)} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
