import React from 'react';
import { Route } from 'react-router';

import loadAsyncWelcome from '../components/containers/AsyncWelcome.lazy';
import ExampleContainer from '../components/containers/ExampleContainer';

export default (
    <Route path='/' component={ ExampleContainer }>
        <Route path="lazy" getComponent={ (nextState, cb) => loadAsyncWelcome(component => cb(null, component.default)) } />
    </Route>
);
