import React from 'react';
import { Route } from 'react-router';

import loadAsyncWelcome from '../components/containers/AsyncWelcome.lazy';
import ExampleContainer from '../components/containers/ExampleContainer';

import Demo1Container from '../components/containers/Demo1Container';
import Demo2Container from '../components/containers/Demo2Container';

export default (
    <Route path='/' component={ ExampleContainer }>
        <Route path="lazy" getComponent={ (nextState, cb) => loadAsyncWelcome(component => cb(null, component.default)) } />
        <Route path="demo1" test="1" component={ () => <Demo1Container /> } />
        <Route path="demo2" component={ () => <Demo2Container /> } />
    </Route>
);
