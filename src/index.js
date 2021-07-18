import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import {polyfill} from 'es6-promise';

import store from './store/store';
import {Provider} from 'react-redux';

polyfill();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
