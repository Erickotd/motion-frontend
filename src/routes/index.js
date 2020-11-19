import React from 'react';
import { Error, Login, SignUp, Feed, PrivateRoute } from '../pages/index';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Feed />
          </PrivateRoute>
          <PrivateRoute path="/auth/signup" exact={true}>
            <SignUp />
          </PrivateRoute>
          <PrivateRoute path="/auth/login" exact={true}>
            <Login />
          </PrivateRoute>
          <PrivateRoute path="*">
            <Error />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;

// <Route path={'/auth'} component={Credentials} />
// <Navbar>
//   <Route exact path="/feed" component={AuthComponent(Feed)} />
//   <Route render={() => <Redirect to={{ pathname: '/feed' }} />} />
// </Navbar>
