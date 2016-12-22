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

app.get('/:path', function(req, res) {
    res.sendFile(path.resolve(`../dist/development/${req.params.path}`));
});

app.listen(port, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log(`Listening at http://localhost:${port}/`);
})
