

const express = require('express');
const app = express();
const morgan = require('morgan');


const tourRoute = require('./routes/tourRoutes')
const userRoute = require('./routes/userRoutes')
///middleware
app.use(express.json());

app.use(morgan('combined'));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});






// ///GET all tours
// app.get('/api/v1/tours', getAllTours);

// ///POST
// app.post('/api/v1/tours', createTours);
// //GET single tour
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//Routes




app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);


module.exports = app