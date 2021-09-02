const express = require('express');
const { resolve } = require('path');
const { urlencoded, json } = require('body-parser');
const home = require('./home');

const app = express();
const host = process.env.YOUR_HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.set('views', __dirname + '/dist');
app.engine('html', require('ejs').renderFile);

app.use(json());
app.use(urlencoded({extended: false}));
app.use(express.static(resolve(__dirname, 'dist')));

app.use('/', home);

app.listen(port, host, () => {
    console.info(`App listening on port ${host}:${port}!`);
});
