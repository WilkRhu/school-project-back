const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'school'
});
 
connection.connect(() => {
    console.log("Conectado ao banco de dados!")
});
 
//connection.end();