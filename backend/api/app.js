const express = require('express');
const cors = require('cors');
const errorHandler = require('../middlewares/errorHandler');
const registerRouter = require('../routers/registerRouter');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/register', registerRouter);

app.use(errorHandler);

module.exports = app;