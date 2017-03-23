import React from 'react';
import { render } from 'react-dom';
import {  browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import routes from '../routes/exampleRouter';

import '../styles/app.less';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const loadedStates = ['complete', 'loaded', 'interactive'];

function run() {
    render(
        <Provider store={ store }>
            <div>
                <Router history={ history } routes={ routes }></Router>
            </div>
        </Provider>
        , document.querySelector('#app'));
}

if (loadedStates.indexOf(document.readyState) > -1 && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
