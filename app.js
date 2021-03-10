const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Rotes
const roleRoute = require('./routes/role');


// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/role', roleRoute);


module.exports = app;
