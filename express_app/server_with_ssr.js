import colors from 'colors/safe';
import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// ssr
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router, RouterContext, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import routes from '../src/routes/exampleRouter';

const port = process.argv.length > 2 ? +process.argv[2] : 8080;
const app = express();

app.use(favicon(path.join(__dirname, '../dist/production/', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/production')));
app.use((err, req, res, next) => {
    if (req.xhr)
        res.status(500).send({ 
            code: 0,
            msg: 'failed',
            data: null 
        });
    else
        next(err);
});

const store = configureStore();
const loadedStates = ['complete', 'loaded', 'interactive'];

app.get('/', (req, res) => {
    match({ routes, location: req.url }, async (err, redirect, props) => {
        res.send(wrapHTML(renderToString(
            <Provider store={ store }>
                <RouterContext {...props} />
            </Provider>
        )));
    });
});

app.get('/welcome/:content', (req, res) => {
    match({ routes, location: req.url }, async (err, redirect, props) => {
        res.send(wrapHTML(renderToString(
            <Provider store={ store }>
                <RouterContext {...props} />
            </Provider>
        )));
    });
});

app.post('/apple', (req, res) => {
    res.status(200).json({
        code: 99999,
        msg: 'success',
        data: 1,
    });
});

function wrapHTML(html) {
    return `<!DOCTYPE html>
<html>
    <head>
        <link href="http://cdn.bootcss.com/antd/2.7.3/antd.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/css/example.style.css">
    </head>
    <body>
        <div id="app">
            ${html}
        </div>
        <script src="http://cdn.bootcss.com/react/15.4.1/react.min.js"></script>
        <script src="http://cdn.bootcss.com/react/15.4.1/react-dom.min.js"></script>
        <script src="http://cdn.bootcss.com/antd/2.7.3/antd.min.js"></script>
        <script type="text/javascript" src="/js/vendor.js?ca897f37aa18e76dc6d7"></script>
        <script type="text/javascript" src="/example.bundle.js?ca897f37aa18e76dc6d7"></script>
    </body>
</html>`;
}

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    console.info(colors.green.underline(`Listening at http://localhost:${port}/`));
});
