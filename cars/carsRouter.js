//build
const router = require('express').Router();
//db
const carsDb = require('./carsDb');
//routes
// get all
router.get('/', (req, res) => {
  carsDb.selectAll()
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully fetched car records`, resource: resou });
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: could not fetch car records` })
    })

})
// get by id
router.get('/:id', (req, res) => {
  // validate id :: 2:45PM 1.19
  const id = req.params.id;
  carsDb.selectById(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully fetched car record`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch car record` })
    })
})
// insert
router.post('/', (req, res) => {
  const newCarRecord = req.body;
  console.log(req.body);
  carsDb.insert(newCarRecord)
    .then( resou => {
      console.log(resou);
      res.status(200).json({ message: `status 200: successfully added record`, resource: resou })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, could not add record` })
    })
})
// update
router.put('/:id', (req, res) => {
  // validate id && validate newRecord :: 2:45PM 1.19
  const id = req.params.id;
  const newCarRecord = req.body;
  console.log(id, newCarRecord);
  carsDb.update(id, newCarRecord)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully updated record`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not update record` })
    })
})
// del
router.delete('/:id', (req, res) => {
  // validate car id  :: 3:05PM 1.19
  const id = req.params.id;
  carsDb.remove(id)
    .then( resou => {
      res.status(204);
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not remove record` })
    })
})
// del all
router.delete('/', (req, res) => {
  // validate existence of cars  :: 3:05PM 1.19
  carsDb.removeAll()
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully removed ${resou} car records` })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not remove records` })
    })
})

module.exports = router;