
exports.up = function(knex) {
  return knex.schema.createTable('serie', function(table){
      table.increments('id').primary();
      table.string('ano').notNullable();
      table.integer('users_id').unsigned();
      table.foreign('users_id').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('serie');
};
