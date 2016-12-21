import React from 'react';
import { Route } from 'react-router';
import * as containers from '../components/containers';

export default (
    <Route path="/" component={ containers.ExampleLayout }>
        <Route path="welcome/:content" component={ containers.Welcome }/>
        {/* other routes */}
    </Route>
);
