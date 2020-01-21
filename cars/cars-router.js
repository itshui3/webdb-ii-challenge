//dependencies
const carsDb = require('./cars-model');
const router = require('express').Router();

//routes
router.get('/', (req, res) => {
  carsDb.selectAll()
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully retrieved car records`, resource: resou })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, could not retrieve car records` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  carsDb.selectById(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully retrieved car record`, resource: resou})
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal status error, could not retrieve car record` })
    })
})

router.post('/', (req, res) => {
  const newCar = req.body;
  carsDb.insert(newCar)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully added car record`, resource: resou})
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal status error, could not add car record` })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  carsDb.remove(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully deleted car record`, resource: resou })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal status error, could not remove car record` })
    })
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  carsDb.update(id, changes)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully updated car record`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal status error, could not update car record` })
    })
})

module.exports = router;