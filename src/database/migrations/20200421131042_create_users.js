
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('login').notNullable();
      table.string('email').notNullable();
      table.string('senha').notNullable();
      table.string('tipo').notNullable();
      table.string('dataNascimento').notNullable();
      table.string('token').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
