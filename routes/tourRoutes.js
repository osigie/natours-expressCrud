const {
  getAllTours,
  getTour,
  deleteTour,
  updateTour,
  createTours,
  checkId,
  checkBdy
} = require('../controllers/tourController');

const express = require('express');
const router = express.Router();


// router.param("id", (req, res, next, value) => {
//     console.log(`this is id ${value}`)
// })

router.param("id", checkId);

router.route('/').get(getAllTours).post(checkBdy, createTours)

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router