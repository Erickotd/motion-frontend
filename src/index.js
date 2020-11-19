import React from 'react';
import ReactDOM from 'react-dom';

// Setup for Redux:
import { store } from './store';
import { Provider } from 'react-redux';

// Setup for Styled Components
import GlobalStyles from './GlobalStyles';

// import the routes
import Routes from './routes';

// Check and Distpatch to keep the session:
import { login } from './store/actions/loginActions';

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(login(token));
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>,
  document.getElementById('root')
);
