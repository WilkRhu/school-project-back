exports.up = function (knex) {
  return knex.schema.createTable('serieMaterias', (table) => {
    table.integer('serie_id').unsigned();
    table.integer('materia_id').unsigned();
    table.foreign('serie_id').references('id').inTable('serie');
    table.foreign('materia_id').references('id').inTable('materia');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('serieMaterias');
};
