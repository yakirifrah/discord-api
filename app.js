const express = require('express');
const morgan = require('morgan');

const app = express();

// Rotes
const roleRoute = require('./routes/role');
// const userRoute = require('./routes/user');

// Middleware
app.use(morgan('dev'));

// app.use('/', userRoute);
app.use('/', roleRoute);


module.exports = app;
