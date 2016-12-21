import React from 'react';
import { render } from 'react-dom';
import { hashHistory, /*browserHistory,*/ Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import routes from '../routes/exampleRouter';
import DevTools from '../components/DevTools';

import '../styles/app.less';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={ store }>
        <div>
            <Router history={ history } routes={ routes }></Router>
            <DevTools />
        </div>
    </Provider>
, document.querySelector('#app'));
