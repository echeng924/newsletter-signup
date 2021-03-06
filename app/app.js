const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const memberRouter = require('./routes/memberRouter');
const weatherRouter = require('./routes/weatherRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/members', memberRouter);
app.use('/api/weather', weatherRouter);

module.exports = app;
