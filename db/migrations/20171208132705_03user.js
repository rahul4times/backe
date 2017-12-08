exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('uname');
    table.string('uemail').notNullable().unique();
    table.bigInteger('uphone');
    table.string('uinterest');
    table.text('umessage');
    table.boolean('followup');
    table.boolean('read');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
