exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', (table)=>{
    table.increments();
    table.string('year');
    table.string('make');
    table.string('model');
    table.string('trim');
    table.string('engine');
    table.string('body_type');
    table.string('ext_color');
    table.string('int_color');
    table.string('transmission');
    table.integer('price');
    table.string('vin');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars')
};
