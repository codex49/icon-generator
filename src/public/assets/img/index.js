import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss';

import { Provider } from 'react-redux';
import Store from '../redux/store';
import App from '../components/App';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
