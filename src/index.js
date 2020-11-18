import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
