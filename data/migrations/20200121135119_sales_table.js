
exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table.decimal('profit').notNullable();
    table.integer('carsId').references('id').inTable('cars');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
