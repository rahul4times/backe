exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', (table)=>{
    table.increments();
    table.integer('car_id')
    .references('id')
    .inTable('cars')
    .onDelete('CASCADE')
    .index();
    table.string('link');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
