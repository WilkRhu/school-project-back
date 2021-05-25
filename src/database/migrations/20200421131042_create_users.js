exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("login").notNullable();
    table.string("email").notNullable().unique();
    table.string("senha").notNullable();
    table.enu("tipo", ["admin", "aluno", "professor"]).notNullable();
    table.string("dataNascimento").notNullable();
    table.timestamp("create_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
