import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import { Provider } from 'react-redux';
import Store from '../redux/store';

const storeInstance = Store();

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('app')
);