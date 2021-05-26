const knex = require('knex');
const configuration = require('../../knexfile');
const type = process.env.NODE_ENV;

const connection = knex(configuration.test);

module.exports = connection;
