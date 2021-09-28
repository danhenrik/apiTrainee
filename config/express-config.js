require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

require('./auth');

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(express.static('public'));

const usersRouter = require('../entities/users/controllers');
app.use('/users', usersRouter);

const propertiesRouter = require('../entities/property/controllers');
app.use('/properties', propertiesRouter);

const errorHandler = require('../middlewares/error-handler');
app.use(errorHandler);

module.exports = app;
