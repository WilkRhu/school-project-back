// Update with your config settings.

module.exports = {

  /*development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },*/

  development: {
    client: 'postgres',
    connection: {
      database: 'school',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'postgres',
    connection: {
      database: 'scholl',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
