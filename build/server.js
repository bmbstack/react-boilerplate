import colors from 'colors/safe';
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import config from './webpack.config.development';

const port = process.argv.length > 2 ? +process.argv[2] : 8080;
const app = express();

//* Webpack
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    headers: {
        "X-DEV-Header": "yes"
    }
}));

app.use(require('webpack-hot-middleware')(compiler));
//*/

app.use(express.static(path.join(__dirname, '../src/static')));

app.post('/apple', (req, res) => {
    res.json({
        code: 99999,
        data: 1,
        msg: 'success'
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    console.info(colors.green.underline(`Listening at http://localhost:${port}/`));
});
