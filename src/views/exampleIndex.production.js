import React from 'react';
import { render } from 'react-dom';
import { /*hashHistory as history,*/ browserHistory as history, } from 'react-router';
import { Provider } from 'mobx-react';
import { observable } from 'mobx';

import routes from '../routes/exampleRouter';
import stores from '../stores';

import App from '../components/App';
import '../styles/app.sass';

const loadedStates = ['complete', 'loaded', 'interactive'];
const storeObservable = observable(stores);

function run() {
    render(
        <Provider { ...storeObservable }>
            <div>
                <App history={ history } routes={ routes } />
            </div>
        </Provider>
        , document.querySelector('#app'));
}

if (loadedStates.indexOf(document.readyState) > -1 && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
