var colors = require('colors/safe');
var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.development');

var port = process.argv.length > 2 ? +process.argv[2] : 8080;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//app.get('*', function(req, res) {
    //console.info(colors.red(path.resolve(`../dist/development/example.html`)));
    //res.sendFile(path.resolve(`../dist/development/example.html`));
//});

app.listen(port, function(err) {
    if (err) {
        return console.error(err);
    }

    console.info(colors.green.underline(`Listening at http://localhost:${port}/`));
})
