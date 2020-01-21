//require in the knex connected db
const knex = require('knex');
const db = knex(require('../knexfile').development);

module.exports = {

  selectAll,
  selectById,   // selectById(carId)
  insert,       // insert(car)
  update,       // update(carId, changes)
  remove,       // remove(carId)
  removeAll
}
//helpers
function selectAll() {
  return db('cars');
}

function selectById(carId) {
  return db('cars')
    .where({ id: carId});
}

function insert(car) {
  console.log(car);
  db('cars').insert(car)
    .then( ids => {
      console.log(ids);
      return db('cars')
        .where({ id: ids })
// will return a car object, not id :: 2:45PM 1.19
    })
}

function update(carId, changes) {
  db('cars').where({ id: carId }).update(changes)
    .then( ids => {
      return db('cars').where({ id: ids });
    })
// will return an updated car object, not id :: 2:45PM 1.19
}

function remove(carId) {
  return db('cars').where({ id: carId }).del();
}

function removeAll() {
  return db('cars').del();
// don't do this pls, is for lels not a useCase :: 2:45PM 1.19
}