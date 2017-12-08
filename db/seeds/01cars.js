exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          year: '',
          make: '',
          model: '',
          trim: '',
          engine: '',
          body_type: '',
          ext_color: '',
          int_color: '',
          transmission: '',
          price: ,
          vin: 'rowValue1',
        },

      ]);
    });
};
