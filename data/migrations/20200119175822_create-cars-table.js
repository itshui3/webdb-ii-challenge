
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.string('VIN', 17).unique().primary().notNullable();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.integer('mileage').notNullable();

    table.string('transmissiontype');
    table.string('titlestatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
