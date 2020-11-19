import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const IsAutheticated = useSelector(
    (state) => state.loginReducer.authenticated
  );
  if (rest.path === '/auth/signup' || rest.path === '/auth/login') {
    return (
      <Route
        {...rest}
        render={() => {
          return IsAutheticated ? <Redirect to="/" /> : children;
        }}
      ></Route>
    );
  } else if (rest.path === '/') {
    return (
      <Route
        {...rest}
        render={() => {
          return IsAutheticated ? (
            children
          ) : (
            <Redirect to="/auth/login"></Redirect>
          );
        }}
      ></Route>
    );
  } else {
    return (
      <Route
        {...rest}
        render={() => {
          return IsAutheticated ? (
            <Redirect to="/"></Redirect>
          ) : (
            <Redirect to="/auth/login"></Redirect>
          );
        }}
      ></Route>
    );
  }
};

export default PrivateRoute;
