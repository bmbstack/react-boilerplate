import React from 'react';
import { Router } from 'react-router';

const App = ({ history, routes }) => (
    <Router history={ history } routes={ routes }></Router>
);

export default App;
