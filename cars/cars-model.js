// knex require && db build
const db = require('knex')(require('../knexfile').development);

module.exports = {
  selectAll,    //  
  selectById,   //  selectById(id)
  insert,       //  insert(car)
  update,       //  update(id, changes)
  remove        //  remove(id)
}

// helpers

function selectAll() {
  return db('cars');
}

function selectById(id) {
  return db('cars').where({ id })
}

function insert(car) {
  return db('cars').insert(car);
}

function update(id, changes) {
  return db('cars').where({ id }).update(changes)
} 

function remove(id) {
  return db('cars').where({ id }).del();
}