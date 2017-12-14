
exports.up = function(knex, Promise) {
  return knex.schema.createTable('features', (table)=>{
    table.increments();
    table.integer('car_id')
    .references('id')
    .inTable('cars')
    .onDelete('CASCADE')
    .index();
    table.string('elect_stab');
    table.string('wireless');
    table.string('seat');
    table.string('keyless');
    table.string('trip_comp');
    table.string('tire_pressure');
    table.string('wiper');
    table.string('headlight');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('features');
};
