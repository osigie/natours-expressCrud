

const express = require('express');
const app = express();
const morgan = require('morgan');


const tourRoute = require('./routes/tourRoutes')
const userRoute = require('./routes/userRoutes')
///middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`))
app.use(morgan('combined'));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});





app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);


module.exports = app