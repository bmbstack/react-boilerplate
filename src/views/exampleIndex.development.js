import React from 'react';
import { render } from 'react-dom';
import { hashHistory as history, /*browserHistory,*/ Router } from 'react-router';
import { Provider } from 'mobx-react';
import { observable } from 'mobx';
import DevTools from 'mobx-react-devtools';

import routes from '../routes/exampleRouter';
import stores from '../stores';

const loadedStates = ['complete', 'loaded', 'interactive'];
const storeObservable = observable(stores);

function run() {
    render(
        <Provider { ...storeObservable }>
            <div>
                <Router history={ history } routes={ routes }></Router>
                <DevTools />
            </div>
        </Provider>
        , document.querySelector('#app'));
}

if (loadedStates.indexOf(document.readyState) > -1 && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}

if (module.hot) {
    //module.hot.accept('../stores', () => {
        //const newStores = require('../stores').default;
        //console.dir(newStores)
        //console.dir(storeObservable)
    //});
    module.hot.accept();
}
