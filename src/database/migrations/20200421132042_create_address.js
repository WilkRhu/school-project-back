exports.up = function (knex) {
  return knex.schema.createTable("address", function (table) {
    table.increments();
    table.integer("users_id").unsigned();
    table.string("rua");
    table.string("numero");
    table.string("cidade");
    table.string("bairro");
    table.string("estado");
    table.string("telefone");
    table.string("referencia");
    table.foreign("users_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("address");
};
