
exports.up = function(knex) {
  return knex.schema.table('cars', (table) => {
    table.increments('id').primary();
  })
};

exports.down = function(knex) {
  // drop created id column
  // reassign primary key to vin
  return knex.schema.table('cars', (table) => {
    table.dropColumn('id');
  })
};
