// Update with your config settings.
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'school',
      user: 'postgres',
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
      user: 'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'postgres',
    connection: {
      database: 'test',
      user: 'postgres',
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
  }

};
