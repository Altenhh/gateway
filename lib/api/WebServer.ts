import express from 'express';

// init express server
const app = express();

// set base stuff
app.set('port', process.env.PORT || require(`${__dirname}/../../config/general.js`).http_port);

// static
app.use('/', express.static(`${__dirname}/../../static`));

app.set('views', `${__dirname}/../../static/views`);
app.set('view engine', 'pug');

export default app;