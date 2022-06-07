const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const registerRouter = require('../routers/registerRouter');

const app = express();

app.use(express.json());

app.use('/register', registerRouter);

app.use(errorHandler);

module.exports = app;