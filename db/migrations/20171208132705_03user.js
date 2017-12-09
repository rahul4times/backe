exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('uname')
    .notNullable();
    table.string('uemail')
    .notNullable();
    table.bigInteger('uphone')
    .notNullable();
    table.string('uinterest')
    .notNullable();
    table.text('umessage');
    table.boolean('followup');
    table.boolean('read');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
