
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1234567890ABCDEFD', make: 'Toyota', model: 'Camry', mileage: 150},
        {VIN: '1234567890ABCDEFE', make: 'Tesla', model: 'Model S', mileage: 250},
        {VIN: '1234567890ABCDEFZ', make: 'Ford', model: 'BigBoi', mileage: 350}
      ]);
    });
};
