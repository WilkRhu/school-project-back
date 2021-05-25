const postgres = require('pg');

const connection = postgres.createConnection({
  host: 'localhost',
  user: process.env.DATAUSER,
  password: process.env.DATAPASSWORD,
  database: process.env.DATABASE,
});

connection.connect(() => {
  console.log('Conectado ao banco de dados!');
});

connection.end();
