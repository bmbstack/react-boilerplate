import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import routes from '../../routes/exampleRouter';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={ store }>
        <div>
            <Router history={ history } routes={ routes }></Router>
        </div>
    </Provider>
, document.getElementById('#app'));
