
exports.up = function(knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments();

    table.string('VIN', 17).notNullable();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.integer('mileage').notNullable();

    table.string('transmissionType');
    table.string('titleStatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
