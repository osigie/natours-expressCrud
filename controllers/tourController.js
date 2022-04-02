const fs = require('fs');
///Route handles
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const checkId = (req, res, next, value) => {
  console.log(value);
  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      staus: 'fail',
      message: 'invalid ID',
    });
  }
  next();
};

const checkBdy = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'please complete the details',
    });
  }
  next();
};

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
};

const createTours = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign(req.body, { id: newId });
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours, null, 3),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const getTour = (req, res) => {
  // console.log(req.requestTime)
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  // if (tour) {
  res.status(200).json({
    requestedAt: req.requestTime,
    status: 'succes',
    data: {
      tour,
    },
  });
  // } else {
  //   res.status(404).json({
  //     staus: 'fail',
  //     message: 'invalid ID',
  //   });
  // }
};

const updateTour = (req, res) => {
  // const tour = tours.find(el=> el.id === id);
  // const id = req.params.id * 1;
  // if (id > tours.length) {
  //   res.status(404).json({
  //     staus: 'fail',
  //     message: 'invalid ID',
  //   });
  // } else {
  res.status(201).json({
    status: 'succes',
    data: {
      tour: '<updated here.....>',
    },
  });
  // }
};

const deleteTour = (req, res) => {
  // const tour = tours.find(el=> el.id === id);
  // const id = req.params.id * 1;
  // if (id > tours.length) {
  //   res.status(404).json({
  //     staus: 'fail',
  //     message: 'invalid ID',
  //   });
  // } else {
  res.status(204).json({
    status: 'succes',
    data: {
      tour: null,
    },
  });
  // }
};

module.exports = {
  getAllTours,
  getTour,
  deleteTour,
  updateTour,
  createTours,
  checkId,
  checkBdy,
};
