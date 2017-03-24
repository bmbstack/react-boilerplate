import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import record from '../middleware/record';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

import { /*browserHistory,*/ hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, record, routerMiddleware(hashHistory), createLogger()),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
