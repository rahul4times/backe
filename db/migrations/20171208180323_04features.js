
exports.up = function(knex, Promise) {
  return knex.schema.createTable('features', (table)=>{
    table.increments();
    table.integer('car_id')
    .references('id')
    .inTable('cars')
    .onDelete('CASCADE')
    .index();
    table.string('feature_1');
    table.string('feature_2');
    table.string('feature_3');
    table.string('feature_4');
    table.string('feature_5');
    table.string('feature_6');
    table.string('feature_7');
    table.string('feature_8');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('features');
};
