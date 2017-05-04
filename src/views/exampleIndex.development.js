import React from 'react';
import { render } from 'react-dom';
import { hashHistory as history, /*browserHistory,*/ } from 'react-router';
import { Provider } from 'mobx-react';
import { observable } from 'mobx';
import DevTools from 'mobx-react-devtools';
import { AppContainer } from 'react-hot-loader';

import routes from '../routes/exampleRouter';
import stores from '../stores';

import App from '../components/App';
import '../styles/app.sass';

const loadedStates = ['complete', 'loaded', 'interactive'];
const storeObservable = observable(stores);

function run() {
    render(
        <Provider { ...storeObservable }>
            <AppContainer>
                <div>
                    <App history={ history } routes={ routes } />
                    <DevTools />
                </div>
            </AppContainer>
        </Provider>
        , document.querySelector('#app'));
}

if (loadedStates.indexOf(document.readyState) > -1 && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}

if (module.hot) {
    module.hot.accept();
    //module.hot.accept(['../components/App'], () => {
        //const NextApp = require('../components/App').default;
        //render(
            //<Provider { ...storeObservable }>
                //<AppContainer>
                    //<div>
                        //<NextApp history={ history } routes={ routes } />
                        //<DevTools />
                    //</div>
                //</AppContainer>
            //</Provider>
            //, document.querySelector('#app'));
    //});
}
