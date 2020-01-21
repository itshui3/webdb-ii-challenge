const router = require('express').Router();
const carsRouter = require('../cars/cars-router')

router.use('/cars', carsRouter);

module.exports = router;