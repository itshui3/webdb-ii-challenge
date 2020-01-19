//build
const router = require('express').Router();
//routes
const carsRouter = require('../cars/carsRouter');

router.use('/cars', carsRouter);

module.exports = router;