import React from 'react';
import { render } from 'react-dom';
import { hashHistory, /*browserHistory,*/ Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import routes from '../routes/exampleRouter';

import '../styles/app.less';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
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

if (loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
