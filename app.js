const express = require('express');
const morgan = require('morgan');

const app = express();

// Rotes
const roleRoute = require('./routes/role');


// Middleware
app.use(morgan('dev'));

app.use('/role', roleRoute);


module.exports = app;
