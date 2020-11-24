import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  const AuthComponent = (props) => {
    const { authenticated, history, location } = props;

    useEffect(() => {
      const path = location.pathname;
      if (
        authenticated &&
        (path === '/auth/signup' || path === '/auth/login')
      ) {
        history.push('/');
      } else if (authenticated) {
        history.push(path);
      } else if (
        path === '/auth/signup' ||
        path === '/auth/login' ||
        path === '/auth/signup/sent' ||
        path === '/auth/signup/validation'
      ) {
        history.push(path);
      } else {
        history.push('/auth/login');
      }
    }, [authenticated]);

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({
    authenticated: state.loginReducer.authenticated,
  });
  return connect(mapStateToProps)(AuthComponent);
};

// TODO consider replacing this HOC with a simple redirect in the <App> using the same kind of logic inside a useEffect
// TODO refresh token every so often to prevent access from expiring
// TODO when token expired, try refresh first before redirect to login page
// TODO needs a check to redirect from baseURL to either /feed or /login
