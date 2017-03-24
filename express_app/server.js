import colors from 'colors/safe';
import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const port = process.argv.length > 2 ? +process.argv[2] : 8080;
const app = express();

app.use(favicon(path.join(__dirname, '../dist/production/', 'favicon.png')));
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());
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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/production/example.html'));
});

app.post('/apple', (req, res) => {
    res.status(200).json({
        code: 99999,
        msg: 'success',
        data: 1,
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    console.info(colors.green.underline(`Listening at http://localhost:${port}/`));
});
