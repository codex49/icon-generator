import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../components/App';

import Store from '../redux/store';
import '../styles/styles.scss';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
